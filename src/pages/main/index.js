import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    //variavel de estado, serve para armaenzar variaveis no react
    //usamos ela porque o metodo render fica ouvindo as alterações no estado
    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    //Metodo executado depois que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    //precisamos utilizar arrow function para funções fora do react, porque ele nao sobreescreve o this, funções do react usa normal
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        //console.log(response.data.docs);

        //pegar o docs e armanezar todo o resto em productInfo
        const { docs, ...productInfo } = response.data;

        //preencher variavel na variavel de estado
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    };
    
    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)

    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(produtc => (   
                    //<h2 key={produtc._id}>{produtc.title}</h2>s
                    <article key={produtc._id}>
                        <strong>{produtc.title}</strong>
                        <p>{produtc.description}</p>

                        <Link to={`/products/${produtc._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
        //<h1>Cotangem de produtos: {this.state.products.length}</h1>
    }
}
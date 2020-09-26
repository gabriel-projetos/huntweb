import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (

    //Navegção
    //Defini que vamos utilizar rotas atravez de um browser
    <BrowserRouter>
        <Switch>
            {/* Defini que apenas uma unica rota seja chamada ao mesmo tempo */}
            {/* para receber parametros usamdo o :id */}
            <Route exact path="/" component={Main}/>    
            <Route path="/products/:id" component={Product}/>            
        </Switch>
    </BrowserRouter>
)

export default Routes;
import React from 'react';

import "./styles.css";

import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes';


const App = () => (
  <div className="App">
     <Header/>
     <Routes/>
    </div>
);

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;

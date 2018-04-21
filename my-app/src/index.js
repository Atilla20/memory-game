import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

// Components

import Nav from './components/nav';
import Header from './components/header';
import Footer from './components/footer';
import Picture from './components/picture';

const Page = () => {
    return (
     <div>
        <Nav/>
        <Header/>
        <Picture/>
        <Picture/>
        <Picture/>
        <Picture/>
        <Footer/>
        
     </div>
    )
}

ReactDOM.render(<Page/>, document.querySelector('#root'));
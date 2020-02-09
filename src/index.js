import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import ContactList from './ContactList';
import ProductList from './ProductList';

class App extends Component {
    state = {
        contacts: [],
        products: []
    }

    async componentDidMount() {
        let resp = await fetch('http://localhost:4000/contacts');
        let contacts = await resp.json();
        this.setState({contacts});

        resp = await fetch('http://localhost:4000/products');
        let products = await resp.json();
        this.setState({products});
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Higher Order Component - Demo</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        <ContactList contacts={this.state.contacts} />
                    </div>
                    <div className="col">
                        <ProductList products={this.state.products} />
                    </div>
                </div>
                
            </div>
        );
    }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
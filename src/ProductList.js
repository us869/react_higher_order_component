import React from 'react';
import loading from './loading';

const Product = ({ product }) => (
    <div className="card" style={{ padding: '10px', margin: '10px' }}>
        <div className="row">
            <div className="col-md-4">
                <img src={product.picture} alt={product.name}
                    style={{ width: '100px', height: '100px' }}
                    className="card-img" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">{product.quantityPerUnit}</div>
                    <div className="card-text">{product.unitPrice}</div>
                </div>
            </div>
        </div>
    </div>
)

const ProductList = ({ products }) => {

    let list = products.map(p => <Product product={p} key={p.id} />);

    return (<div>
        {list}
    </div>
    );
}

export default loading('products')(ProductList);
import React, { useEffect } from 'react';
import data from '../data';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
    // let nuevoArray = []
    // for(var i=0; i<data.products.length; i++){        
    //     var idDefinido = parseInt(props.match.params.id)
    //     if(data.products[i]._id === idDefinido){
    //         nuevoArray.push(data.products[i])
    //     }
    // }
    // const product = nuevoArray[0]

    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return() => {
            //
        };
    }, [])

    return <div>
            <div>
                <Link to="/">Volver</Link>
            </div>
            {loading ?  <div>Loading...</div> :
            error ? <div>{error}</div>:
            
            (<div>
                <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <div>
                <ul>
                    <h1>{product.name}</h1>
                    <li><h2>{product.brand}</h2></li>
                    <li><p>{`$ ${product.price}`}</p></li>
                    <li><div className="precio">{product.rating}Stars({product.numReiews})</div></li>
                    <li><p>{product.description}</p></li>
                </ul>
            </div> 
            <aside className="details-action">
                <ul>
                    <li>
                        Precio: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Cantidad: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <button>Agregar al carro</button>
                </ul>
            </aside> 
            </div>)}

            
        </div>
    
}

export default ProductScreen;
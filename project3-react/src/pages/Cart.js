import React from 'react';
import { CartFill } from 'react-bootstrap-icons';
import '../styles/Cart.css'

export default function Cart(props) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col-sm-3">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartItems.map(item => (
                        <tr>
                            <td key={item.id}>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price / 100}</td>
                            <td>${(item.price / 100) * item.quantity}</td>
                            <button onClick={() => props.removeFromCart(item)} className="btn btn-outline-danger btn-sm"> Remove</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            {props.cartItems.length === 0 && (
                <h3>You have not added any item to the Cart</h3>
            )}
            {props.cartItems.length !== 0 && (
                <div>
                    <div className="total-price">
                        <table >
                            <tr>
                                <td>Sub-Total</td>
                                <td>${(props.subTotal).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>GST (7%)</td>
                                <td>${(props.gst).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${(props.cartTotal).toFixed(2)}</td>
                            </tr>
                        </table>
                    </div>

                    <div className="paynow">
                        <button onClick={() => props.payNow()}
                            className="btn btn-success">Pay Now</button>
                    </div>
                </div>
            )}

        </div>
    )
}

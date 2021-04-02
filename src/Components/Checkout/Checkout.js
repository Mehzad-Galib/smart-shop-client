import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Checkout = () => {

    let { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState({});
    const [message, setMessage] = useState(null);
    useEffect(()=>{

        fetch(`https://lit-wave-54793.herokuapp.com/checkout/${id}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            // console.log(product)
        })
    }, [id])
    const {productName, price} = product;
    console.log(product);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [date, setDate] = useState({
        orderDate: new Date().toDateString("dd/mm/yyyy")
    })
    

    const handleOrder = ()=>{
        const allInfo = {...loggedInUser, ...date, ...product}
        console.log(allInfo);

        fetch("https://lit-wave-54793.herokuapp.com/orderInfo", {
      method: "POST",
      headers: { 
          "Content-Type": "application/json"
          
    },
      body: JSON.stringify(allInfo)
    }).then((res) => res.json());
    setMessage("Order Placed Successfully")

    };
    
    return (
        <>
        <div className="container mt-5">
            
        <h2>Checkout</h2>
        <h3>Buyer: {loggedInUser.name}</h3>
            
            <Table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>{productName}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                <tr>
                        <td>Total</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </Table>

            <Button onClick={()=> handleOrder()} variant="outline-info">
          Place Order 
        </Button>

        <h4 className="mt-3">{message}</h4>

        </div>
        </>
    );
};

export default Checkout;
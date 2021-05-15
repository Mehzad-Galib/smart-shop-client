import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";



const OrderInfo = () => {
    const [info, setInfo] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`https://lit-wave-54793.herokuapp.com/purchase?email=${loggedInUser.email}`)
        .then(res=>res.json())
        .then(data =>{
            setInfo(data)
        })
    }, [loggedInUser.email])
    

    return (
        <>
            <h1>Order Info</h1>
            <div className="col-md-9 container mt-5 mr-5 ml-5">
                <Table>
                    <thead>
                    <tr>
                        <td>Customer's Name</td>
                        <td>Order Date</td>
                        <td>Product</td>
                        <td>Weight</td>
                        <td>Price</td>
                        <td>Email</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        info.map(inf => {
                            return(
                                <tr key={inf._id}>
                                    <td>{inf.name}</td>
                                <td>{inf.orderDate}</td>
                                <td>{inf.productName}</td>
                                <td>{inf.weight}</td>
                                <td>{inf.price}Tk</td>
                                <td>{inf.email}</td>
                                
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default OrderInfo;
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageProduct = () => {
    const [foods, setFoods] = useState([]);

    const handleDelete = (id) => {
       
        fetch(`https://banana-shortcake-73772.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            
          });
      };

  useEffect(() => {
    fetch("https://banana-shortcake-73772.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      }, [foods]);
    });

  return (
    <div className="d-flex mt-5">
      <div className="col-md-3">

        <Button as={Link} to={`/admin/manageProduct`} variant="outline-info">
          Manage Products
        </Button>
        <br />

        <Button as={Link} to={`/admin/addProduct`} variant="outline-info">
          Add Products
        </Button>
        <br />

        <Button variant="outline-info">Edit Products</Button>
      </div>

      <div className="col-md-9">
            <Table bordered hover>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Weight</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(food => { 
                            return(
                                <tr key={food._id}>
                                <td>{food.productName}</td>
                                <td>{food.weight}</td>
                                <td>{food.price}</td>
                                <td><Button onClick={()=> handleDelete(food._id)} variant="outline-info">Delete</Button></td>
                            </tr>
                            )
                        })
                    }
                
                </tbody>
            </Table>
      </div>
    </div>
  );
}

export default ManageProduct;
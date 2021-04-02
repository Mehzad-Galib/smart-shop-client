import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Admin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [image, setImage] = useState(null);
  const onSubmit = (data) => {
    
    const newData = {...data, imgUrl: image}
    
    fetch("https://banana-shortcake-73772.herokuapp.com/addFood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then((res) => res.json());
  };

  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '56fe43fe48b43891b85625d12ba9d450');
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      const url = response.data.data.display_url;
      console.log(response.data.data.display_url);
      setImage(url)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="d-flex mt-5">
      <div className="col-md-3">
        
        <Button as={Link} to={`/admin/manageProduct`} variant="outline-info">Manage Products</Button><br />

        <Button as={Link} to={`/admin/addProduct`} variant="outline-info">Add Products</Button><br />

        <Button variant="outline-info">Edit Products</Button>       
        
      </div>

      <div className="col-md-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Product name</label>
          <input name="productName" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <label>Weight</label>
          <input name="weight" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <label>Price</label>
          <input name="price" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <label>Image</label>
          <input name="imgUrl" type="file" onChange={(event)=> handleImageUpload(event)} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />


          <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleSubmit(onSubmit)}>
              {" "}
               Add Product
            </Button>
          </Col>
        </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default Admin;
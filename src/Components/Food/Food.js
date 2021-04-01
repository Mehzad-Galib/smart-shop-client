import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Food = (props) => {
    const {productName, imgUrl, price, _id} = props.food;
    // console.log(_id);
    return (
        <>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100 border-0 shadow-lg rounded-3">
              <img src={imgUrl} alt="..." />
              <div className="card-body">
                <h5>{productName}</h5>
              </div>
              <div className="card-footer border-0 bg-white d-flex justify-content-between">
                <h4>
                  <b>{price}Tk</b>
                  
                </h4>
                
                <Button as={Link} to={`/checkout/${_id}`} className="btn d-flex justify-content-center align-items-center" variant="outline-info">
                <FontAwesomeIcon icon={faArrowRight} /> Buy Now 
                </Button>
                
                
              </div>
            </div>
          </div>
        
      

        </>
    );
};

export default Food;
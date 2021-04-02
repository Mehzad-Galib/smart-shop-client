import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css'

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      }, []);
  });
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {
            foods.length === 0 && <CircularProgress color="secondary" />
          }
          {foods.map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

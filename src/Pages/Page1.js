import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

const Page1 = () => {
  const [means, setMeans] = useState();
  const [dist, setDist] = useState();
  return (
    <>
      <div className="container">
        <div className="cont1">
          <h3>
            What is your most frequently used means of travel from your home to
            work location?
          </h3>
          <div>
            <label>
              <input
                type="radio"
                name="means"
                value="Bus"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Bus</span>
            </label>
            <label>
              <input
                type="radio"
                name="means"
                value="Metro"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Metro</span>
            </label>
            <label>
              <input
                type="radio"
                name="means"
                value="Own Two-wheeler"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Own Two-wheeler</span>
            </label>
            <label>
              <input
                type="radio"
                name="means"
                value="Own Car"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Own Car</span>
            </label>

            <label>
              <input
                type="radio"
                name="means"
                value="Walk / Bicycle"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Walk / Bicycle</span>
            </label>

            <label>
              <input
                type="radio"
                name="means"
                value="Auto"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>Auto</span>
            </label>
            <label>
              <input
                type="radio"
                name="means"
                value="App based ride hailing cab services including Ola / Uber"
                onChange={(e) => setMeans(e.target.value)}
              />
              <span>
                App based ride hailing cab services including Ola / Uber
              </span>
            </label>
          </div>
        </div>
        <div className="cont2">
          <h3>What is the total distance between your home and workplace?</h3>
          <label>
            <input
              type="radio"
              name="dist"
              value="< 5 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span>{"<"} 5 km</span>
          </label>

          <label>
            <input
              type="radio"
              name="dist"
              value="5 - 10 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span> 5 - 10 km</span>
          </label>
          <label>
            <input
              type="radio"
              name="dist"
              value="10- 15 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span>10- 15 km</span>
          </label>
          <label>
            <input
              type="radio"
              name="dist"
              value="15- 20 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span> 15- 20 km</span>
          </label>
          <label>
            <input
              type="radio"
              name="dist"
              value="20- 25 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span> 20- 25 km</span>
          </label>
          <label>
            <input
              type="radio"
              name="dist"
              value="> 25 km"
              onChange={(e) => setDist(e.target.value)}
            />
            <span>{">"} 25 km</span>
          </label>
        </div>
      </div>
      <div className="btn">
        <button
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "#00005c",
            borderRadius:8

          }}
        >
          <Link to="/Page2" state={{ means: means, dist: dist }} style={{color:"white",fontWeight:"bold"}}>
            Submit
          </Link>
        </button>
      </div>
    </>
  );
};

export default Page1;

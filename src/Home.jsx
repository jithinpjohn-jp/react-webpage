import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "500px",
          background: "rgba(159, 206, 217, 1)",
        }}
        className="mt-5"
      >
        <h4 className="p-5" style={{ fontSize: "30px" }}>
          A JavaScript library for building user interfaces{" "}
        </h4>

        <p style={{ width: "800px", fontSize: "25px" }} className="m-4 ">
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>

        <img
          style={{
            position: "relative",
            left: "1000px",
            top: "-210px",
            width: "400px",
          }}
          src="./react2.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;

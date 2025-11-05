import React from "react";
import Card from "react-bootstrap/Card";

const Features = () => {
  return (
    <>
      <div
        style={{ background: "rgba(131, 169, 215, 1)" }}
        className="text-center p-3"
      >
        <h1>Powerful Features</h1>
        <p>
          Discover what makes React the most popular JavaScript library for
          building user interfaces.
        </p>
      </div>

      <div className="row pt-5" style={{ marginLeft: "90px" }}>
        <div className="col">
          <Card style={{ width: "18rem" }} className="col">
            <i class="fa-solid fa-diamond"></i>
            <i class="fa-solid fa-diamond"></i>
            <Card.Body>
              <Card.Title>Components</Card.Title>
              <Card.Text>
                Build encapsulated components that manage their own state.
                Components can be composed to create complex UIs from small,
                isolated pieces of code.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }} className="col ms-5">
            <i class="fa-solid fa-rotate"></i>
            <Card.Body>
              <Card.Title>Virtual DOM</Card.Title>
              <Card.Text>
                React creates an in-memory data structure cache, computes the
                resulting differences, and efficiently updates the browser's
                displayed DOM.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }} className="col ms-5">
            <i class="fa-solid fa-layer-group"></i>
            <Card.Body>
              <Card.Title>JSX </Card.Title>
              <Card.Text>
                JSX is a syntax extension to JavaScript. It produces React
                elements and makes your code more readable and easier to write.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
      <div className="row pt-5" style={{ marginLeft: "90px" }}>
        <div className="col">
          <Card style={{ width: "18rem" }} className="col">
            <i class="fa-solid fa-file"></i>
            <Card.Body>
              <Card.Title>One-Way Data Flow</Card.Title>
              <Card.Text>
                React implements one-way data flow which makes it easier to
                understand and debug. Data flows down from parent to child
                components.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }} className="col ms-5">
            <i class="fa-solid fa-tablet-screen-button"></i>
            <Card.Body>
              <Card.Title>React Native</Card.Title>
              <Card.Text>
                Use React to build native mobile applications for iOS and
                Android. Share code between web and mobile platforms.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }} className="col ms-5">
            <i class="fa-solid fa-rocket"></i>
            <Card.Body>
              <Card.Title>Performance</Card.Title>
              <Card.Text>
                React is fast by default. It efficiently updates and renders
                components when data changes, minimizing expensive DOM
                operations.
              </Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Features;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div
      class="container mt-5"
      style={{ background: "rgba(159, 206, 217, 1)" }}
    >
      <h1>The Story Of React</h1>

      <div style={{ width: "1000px", fontSize: "20px" }}>
        <p>
          React was created by Jordan Walke, a software engineer at Facebook
          (now Meta). It was first deployed on Facebook's News Feed in 2011 and
          later on Instagram in 2012.
        </p>
        <p>
          React was open-sourced at JSConf US in May 2013, revolutionizing how
          developers build user interfaces. What started as an internal tool at
          Facebook has grown into one of the most influential libraries in web
          development.
        </p>
        <p>
          Today, React powers some of the world's most popular websites and
          applications, from social networks to streaming services, e-commerce
          platforms to productivity tools.
        </p>

        <img
          style={{ width: "500px", position: "relative", right: "-400px" }}
          src="./react3.webp"
          alt=""
        />
      </div>

      <div
        style={{ position: "relative", top: "50px", width: "1000px" }}
        className="container"
      >
        <h1 className="text-center">Principles Of React</h1>

        <div>
          <Card>
            <Card.Body>
              <Card.Title>Declarative</Card.Title>
              <Card.Text>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title>Component-Based</Card.Title>
              <Card.Text>
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs. Since component logic is
                written in JavaScript instead of templates, you can easily pass
                rich data through your app.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title>Learn Once, Write Anywhere</Card.Title>
              <Card.Text>
                We don't make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code. React can also render on the server
                using Node and power mobile apps using React Native.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
        </div>
        <p className="text-center">
          React is built on a foundation of core principles that guide its
          development and design.
        </p>

        <br />
        <br />
      </div>
    </div>
  );
};

export default About;

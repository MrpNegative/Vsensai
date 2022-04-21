import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <article>
        <h1 className="fw-bold">
          Difference between authorization and authentication
        </h1>
        <hr />
        <p>
          Authentication is used to identify and verify the users really the
          ones they represent to be. Once the user has been confirmed,
          authorization is used to grant the users permission to access the
          information they have access to.
        </p>
        <br />
        Example: Suppose you went to a cinema hall. To enter the cinema hall you
        need to verify yourself by showing the guard the ticket you bought. Once
        you verify yourself someone will take you to your seat according to the
        seat number written on your ticket.
      </article>
      <br />
      <br />
      <article>
        <h1 className="fw-bold">
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <hr />
        <p>
          Firebase is one of the most used development platform that provides a
          lot of services including authentication, hosting, user analytics, and
          many more. The region I use firebase is my teacher taught me firebase.
          <br />
          <br />
          <h4>Some firebase alternatives</h4>
          Oracle Database.
          <br />
          DataStax Enterprise.
          <br />
          Redis Enterprise Cloud.
          <br />
          Cloudera Enterprise Data Hub.
          <br />
          Db2.
          <br />
          MarkLogic.
          <br />
          Couchbase Server.
          <br />
          Neo4j.
        </p>
      </article>
      <br />
      <br />
      <article>
        <h1 className="fw-bold">
          {" "}
          What other services does firebase provide other than authentication
        </h1>
        <hr />
          <h4>Some firebase services</h4>
        <p>
          Cloud Firestore
          <br />
          Machine Learning Kit
          <br />
          Cloud Functions
          <br />
          Real-Time Database
          <br />
          Hosting
          <br />
          Cloud Storage
          <br />
          Google Analytics
          <br />
          Predictions
          <br />
          Cloud Messaging
          <br />
          Dynamic Links
          <br />
          Remote Config
        </p>
      </article>
    </div>
  );
};

export default Blog;

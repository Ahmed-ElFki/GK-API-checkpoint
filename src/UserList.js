import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import userImg from "./user.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const axios = require("axios");
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data));
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12} style={{ marginBottom: "10px" }}>
          {users.map((current) => {
            <Card style={{ width: "18rem", fontFamily: "Fira Code" }}>
              <Card.Img variant="top" src={userImg} />
              <Card.Body>
                <Card.Title>{current.name}</Card.Title>
                <Card.Text>{current.email}</Card.Text>
                <Card.Text>{current.phone}</Card.Text>
              </Card.Body>
            </Card>;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default UserList;

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function HomeListGroup() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Home</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Reading List</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Listings</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Podcasts</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Videos</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Tags</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">FAQ</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Forem Shop</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Sponsors</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">About</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Contact</Button></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default HomeListGroup;
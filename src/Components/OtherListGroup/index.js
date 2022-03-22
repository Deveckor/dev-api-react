import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function OtherListGroup() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item style={{ width: "18rem" }}>Other</ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Code of Conduct</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Privacy Policy</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem" }} action variant="light">
        <Button variant="link">Terms of use</Button></ListGroup.Item>
      </ListGroup>
        <ListGroup horizontal>
        <ListGroup.Item>Twitter</ListGroup.Item>
        <ListGroup.Item>Facebook</ListGroup.Item>
        <ListGroup.Item>Github</ListGroup.Item>
        <ListGroup.Item>Instagram</ListGroup.Item>
        <ListGroup.Item>Twitch</ListGroup.Item>
        </ListGroup>      
    </div>
  );
}

export default OtherListGroup;
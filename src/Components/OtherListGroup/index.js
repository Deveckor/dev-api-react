import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function OtherListGroup() {
  return (
    <div>
      <ListGroup >
        <ListGroup.Item style={{ width: "18rem", border: "none" }}> <h5>Other</h5> </ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem", border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/codeofconduct-icon.svg" alt="icon"/> Code of Conduct</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem", border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/privacypolicy-icon.svg" alt="icon"/> Privacy Policy</Button></ListGroup.Item>
        <ListGroup.Item style={{ width: "18rem", border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/termsofuse-icon.svg" alt="icon"/> Terms of use</Button></ListGroup.Item>
      </ListGroup>
        <ListGroup horizontal >
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img src="/assets/twitter-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img src="/assets/facebook-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img src="/assets/github-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img src="/assets/instagram-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light"> <img src="/assets/twitch-icon.svg" alt="icon"/> </ListGroup.Item>
        </ListGroup>      
    </div>
  );
}

export default OtherListGroup;
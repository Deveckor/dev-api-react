import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

function OtherListGroup() {
  return (
    <>
      <Link to="OtherListGroup">
      <ListGroup >
        <ListGroup.Item style={{ border: "none" }}> <h5>Other</h5> </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/codeofconduct-icon.svg" alt="icon"/> Code of Conduct</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/privacypolicy-icon.svg" alt="icon"/> Privacy Policy</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/termsofuse-icon.svg" alt="icon"/> Terms of use</Button></ListGroup.Item>
      </ListGroup>

        <ListGroup  className="d-flex flex-md-column justify-content-md-between flex-xl-row" >
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img style={{width:"19px"}} src="/assets/twitter-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img style={{width:"19px"}} src="/assets/facebook-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img style={{width:"19px"}} src="/assets/github-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img style={{width:"19px"}} src="/assets/instagram-icon.svg" alt="icon"/> </ListGroup.Item>
        <ListGroup.Item style={{border: "none"}} action variant="light"> <img style={{width:"19px"}} src="/assets/twitch-icon.svg" alt="icon"/> </ListGroup.Item>
        </ListGroup>
      </Link> 
    </>
  );
}

export default OtherListGroup;
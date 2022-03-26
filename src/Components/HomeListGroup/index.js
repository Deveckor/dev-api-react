import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

function HomeListGroup() {
  return (
    <div>
      <Link to="HomeListGroup">
      <ListGroup>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/home-icon.svg" alt="icon"/> Home</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/listings-icon.svg" alt="icon"/> Listings</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/podcasts-icon.svg" alt="icon"/> Podcasts</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/videos-icon.svg" alt="icon"/> Videos</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/tags-icon.svg" alt="icon"/> Tags</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/faq-icon.svg" alt="icon"/> FAQ</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/forem-icon.svg" alt="icon"/> Forem Shop</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/sponsors-icon.svg" alt="icon"/> Sponsors</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/about-icon.svg" alt="icon"/> About</Button></ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }} action variant="light">
        <Button variant="link"> <img src="/assets/contact-icon.svg" alt="icon"/> Contact</Button></ListGroup.Item>
      </ListGroup>
      </Link>
    </div>
  );
}

export default HomeListGroup;
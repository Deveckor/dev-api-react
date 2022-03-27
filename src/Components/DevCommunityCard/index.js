import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

function DevCommunityCard() {
  return (
    <div>
      <Link to="DevCommunityCard">
      <Card style={{ width: "auto" }} className="m-0 mt-4">
        <Card.Body>
        <Card.Title style={{textDecoration: "none"}}><Button variant="link" style={{textDecoration: "none"}} > <h5>DEV Community</h5> </Button> is a community of 816,666 amazing developers</Card.Title>
          <Card.Text>
          We're a place where coders share, stay up-to-date and grow their careers.
          </Card.Text>
          <div className="d-grid gap-2">
          <Button size="lg" variant="outline-primary">Create account</Button>
          <Button size="lg" variant="light">Log in</Button>
          </div>
        </Card.Body>
      </Card>
      </Link>
      
    </div>
  );
}
    
export default DevCommunityCard;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DevCommunityCard() {
  return (
    <div>
      <Card className="m-0 ">
        <Card.Body>
        <Card.Title><Button variant="link" style={{textDecoration: "none"}} > <h5>DEV Community</h5> </Button> is a community of 816,666 amazing developers</Card.Title>
          <Card.Text>
          We're a place where coders share, stay up-to-date and grow their careers.
          </Card.Text>
          <div className="d-grid gap-2">
          <Button size="lg" variant="outline-primary">Create account</Button>
          <Button size="lg" variant="light">Log in</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
    
export default DevCommunityCard;
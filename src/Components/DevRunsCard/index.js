import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DevRunsCard() {
  return (
    <div>
      <Card className="m-0 mt-4">
        <Card.Body>
          <Card.Text>
            DEV runs on 100% open source code known as Forem. Contribute to the
            codebase or host your own!
          </Card.Text>
          <Card.Title>Check these out! 👇</Card.Title>
          <div>
            <Button variant="link" style={{textDecoration: "none"}}>Main Forem Repo</Button>
            <Button variant="link" style={{textDecoration: "none"}}>Self-Host Instructions</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DevRunsCard;

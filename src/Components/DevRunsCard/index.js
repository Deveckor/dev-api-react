import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DevRunsCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            DEV runs on 100% open source code known as Forem. Contribute to the
            codebase or host your own!
          </Card.Text>
          <Card.Title>Check these out! 👇</Card.Title>
          <div>
            <Button variant="link">Main Forem Repo</Button>
            <Button variant="link">Self-Host Instructions</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DevRunsCard;

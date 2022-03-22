import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CodeNewbieCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--fIs7T4ga--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://jess.forem.lol/remoteimages/uploads/articles/9ga7i09w99yubqm4fxrv.png"
          alt="CodeNewbie Communitty"
        />
        <Card.Body>
          <Card.Title>
            Calling all early-career developers & coding mentors!
          </Card.Title>
          <Card.Text>
            Join CodeNewbie Community: a supportive space for coding newbies to
            connect & express themselves.
          </Card.Text>
          <Button variant="link">Get in on the fun!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CodeNewbieCard;
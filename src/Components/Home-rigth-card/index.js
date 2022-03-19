import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EventCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--kDJc7-zC--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/27dovb400kn3e2bs0zh9.png"
        />
        <Card.Body>
          <Card.Title>
            <b>Deepgram x DEV Hackaton (15)</b>
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              [Deepgram x DEV Hackathon Submission Post Placeholder Title]{" "}
            </Button>

            <Button variant="link">
              [Deepgram x DEV Hackathon Submission Post Placeholder Title]
            </Button>

            <Button variant="link">Rise Up With Innovative Ideas</Button>
            <Button variant="link">Let's get Hacking</Button>
            <Button variant="link">
              AudioSign: Converting audio to animated sign language (P2)
            </Button>
          </Card.Text>
          <div className="d-grid gap-2">
          <Button size="lg" variant="primary">Submit Your Project!</Button>
          <Button size="lg" variant="secondary">See all posts</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;

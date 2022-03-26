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
            <Button size="lg" variant="primary">
              Submit Your Project!
            </Button>
            <Button size="lg" variant="secondary">
              See all posts
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* 2nd Card*/}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>Listings</strong></p> <a href="https://dev.to/listings" class="crayons-link--branded fw-medium fs-s">See all</a>
            
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              <p class="text-sm-start">
                High paying remote software developer jobs! Senior + Experienced
                Devs Wanted! Top Jobs! Revolutionary Platform
              </p>
            </Button>
            <p class="crayons-link_secondary">misc</p>

            <Button variant="link">
              <p class="text-sm-start">
                Senior React Native Developer - Remote
              </p>
            </Button>
            <p class="text-sm-start">jobs</p>

            <Button variant="link">
              <p class="text-sm-start">Senior Go Developer - Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>

            <Button variant="link">
              <p class="text-sm-start">Senior Blochkchain Developer - Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>
            <Button variant="link">
              <p class="text-sm-start">Senior React Developer -Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="link">
              <p class="text-sm-center">Create Listing</p>

            </Button>
          </div>
        </Card.Body>
      </Card>
       {/* 3rd Card*/}
       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#help</strong></p> <a href="https://dev.to/listings" class="crayons-link--branded fw-medium fs-s">See all</a>
            
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              <p class="text-sm-start">
              How I can apply a network_security_config.xml on specific variants and not in release one?

              </p>
            </Button>
            <p class="crayons-link_secondary">misc</p>

            <Button variant="link">
              <p class="text-sm-start">
                Senior React Native Developer - Remote
              </p>
            </Button>
            <p class="text-sm-start">jobs</p>

            <Button variant="link">
              <p class="text-sm-start">Senior Go Developer - Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>

            <Button variant="link">
              <p class="text-sm-start">Senior Blochkchain Developer - Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>
            <Button variant="link">
              <p class="text-sm-start">Senior React Developer -Remote</p>
            </Button>
            <p class="text-sm-start">jobs</p>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="link">
              <p class="text-sm-center">Create Listing</p>

            </Button>
          </div>
        </Card.Body>
      </Card>



    </div>
  );
}

export default EventCard;


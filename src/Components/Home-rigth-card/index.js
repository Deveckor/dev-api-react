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
              <strong>Listings</strong>
            </p>{" "}
            <a
              href="https://dev.to/listings"
              class="crayons-link--branded fw-medium fs-s"
            >
              See all
            </a>
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
              <strong>#help</strong>
            </p>{" "}
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              <p class="text-sm-start">
                How I can apply a network_security_config.xml on specific
                variants and not in release one?
              </p>
              <p class="-.c-indicator--warning">New</p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">Help Me With This Code</p>
            </Button>
            <p class="text-sm-start"></p>

            <Button variant="link">
              <p class="text-sm-start">
                Install Java on windows 10 in 3 simple steps
              </p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">
                LogicalKeyboardKey.meta in shortcut is triggered without
                pressing the other keys in the LogicalKeySet
              </p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">
                How I can have multiple debug variants with different arguments?
              </p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>

      {/* 4ta Card */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#discuss</strong>
            </p>{" "}
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              <p class="text-sm-start">
                Do you have family and friends interested in a job in software?
              </p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">
                What coding concept or practice seem commonly understood, but
                you never learned?
              </p>
            </Button>
            <p class="text-sm-start"></p>

            <Button variant="link">
              <p class="text-sm-start">Learn Accessibility</p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">Discuss: package sabotage</p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">
                Yes, My Kids Will Be The One Who Ruins The Group Texts
              </p>
              <p class="-.c-indicator--warning">New</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>

      {/* 5ta Card */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#explainlikeimfive</strong>
            </p>{" "}
          </Card.Title>
          <Card.Text>
            <Button variant="link">
              <p class="text-sm-start">
                What is meant by a "shape" in programming
              </p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">Like im 5:What is JQUERY???????</p>
            </Button>
            <p class="text-sm-start"></p>

            <Button variant="link">
              <p class="text-sm-start">Learn Accessibility</p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">
                Explain private and Public keys (SSH) Like I´m Five
              </p>
            </Button>

            <Button variant="link">
              <blockquote class="blockquote">
                <p>Explain a "memory leak" like I'm five</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                2<cite title="Source Title">Comments</cite>
              </figcaption>
            </Button>

            <Button variant="link">
              <p class="text-sm-start">Is goto all that bad?</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;

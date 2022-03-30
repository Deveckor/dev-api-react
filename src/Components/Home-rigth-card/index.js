import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EventCard() {
  return (
    <div>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--x3d32Nqp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w99v8kewpfkdzc7ae272.gif"
        />
        <Card.Body>
          <Card.Title>
            <b>Do You Have What it Takes to Break the Code? (15)</b>
            
          </Card.Title>
          <Card.Text>
            <p href="https://s1.breakthecode.tech/">→ Play Break the Code 2</p>
            
            <p href="https://dev.to/devteam/do-you-have-what-it-takes-to-break-the-code-2246">→ Learn more</p>
          
            <p href="https://dev.to/devteam/break-the-code-2-x-dev-chat-5739">→ Discuss</p>
          
          </Card.Text>
         
        </Card.Body>
      </Card>

     
      {/* 1frst Card*/}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--lh_J2TaC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://forem.dev/remoteimages/uploads/articles/f7nihr3z8nacgyb8ptrn.png"
        />
        <Card.Body>
          <Card.Title>
            <b>Forem Android</b>
          </Card.Title>
          
          
        </Card.Body>
      </Card>



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
            <Button variant="border-bottom">
              <p class="text-sm-start">
                [Deepgram x DEV Hackathon Submission Post Placeholder Title]
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Speech-to-text Technology: Tales of just another knackered
                Software Developer (Innovative Ideas Challenge)
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Rise Up With Innovative Ideas</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">Let's get Hacking</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                AudioSign: Converting audio to animated sign language (P2)
              </p>
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
            </p>
            <a
              href="https://dev.to/listings"
              class="crayons-link--branded fw-medium fs-s"
            >
              See all
            </a>
          </Card.Title>
          <Card.Text>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                High paying remote software developer jobs! Senior + Experienced
                Devs Wanted! Top Jobs! Revolutionary Platform
              </p>
              <p class="text-sm-start mb-2 text-muted">misc</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Senior React Native Developer - Remote
              </p>
              <p class="text-sm-start mb-2 text-muted">jobs</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Senior Go Developer - Remote</p>
              <p class="text-sm-start mb-2 text-muted">jobs</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Senior Blochkchain Developer - Remote</p>
              <p class="text-sm-start mb-2 text-muted">jobs</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Senior React Developer -Remote</p>
              <p class="text-sm-start mb-2 text-muted">jobs</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="link">
              <hr></hr>
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
            <Button variant="border-bottom">
              <p class="text-sm-start">
                How I can apply a network_security_config.xml on specific
                variants and not in release one?
              </p>
              <p class="-.c-indicator --warning">New</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Help Me With This Code</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Install Java on windows 10 in 3 simple steps
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                LogicalKeyboardKey.meta in shortcut is triggered without
                pressing the other keys in the LogicalKeySet
              </p>
            </Button>
            <Button variant="border-bottom">
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
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Do you have family and friends interested in a job in software?
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                What coding concept or practice seem commonly understood, but
                you never learned?
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Learn Accessibility</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">Discuss: package sabotage</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Yes, My Kids Will Be The One Who Ruins The Group Texts
              </p>
            </Button>

            <Button variant="link">
              <p class="text-sm-start"></p>
              <p class="-.c-indicator --warning">New</p>
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
            <Button variant="border-bottom">
              <p class="text-sm-start">
                How to get data in json format from tweepy.Client()?
              </p>
              <p class="text-sm-start mb-2 text-muted">1 comments</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>

      {/* 6ta Card */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#challenge</strong>
            </p>
          </Card.Title>
          <Card.Text>
            <Button variant="border-bottom">
              <p class="text-sm-start">Break the Code 2 x DEV Chat</p>
              <p class="text-sm-start mb-2 text-muted">85 comments</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>

      {/* 7ma Card */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#meta</strong>
            </p>{" "}
          </Card.Title>
          <Card.Text>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Interested in learning more about Commercial Open Source?
                There´s a Forem for that.
              </p>
              <p class="text-sm-start mb-2 text-muted">6 comments</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">Forem for Android is Here!🤖</p>
            </Button>
            <Button variant="link"></Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">
                You can now display your most awesome GitHub repos on your DEV
                profile
              </p>
              <p class="text-sm-start mb-2 text-muted">25 comments</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">
                Introducing the Forem Shop! New Merch, Giveaways, and More.
              </p>
              <p class="text-sm-start mb-2 text-muted">53 comments</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">What's with the 🦄 ?</p>
              <p class="text-sm-start mb-2 text-muted">35 comments</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>

      {/* 8va Card */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <p class="crayons-card_header">
              <strong>#whatercooler</strong>
            </p>{" "}
          </Card.Title>
          <Card.Text>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                {" "}
                What domain names are you holding on to?
              </p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">How do you start your work day?</p>
              <p class="text-sm-start mb-2 text-muted">25 comments</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">Why Every Programmers Must Blog</p>
              <p class="text-sm-start mb-2 text-muted">11 comments</p>
            </Button>

            <Button variant="border-bottom">
              <p class="text-sm-start">Pretending to be a tradesman 🕵️‍♂️</p>
            </Button>
            <Button variant="border-bottom">
              <p class="text-sm-start">
                Why do I need to create a blog posts buffer? (stop blogging
                weekly)
              </p>
              <p class="text-sm-start mb-2 text-muted">12 comments</p>
            </Button>
          </Card.Text>
          <div className="d-grid gap-2"></div>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default EventCard;

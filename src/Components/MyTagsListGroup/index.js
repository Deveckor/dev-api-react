import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./index.scss"
import {Link} from 'react-router-dom';
function MyTagsListGroup() {
  return (
    <div>
      <Link to="MyTagsListGroup">
      <ListGroup className="scroll" >
        <ListGroup.Item style={{border: "none" }}> <h5>Popular Tags </h5></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#javascript</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#beginners</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#reaction</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#productivity</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#css</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#career</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#open source</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#aws</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#typescript</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#security</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#linux</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#computerscience</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#dotnet</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#git</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#csharp</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#vscode</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#sql</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#bash</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#gamedev</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#graphql</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#ubuntu</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#npm</Button></ListGroup.Item>
        <ListGroup.Item style={{border: "none" }} action variant="light">
        <Button variant="link">#vim</Button></ListGroup.Item>
      </ListGroup>
      </Link>    
    </div>
  );
}

export default MyTagsListGroup;
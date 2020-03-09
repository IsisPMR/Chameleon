import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter, Switch } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Tutorial title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select">
              <option>Self Defense</option>
              <option>Pets</option>
              <option>Life Style</option>
              <option>Hacks</option>
              <option>Love and Relationships</option>
              <option>Healthy</option>
              <option>Music</option>
              <option>Excersice</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Attache your video</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Details;

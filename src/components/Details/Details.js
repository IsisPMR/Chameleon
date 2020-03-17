import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Details.css";
import Button from '@material-ui/core/Button';
/* import Query from "./Query"; */

class Details extends Component {
  render() {
    return (
      <div className="adminContainerForm">
        <h2>Upload a new tutorial</h2>
        <TextField
          required
          id="standard-required"
          label="Tutorial Name"
          defaultValue="Name"
        />
        <br />
        <br />
        <h7>Select a category</h7>
        <br />
        <Select className="fieldwith">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>Self Defense</MenuItem>
          <MenuItem value={1}>Pets</MenuItem>
          <MenuItem value={2}>Life Style</MenuItem>
          <MenuItem value={3}>Hacks</MenuItem>
          <MenuItem value={4}>Love and Relationships</MenuItem>
          <MenuItem value={5}>Healthy</MenuItem>
          <MenuItem value={6}>Music</MenuItem>
          <MenuItem value={7}>Excersice</MenuItem>
        </Select>
        <br />
        <br />
        <p>Copy your URL here:</p>
        <TextField
          required
          id="standard-required"
          label="URL"
        />
        <Button /* onClick={Query} */>Validate</Button>
        <br />
        <Button>Sumbit</Button>
      </div>
    );
  }
}

export default Details;
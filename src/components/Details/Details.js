import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Details.css";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      linkT: "",
      linkI: "",
      channel: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();
    const newEntry = this.state;
    //
    axios
      .post("http://localhost:9721/tutorials/create", { params: newEntry })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  logOutUser = e => {
    e.preventDefault();
      localStorage.clear();
      this.props.history.push('/Chameleon')
  }

  render() {
    
    const { name, category, linkT, linkI, channel } = this.state;
    return (
      <div>
        <div className="log-out">
        <Button variant="contained" color="secondary" component="span" onClick={ this.logOutUser }>Logout</Button>   
        </div>
        <div className="adminContainerForm">
          <h2>Upload a new tutorial</h2>
          <form onSubmit={this.submit}>
            <TextField
              required
              id="standard-required"
              label="Tutorial Name"
              value={name}
              onChange={this.onChange}
              name="name"
            />
            <br />
            <br />
            <h7>Select a category</h7>
            <br />
            <Select
              className="fieldwith"
              value={category}
              onChange={this.onChange}
              name="category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Self Defense</MenuItem>
              <MenuItem value={2}>Pets</MenuItem>
              <MenuItem value={3}>Life Style</MenuItem>
              <MenuItem value={4}>Hacks</MenuItem>
              <MenuItem value={5}>Love and Relationships</MenuItem>
              <MenuItem value={6}>Healthy</MenuItem>
              <MenuItem value={7}>Music</MenuItem>
              <MenuItem value={8}>Excersice</MenuItem>
            </Select>
            <br />
            <br />
            <TextField
              required
              id="standard-required"
              label="Tutorial Channel"
              value={channel}
              onChange={this.onChange}
              name="channel"
            />
            <br />
            <br />
            <p>Copy your URL here:</p>
            <TextField
              required
              id="standard-required"
              label="Tutorial Link"
              value={linkT}
              onChange={this.onChange}
              name="linkT"
            />
            <br />
            <br />
            <p>
              You can look for your thumbnail here:&nbsp;
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
            <TextField
              required
              id="standard-required"
              label="Image Link"
              value={linkI}
              onChange={this.onChange}
              name="linkI"
            />
            <br />
            <br />    {/*  IF <Alert severity="error">This is an error alert — check it out!</Alert> */}
            <Button variant="contained" color="primary" component="span" onClick={ <Alert severity="success">The video uploaded successfully!</Alert>}>
              Upload
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Details;

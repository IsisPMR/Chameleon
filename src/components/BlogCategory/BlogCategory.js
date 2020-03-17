import React, { Component } from 'react';
import data from "../../data.json";
import Grid from "@material-ui/core/Grid";
/* import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"; */
import ReactPlayer from "react-player";
import "./BlogCategory.css";

export default class BlogCategory extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       item: [],
       currentVideo: undefined
    }
  }
  

  componentDidMount() {
    const id = this.props.match.params.id;
    const child = data.categories[id].child;
    this.setState({ item: child })
  }

  changeImage = (id) => {
    this.setState({ currentVideo: id })
  }

  render() {

    const { item, currentVideo } = this.state;
    console.log(item)

    return (
      <div className="allVideosContainer">
        <div>
        <ReactPlayer
          url={currentVideo ? currentVideo : item.length > 0 && item[0].mp4}
          className="react-player"
          playing
        />
        </div>
        <Grid container>
          {
            item.map((l, index) => {
              return (
                <Grid  key={index} xs className="detailItems">
                  <img onClick={() => this.changeImage(l.mp4)} style={{ width: 210, height: 118 }} alt={l.title} src={l.src} />
                  <div>{l.title}</div>
                </Grid >
              )
            })
          }
      </Grid>
    </div>
    )
  }
}
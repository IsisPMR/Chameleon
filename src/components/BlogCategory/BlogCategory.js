import React, { Component } from 'react';
/* import data from "../../data.json"; */
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import redDelete from "../../img/icons/delete.png";
import "./BlogCategory.css";
import axios from "axios";

export default class BlogCategory extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       item: [],
       currentVideo: undefined,
       admin: false
    }
  }

  //const reDirection = useHistory();
 componentWillMount(){
    const user = localStorage.getItem('user');
    if (user){
      this.setState({admin: true})
    }
    //console.log(user);
  } 

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
    .get(`http://localhost:9721/tutorials/list/${id}`)
    .then(response => {
        console.log(response.data);
        this.setState({item:response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeImage = (id) => {
    this.setState({ currentVideo: id })
  }

  render() {

    const { item, currentVideo, admin } = this.state;
    console.log(item)

    return (
      <div className="allVideosContainer">
        {
          admin === true ? <h3>Pulsa la equis para eliminar un video</h3> : null 
        }
        <div className="onTop">
        <ReactPlayer
          url={currentVideo ? currentVideo : item.length > 0 && item[0].tut_mp4}
          className="react-player"
          playing
        />
        </div>
        <Grid container>
          {
            item.map((l, index) => {

              return (
                <Grid  key={index} xs className="detailItems">
                  {
                    admin === true ? <img src={ redDelete } alt={"supr"} className="redX"/> : null
                  }
                  <img onClick={() => this.changeImage(l.tut_mp4)} style={{ width: 210, height: 118 }} alt={l.tut_title} src={l.tut_image} />
                  <div className="textStyle">
                  <div className="mainTitle">{l.tut_title}</div>
                  <div>{l.tut_channel}</div>
                  <div>{l.created_at}</div>
                  </div>
                </Grid >
              )
            })
          }
      </Grid>
    </div>
    )
  }
}
import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import redDelete from "../../img/icons/delete.png";
import "./BlogCategory.css";
import Button from "@material-ui/core/Button";
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

 componentWillMount(){
    const user = localStorage.getItem('user');
    if (user){
      this.setState({admin: true})
    }
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

  logOutUser = e => {
    e.preventDefault();
      localStorage.clear();
      this.props.history.push('/Chameleon')
  }

  deleteTut = (id) => {
    const category_id = this.props.match.params.id;
    axios
      .put(`http://localhost:9721/Tutorials/deletevideo/${id}`, { category_id })
      .then((response) => {
        console.log(response);
        this.setState({item:response.data})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    const { item, currentVideo, admin } = this.state;
    console.log(item)

    return (
      <div className="allVideosContainer">
        {
          admin === true ? <div> <h3>Pulsa la equis para eliminar un video</h3> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary" component="span" onClick={ this.logOutUser }>Logout</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={ () => this.props.history.push('/adminadd') }>Upload tutorial</Button> </div> : null 
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
                    admin === true ? <img src={ redDelete } alt={"supr"} className="redX" onClick={ () => this.deleteTut(l.tut_id) } /> : null
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
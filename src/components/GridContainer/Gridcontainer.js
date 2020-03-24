import "./Gridcontainer.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
/* import data from "../../data.json" */
import axios from "axios";

class Gridcontainer extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: []
    }
  }


  componentDidMount() {
   /*  this.setState({ items: data.categories }) */
    axios
    .get(`http://localhost:9721/tutorials/main`)
    .then(response => {
        console.log(response.data);
        this.setState({items:response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {

    const { items } = this.state;

    return (
      <div className="imageContainer" >
        <Grid
          container={true}
          direction="column"
          justify="center"
          alignItems="center"
        >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            {
              items.map(item => {
                return (
                  <Grid item={true} xs={3}>
                    <div class="miniContainer">
                      {/* <Link to={"/category/" + item.id}> */}
                      <Link to={"/category/" + item.category_id}>
                        {/* <img src={require(`../../img/${item.src}`)} alt={item.title} class="position" /> require built a function to load a module*/}
                        <img src={`${item.category_image}`} alt={item.category_name} class="position" />
                      </Link>
                      <div className="imageText">
                      {/* <Link to={"/category/" + item.id}> */}
                      <Link to={"/category/" + item.category_id}>
                        {/* <p>{item.title}</p> */}
                        <p>{item.category_name}</p>
                      </Link>
                      </div>
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
       
      </div>
    );
  }
}

export default Gridcontainer;

import "./Gridcontainer.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import data from "../../data.json"

class Gridcontainer extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: []
    }
  }


  componentDidMount() {
    this.setState({ items: data.categories })
    /* axios
    .get(`http://localhost:9721/tutorials/main/${id}`)
    .then(response => {
        console.log(response.data);
        this.setState({item:response.data});
      })
      .catch(err => {
        console.log(err);
      }); */
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
                      <Link to={"/category/" + item.id}>
                        <img src={require(`../../img/${item.src}`)} alt={item.title} class="position" />
                      </Link>
                      <div className="imageText">
                      <Link to={"/category/" + item.id}>
                        <p>{item.title}</p>
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

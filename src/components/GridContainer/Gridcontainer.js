import "./Gridcontainer.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";

export default class Gridcontainer extends React.Component {
    state = {
      content: false,
      items: []
    }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
    .get(`http://localhost:9721/tutorials/main`)
    .then(response => {
        console.log(response.data);
        this.setState({items:response.data, content: true});
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {

    const { items, content } = this.state;

    return (!content) ? null : (
      <div className="imageContainer" >
            <Grid container  direction="row" justify="center" alignItems="center">
            {
              items.map((item, i) => (
                  <Grid key={`grid-${i}`} item={true} xs={12} md={6} lg={4}>
                    <Tooltip disableFocusListener title={item.category_name}> 
                      <Link to={"/category/" + item.category_id}>
                        <img className="category-image" src={`${item.category_image}`} alt={item.category_name} />
                      </Link>
                    </Tooltip>
                  </Grid>
                ))
            }
          </Grid>
       
      </div>
    );
  }
}
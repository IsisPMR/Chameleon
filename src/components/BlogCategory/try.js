import "./Gridcontainer.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class Try extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: [
         {
           id: "0",
           src: "https://i.ytimg.com/vi/pndPbpHLpos/mqdefault.jpg",
           title: "Women's Self-defense That Actually Works! (Gracie Jiu-Jitsu",
           channel: "GracieBreakdown",
           views: "2,8 M views",
           createdAt: "4 years ago",
           url: "https://www.youtube.com/watch?v=pndPbpHLpos&t=3s"
         },
         {
          id: "1",
          src: "https://i.ytimg.com/vi/-V4vEyhWDZ0/mqdefault.jpg",
          title: "5 Choke Hold Defenses Women MUST Know | Self Defense",
          channel: "GracieBreakdown",
          views: "1,2 M views",
          createdAt: "1 year ago",
          url: "https://www.youtube.com/watch?v=pndPbpHLpos&t=3s"
        }
       ]
    }
  }
  
  render() {

    const { items } = this.state;

    return (
      
      <div class="imageContainer">
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
                    <div>
                      <Link to={item.url}>
                        <img src={item.src} alt={item.title} class="position" />
                      </Link>
                      <div class="imageText">
                        <p>{item.title}</p>
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

export default Try;
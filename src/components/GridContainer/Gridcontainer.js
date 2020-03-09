import './Gridcontainer.css';
import React from "react";
import Grid from "@material-ui/core/Grid";
import SF from "../../img/SelfDefense.PNG";
import Pets from "../../img/Pets.PNG";
import LS from "../../img/LifeStyle.PNG";
import LR from "../../img/LoveAndRelationships.PNG";
import Hacks from "../../img/Hacks.PNG";
import Healthy from "../../img/Healthy.jpg";
import Music from "../../img/Music.PNG";
import Excersice from "../../img/Excersice.PNG";

class Gridcontainer extends React.Component {
  render() {
    return (<div class="imageContainer"> 
    
      <Grid
        container={true}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid onClick={ () => console.log("Ramiro")} item={true} xs={3}>
            <div class="miniContainer">
            <a href="/detail/8">
              <img src={SF} alt="Self Defense" class="position" />
            </a>
              <div class="imageText"><p>Self Defense</p></div>
            </div>
          </Grid>
          <Grid item={true} xs={1} md={3} lg={3}>
            <img src={Pets} alt="Pets" class="position" />
          </Grid>
          <Grid item={true} xs={1} md={3}>
            <img src={LS} alt="Life Style" class="position" />
          </Grid>
          <Grid item={true} xs={1} md={3}>
            <img src={Hacks}alt="Hacks"  class="position" />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={1} md={3}>
            <img src={LR} alt="Love and Relationships" class="position" />
          </Grid>
          <Grid item={true} xs={1} md={3}>
            <img src={Healthy} alt="Healthy" class="position" />
          </Grid>
          <Grid item={true} xs={1} md={3}>
            <img src={Music}  alt="Music" class="position" />
          </Grid>
          <Grid item={true} xs={1} md={3}>
            <img src={Excersice} alt="Excersice" class="position" />
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Gridcontainer;

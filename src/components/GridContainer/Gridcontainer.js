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
            <img src={SF} alt="Self Defense" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Pets} alt="Pets" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={LS} alt="Life Style" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Hacks}alt="Hacks"  height="195" width="320" />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={3}>
            <img src={LR} alt="Love and Relationships" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Healthy} alt="Healthy" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Music}  alt="Music" height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Excersice} alt="Excersice" height="195" width="320" />
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Gridcontainer;

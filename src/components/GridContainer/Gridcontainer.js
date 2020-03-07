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
    return (<div > 
      <Grid
        container={true}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid onClick={ () => console.log("Ramiro")} item={true} xs={3}>
            <img src={SF} alt='' height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Pets} height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={LS} height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Hacks} height="195" width="320" />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={3}>
            <img src={LR} height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Healthy} height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Music} height="195" width="320" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={Excersice} height="195" width="320" />
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Gridcontainer;

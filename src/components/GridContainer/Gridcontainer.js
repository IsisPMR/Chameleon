import React from "react";
import Grid from "@material-ui/core/Grid";
import SF from "../../img/SelfDefense.PNG";

class Gridcontainer extends React.Component {
  render() {
    return (
      <Grid
        container={true}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid onClick={ () => console.log("Ramiro")} item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
          <Grid item={true} xs={3}>
            <img src={SF} height="42" width="42" />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Gridcontainer;

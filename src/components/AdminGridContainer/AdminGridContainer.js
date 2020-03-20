/* import React from "react";
import "./AdminGridContainer.css";
import Grid from "@material-ui/core/Grid";
import SF from "../../img/SelfDefense.PNG";
import Pets from "../../img/Pets.PNG";
import LS from "../../img/LifeStyle.PNG";
import LR from "../../img/LoveAndRelationships.PNG";
import LH from "../../img/LifeHacks.PNG";
import Health from "../../img/Health.jpg";
import Travels from "../../img/Travels.PNG";
import Excersice from "../../img/Excersice.PNG";
import { Link } from "react-router-dom";

class AdminGridContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: "0",
          src: SF,
          title: "Self Defense"
        },
        {
          id: "1",
          src: Pets,
          title: "Pets"
        },
        {
          id: "2",
          src: LS,
          title: "Life style"
        },
        {
          id: "3",
          src: LR,
          title: "Love and Relationships"
        },
        {
          id: "4",
          src: LH,
          title: "Life Hacks"
        },
        {
          id: "5",
          src: Health,
          title: "Health"
        },
        {
          id: "6",
          src: Excersice,
          title: "Excersice"
        },
        {
          id: "7",
          src: Travels,
          title: "Travel"
        }
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div class="aimageContainer">
        <h1>Welcome! <br/> You can add more content here:</h1>
        <div class="categoryImages">
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
              {items.map(item => {
                return (
                  <Grid item={true} xs={3}>
                    <div class="aminiContainer">
                      <Link className="images" to={"/adminadd/" + item.id}>
                        <img
                          src={item.src}
                          alt={item.title}
                          class="aposition"
                        />
                      </Link>
                      <div class="aimageText">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AdminGridContainer; */

import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import data from "../../data.json";
import "./AdminGridStyle.css";
import Button from '@material-ui/core/Button';

class AdminGridContainer extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: []
    }
  }

  componentDidMount() {
    this.setState({ items: data.categories })
  }
  
 
  render() {

    const { items } = this.state;

    return (
      <div className="adminImageContainer">
        <div className="headers">
            <h1>Welcome admin!!!</h1>
            <p>You can add or delete more videos here.</p>
            <Link to={"/adminadd/0"}>
            <Button type="submit" color="primary">Add Tutorial</Button>
            </Link>
            
        </div>
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
                    <div class="adminMiniImage">
                      <Link to={"/category/" + item.id}>
                        <img src={require(`../../img/${item.src}`)} alt={item.title} class="position" className="adminImage"/>
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

export default AdminGridContainer;
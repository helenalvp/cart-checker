import { Fragment, Component } from "react";
import Grid from "@material-ui/core/Grid";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import cssLogo from "../assets/images/technologies/css.png";
import htmlLogo from "../assets/images/technologies/html.png";
import jsLogo from "../assets/images/technologies/js.png";
import sqlLogo from "../assets/images/technologies/microsoftsql.png";
import postgresqlLogo from "../assets/images/technologies/postgresql.png";
import pythonLogo from "../assets/images/technologies/python.png";
import reactLogo from "../assets/images/technologies/react.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid lg={1}></Grid>
          <Grid item xs={12} md={7} lg={5}>
            {/* left side */}
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
            >
              <Grid item xs={12}>
                <h1 className="fancy-font">App Name</h1>
                <h4 className="lead">
                  This is a description of the app and what it does
                </h4>
              </Grid>
              <div className="main">
                <Grid item xs={12}>
                  <List>
                    {/* List of skills used */}
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox edge="start" checked={true} disableRipple />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        className="list-menu"
                        primary="React Fundamentals"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox edge="start" checked={true} disableRipple />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        className="list-menu"
                        primary="React components and lifecycle"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox edge="start" checked={true} disableRipple />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        className="list-menu"
                        primary="Javascript Fundamentals"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox edge="start" checked={true} disableRipple />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        className="list-menu"
                        primary="Javascript loops and arrays"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox edge="start" checked={true} disableRipple />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        className="list-menu"
                        primary="If/Else/statements"
                      />
                    </ListItem>
                  </List>
                </Grid>
                {/* Icons */}
                <Grid>
                  <img src={cssLogo} alt="css" className="skills-logo" />
                  <img src={htmlLogo} alt="html" className="skills-logo" />
                  <img src={jsLogo} alt="js" className="skills-logo" />
                  <img
                    src={sqlLogo}
                    alt="microsoft sql"
                    className="skills-logo"
                  />
                  <img
                    src={postgresqlLogo}
                    alt="postgresql"
                    className="skills-logo"
                  />
                  <img src={pythonLogo} alt="python" className="skills-logo" />
                  <img src={reactLogo} alt="react" className="skills-logo" />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            {/* this is where the logo goes */}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Home;

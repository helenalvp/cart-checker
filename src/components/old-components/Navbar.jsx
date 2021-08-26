import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Home from "../Home";
import TheApp from "./TheApp";
import TheCode from "./TheCode";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  setValue = (index) => {
    this.setState({ value: index });
  };

  handleChange = (e, newValue) => {
    this.setValue(newValue);
  };

  a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  };

  classes = {
    root: {
      flexGrow: 1,
      width: "100%",
    },
  };

  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className="bg-dark text-white"
          >
            <span className="pr-3 align-self-center text-center m-2">
              <img src="favicon.ico" className="icon-menu" alt="icon" />
              CartChecker
            </span>
            <Tab label="Home" className="text-white" {...this.a11yProps(1)} />
            {/* <Tab label="Home" className="text-white" {...this.a11yProps(1)} /> */}
            <Tab
              label="The App"
              className="text-white"
              {...this.a11yProps(2)}
            />
            <Tab
              label="The Code"
              className="text-white"
              {...this.a11yProps(3)}
            />
            <div className="justify-self-end">
              <Link
                href="https://github.com/helenalvp/cart-checker"
                target="_blank"
                underline="none"
                color="inherit"
                rel="noreferrer"
                className="navlink"
              >
                <Tab label="Github Repo" />
              </Link>
              <Link
                href="https://helenalvp.com"
                target="_blank"
                underline="none"
                color="inherit"
                rel="noreferrer"
                className="navlink"
              >
                <Tab label="About" />
              </Link>
            </div>
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Home />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <TheApp />
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <TheCode />
        </TabPanel>
      </div>
    );
  }
}

export default NavBar;

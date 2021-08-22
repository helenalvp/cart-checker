import { Fragment, Component } from "react";
import CodeSnippet from "./CodeSnippet";
import CodeInfo from "./CodeInfo";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";

class CodeDropdown extends Component {
  render() {
    return (
      <Fragment>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id={this.props.componentName}
          >
            <Typography>{this.props.componentName}</Typography>
          </AccordionSummary>
          <AccordionDetails className="drop-down">
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <CodeSnippet code={this.props.code} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CodeInfo info={this.props.description} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Fragment>
    );
  }
}

CodeDropdown.propTypes = {
  componentName: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      classes: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CodeDropdown;

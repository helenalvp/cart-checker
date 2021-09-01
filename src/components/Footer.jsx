import { Component } from "react";
import { Container } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

class Footer extends Component {
  render() {
    return (
      <Container id="footer" className="fluid mt-auto sticky-footer" fluid>
        <Grid
          container
          spacing={3}
          className="pt-3 px-3 d-flex justify-content-between sticky-footer"
        >
          <Grid item xs={6} className="text-md-start py-0 footer-font-xs">
            <span>&copy;2021</span> Helena Vaquera | helenalvp@gmail.com
          </Grid>
          <Grid
            item
            xs={6}
            className="text-end col d-flex align-items-center p-0 justify-content-end"
          >
            <div className="row social px-2 pt-lg-3 pt-2">
              <div className="col-sm-3 col-6 p-sm-0 p-sm-2">
                <a
                  className=""
                  href="https://linkedin.com/in/helenalvp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
              <div className="col-sm-3 col-6 p-0 p-sm-2">
                <a
                  className=""
                  href="https://github.com/helenalvp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div className="col-sm-3 col-6 p-0 p-sm-2">
                <a
                  className="hide-link"
                  href="https://twitter.com/helenalvp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
              <div className="col-sm-3 col-6 p-0 pb-2 p-sm-2">
                <a
                  className="hide-link"
                  href="https://dev.to/helenalvp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-dev fa-2x"></i>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Footer;

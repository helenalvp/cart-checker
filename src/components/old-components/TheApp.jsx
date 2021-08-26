import { Fragment, Component } from "react";
import MoreInfoButton from "../MoreInfoButton";
import appLogo from "../assets/images/applogo.png";
import CartChecker from "../app-components/CartChecker";

class TheApp extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid border-bottom border-2 py-0 my-0">
          <h4 className="py-0 my-0">
            <img src={appLogo} className="app-logo " alt="" />
            CartChecker <MoreInfoButton />
          </h4>
        </div>
        {/* THIS IS WHERE I HAVE THE APP */}
        <div className="container app-container">
          <CartChecker />
        </div>
      </Fragment>
    );
  }
}

export default TheApp;

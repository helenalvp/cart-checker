import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CartChecker from "./components/app-components/CartChecker";
import MoreInfoButton from "./components/MoreInfoButton";
import appLogo from "./assets/images/applogo.png";

function App() {
  return (
    <div className="App">
      {/* <div className="container-fluid border border-danger bg-danger bg-opacity-10 text-danger">
        Cart still checking. Please come back later.
      </div> */}
      <div className="content container-fluid border-bottom border-2 py-0 my-0 mt-2 mt-md-5">
        <h4 className="py-0 my-0">
          <img src={appLogo} className="app-logo" alt="" />
          CartChecker <MoreInfoButton />
        </h4>
        <div className="container">
          <CartChecker />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

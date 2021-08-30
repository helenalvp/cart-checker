import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

export default function MoreInfoButton() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="app-detail container p-2 m-2"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h4 className="my-5">Welcome to the Cart Checker!</h4>
      <div class="app-summary my-5">
        <p className="my-2">
          This is designed to be a companion for your shopping trips.
        </p>
        <p className="my-2 py-3">
          Just have it out while you're shopping, adding every item and its
          price to your cart.
        </p>
        <p>
          While you shop, you can figure out exactly how much you have in your
          cart and how much you'll be paying in taxes before you hit the
          register!
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="more-info-btn"
          >
            {"More Info"}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

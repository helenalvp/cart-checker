import { Fragment, Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./cartchecker.css";

import ItemForm from "./ItemForm";
import SalesTax from "./SalesTax";
import TableDetail from "./TableDetail";

class CartCheckerMain extends Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} className="sales-tax p-0 mt-3">
            <SalesTax
            //add on change/submit function to cart checker
            />
          </Grid>
          <Grid
            item
            xs={12}
            className="item-form border-bottom border-2 p-0 m-0"
          >
            <ItemForm
            // add on change/submit function to cart checker
            />
          </Grid>
          <Grid
            item
            xs={12}
            className="item-container border-bottom border-2 p-0 m-0"
          >
            {/* this is where the fixed container to have the items will be */}
            <table class="table table-striped table-hover table-sm mb-0 pb-0 ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Taxable</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                <TableDetail />
              </tbody>
              {/* make this another table??? */}
              <tfoot>
                <tr>
                  <td></td>
                  <td>Items: #</td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}></td>
                  <td>Sub Total:</td>
                  <td>#</td>
                </tr>
                <tr>
                  <td></td> <td colSpan={2}></td>
                  <td>Total Taxes:</td>
                  <td>#</td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}></td>
                  <td>Total:</td>
                  <td>#</td>
                </tr>
              </tfoot>
            </table>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default CartCheckerMain;

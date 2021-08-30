import { Fragment, Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./cartchecker.css";

import ItemForm from "./ItemForm";
import SalesTax from "./SalesTax";
import TableDetail from "./TableDetail";

class CartChecker extends Component {
  state = {
    subTotal: 0,
    taxesTotal: 0,
    total: 0,
  };

  updateTaxes = () => {
    // this is going to change the taxes total and the total
  };

  updateTotal = () => {
    // this is going ot update the sub total and the total
  };

  updateTable = () => {
    //this is going to update the table that will lead to the update of the totals
  };

  render() {
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} className="sales-tax p-0 mt-3">
            <SalesTax
              //add on change/submit function to cart checker
              onchange={this.updateTaxes}
            />
          </Grid>
          <Grid
            item
            xs={12}
            className="item-form border-bottom border-2 p-0 m-0"
          >
            <ItemForm
              onAdd={this.updateTable}
              // add on change/submit function to cart checker
            />
          </Grid>
          <Grid
            item
            xs={12}
            className="item-container border-bottom border-2 p-0 m-0"
          >
            {/* this is where the fixed container to have the items will be */}
            <table className="table table-striped table-hover table-sm mb-0 pb-0 ">
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
              <tfoot>
                <tr>
                  <td></td>
                  <td>Items: {}</td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td colSpan={3} className="hide-text">
                    cartchecker
                  </td>
                  <td>Sub Total:</td>
                  <td>$ {this.state.subTotal}</td>
                </tr>
                <tr>
                  <td colSpan={3} className="hide-text">
                    cartchecker
                  </td>
                  <td>Total Taxes:</td>
                  <td>$ {this.state.taxesTotal}</td>
                </tr>
                <tr>
                  <td colSpan={3} className="hide-text">
                    cartchecker
                  </td>
                  <td>Total:</td>
                  <td>$ {this.state.total}</td>
                </tr>
              </tfoot>
            </table>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default CartChecker;

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
    items: [],
    timesClicked: 0,
  };

  updateTaxes = () => {
    // this is going to change the taxes total and the total
  };

  updateTotal = () => {
    // this is going ot update the sub total and the total
  };

  addInTable = (itemObj) => {
    var itemToAdd = {};
    itemToAdd.name = itemObj.itemName;
    itemToAdd.taxable = itemObj.isTaxable;
    itemToAdd.cost = itemObj.itemCost;

    //going to add in table
    if (itemToAdd.name === "") {
      itemToAdd.name = `Item ${this.state.timesClicked + 1}`;
    }
    itemToAdd.id = `${this.state.timesClicked}`;
    var updatedItemsArr = this.state.items.concat(itemToAdd);
    var addedItem = this.state.timesClicked + 1;
    //this also affects the totals....

    this.setState({ items: updatedItemsArr, timesClicked: addedItem });
    //format the object name, and add to the array by changing state
  };

  deleteInTable = (itemId) => {
    var idToDelete = itemId;
    var itemsArr = this.state.items;
    for (let i = 0; itemsArr.length > i; i++) {
      if (itemsArr[i].id === idToDelete) {
        itemsArr.splice(i, 1);
        break;
      }
    }

    this.setState({ items: itemsArr });
  };

  showError = () => {
    //add tostr error
    console.log("Change could not be made, please try again");
  };
  render() {
    return (
      <Fragment>
        <Grid container spacing={3} className="mb-5">
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
              onAdd={this.addInTable}
              // add on change/submit function to cart checker
              onError={this.showError}
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
                  <th scope="col">Name</th>
                  <th scope="col">Taxable</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                <TableDetail
                  itemsToMap={this.state.items}
                  onDelete={this.deleteInTable}
                />
              </tbody>
              <tfoot>
                <tr>
                  <td>Items: {this.state.items.length}</td>
                  <td colSpan={3}></td>
                </tr>
                <tr>
                  <td colSpan={2} className="hide-text">
                    cartchecker
                  </td>
                  <td>Sub Total:</td>
                  <td>$ {this.state.subTotal}</td>
                </tr>
                <tr>
                  <td colSpan={2} className="hide-text">
                    cartchecker
                  </td>
                  <td>Total Taxes:</td>
                  <td>$ {this.state.taxesTotal}</td>
                </tr>
                <tr>
                  <td colSpan={2} className="hide-text">
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

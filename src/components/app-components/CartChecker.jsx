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
    totalThatNeedsToBeTaxed: 0,
    tax: 0.0509,
  };

  updateTaxes = (newTax) => {
    // this is going to change the taxes total and the total
    var tax = newTax / 100;
    var newTaxesTotal = this.state.subTotal * tax;
    var newTotal = this.state.subTotal + newTaxesTotal;

    this.setState({
      taxesTotal: newTaxesTotal.toFixed(2),
      total: newTotal.toFixed(2),
      tax,
    });
  };

  updateTotals = () => {
    // this is going to update the sub total and the total
    console.log("here is where i update totals");
    var newSubTotal = 0;
    var tax = this.state.tax;
    console.log(tax);
    var newTaxTotal = 0;
    var newTotal = 0;
    var itemsArr = this.state.items;
    console.log(itemsArr.length, itemsArr, true);
    if (itemsArr.length > 0) {
      for (var i = 0; i <= itemsArr.length - 1; i++) {
        var item = itemsArr[i];
        console.log("this is the item being looped", item);
        console.log(item.cost, isNaN(item.cost), typeof item.cost);
        var cost = item.cost;

        newSubTotal += cost;

        if (item.taxable === true) {
          newTaxTotal += cost * tax;
        }
      }

      newTotal = newSubTotal + newTaxTotal;

      this.setState(
        {
          subTotal: newSubTotal.toFixed(2),
          taxesTotal: newTaxTotal.toFixed(2),
          total: newTotal.toFixed(2),
        },
        () =>
          console.log(
            `this should update the totals`,
            this.state,
            this.state.items
          )
      );
    }
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

    this.setState({ items: updatedItemsArr, timesClicked: addedItem }, () =>
      this.updateTotals()
    );
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

    this.setState({ items: itemsArr }, () => this.updateTotals());
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
              updateTaxTotal={this.updateTaxes}
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

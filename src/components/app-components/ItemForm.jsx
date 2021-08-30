import { React, Fragment, Component } from "react";

class ItemForm extends Component {
  state = {
    item: {
      itemName: "",
      isTaxable: false,
      itemCost: 0,
    },
  };
  //when component mounts, it will have the number of the next item as the name(Item #)

  onChange = (e) => {
    var inputName = e.currentTarget.id;
    var inputValue = e.currentTarget.value;
    console.log(inputName, inputValue);

    //change values to be string, boolean, and number accordingly
    this.setState(
      (prevState) => {
        var item = { ...prevState.item };
        item[inputName] = inputValue;
        console.log(inputName, inputValue, item);

        return { item };
      },
      () => console.log(this.state)
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.item.itemCost > 0 ? "Item added!" : "Item will not be added"
    );
  };
  render() {
    return (
      <Fragment>
        <form className="row gy-2 gx-3 justify-content-between align-items-center form-floating my-lg-3 pb-2 border">
          <div className="col-auto">
            <div className="row">
              <div className="col-4">
                <label htmlFor="itemName" className="col-form-label">
                  Item name
                </label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  placeholder="Item Name"
                  value={this.state.item.itemName}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="isTaxable"
                checked={this.state.item.isTaxable}
                value={!this.state.item.isTaxable}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="isTaxable">
                Is taxable?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <div className="row">
              <div className="col-4">
                <label className="col-form-label" htmlFor="itemCost">
                  Cost
                </label>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="itemCost"
                    placeholder="Cost"
                    value={this.state.item.itemCost}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              onClick={this.onSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ItemForm;

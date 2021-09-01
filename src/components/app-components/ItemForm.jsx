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

    //making checked string into boolean
    if (inputName === "isTaxable") {
      if (inputValue === "true") {
        inputValue = true;
      } else {
        inputValue = false;
      }
    }
    if (inputName === "itemCost") {
      inputValue = Number(inputValue);
    }
    //change values to be string, boolean, and number accordingly
    this.setState((prevState) => {
      var item = { ...prevState.item };
      item[inputName] = inputValue;
      return { item };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.state.item.itemCost > 0
      ? this.props.onAdd(this.state.item)
      : this.props.onError();
  };
  render() {
    return (
      <Fragment>
        <form className="row gy-2 gx-3 justify-content-between align-items-center form-floating my-md-3 pb-2 border">
          <div className="col-auto format-sm">
            <div className="row m-0 p-0">
              <div className="col-4 p-0">
                <label
                  htmlFor="itemName"
                  className="col-form-label p-0 mt-md-2"
                >
                  Item name
                </label>
              </div>
              <div className="col-8 p-0 m-0">
                <input
                  type="text"
                  className="form-control format-sm"
                  id="itemName"
                  placeholder="Item Name"
                  value={this.state.item.itemName}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-auto format-check-xs">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="isTaxable"
                checked={this.state.item.isTaxable}
                value={!this.state.item.isTaxable}
                onChange={this.onChange}
              />
              <label
                className="form-check-label form-check-md"
                htmlFor="isTaxable"
              >
                Is taxable?
              </label>
              <label
                className="form-check-label form-check-sm"
                htmlFor="isTaxable"
              >
                tax?
              </label>
            </div>
          </div>
          <div className="col-auto p-0 m-0">
            <div className="row p-sm-0 m-sm-0 format-xs format-cost-xs">
              <div className="col-4 p-0 m-0 format-xs ">
                <label
                  className="col-form-label mt-0 mt-md-2 pt-0"
                  htmlFor="itemCost"
                >
                  Cost
                </label>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control format-sm"
                    id="itemCost"
                    placeholder="Cost"
                    value={this.state.item.itemCost || ""}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto m-0 p-0 format-xs p-md-2">
            <button
              type="submit"
              className="btn btn-sm btn-primary format-sm"
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

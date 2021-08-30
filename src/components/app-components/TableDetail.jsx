import { Component, Fragment } from "react";
import "./cartchecker.css";

class TableDetail extends Component {
  state = { tableItems: [], mappedItems: [] };

  componentDidUpdate() {
    if (
      this.state.tableItems.length !== this.props.itemsToMap.length ||
      this.props.itemsToMap.length !== this.state.mappedItems.length
    ) {
      var tableItems = this.props.itemsToMap;
      //ill need to map all of them because of the delete factor...
      var mappedItems = this.mapItems(tableItems);
      this.setState({ tableItems, mappedItems });
    }
  }

  mapItems = (arrOfItemsObj) => {
    var arr = arrOfItemsObj;

    var mappedArr = arr.map(this.mapItem);

    return mappedArr;
  };

  mapItem = (item) => {
    return (
      <tr className="my-5" key={item.id}>
        <td className="t-detail pt-2">{item.name}</td>
        <td>
          <button
            className="btn btn-danger btn-sm delete-btn"
            onClick={this.deleteItem}
            id={item.id}
          >
            Delete
          </button>
        </td>

        <td className="t-detail pt-2">{item.taxable ? "Y" : "N"}</td>
        <td className="t-detail pt-2">${item.cost}</td>
      </tr>
    );
  };

  deleteItem = (e) => {
    e.preventDefault();
    var itemId = e.target.id;
    this.props.onDelete(itemId);
  };

  render() {
    return <Fragment>{this.state.mappedItems}</Fragment>;
  }
}

export default TableDetail;

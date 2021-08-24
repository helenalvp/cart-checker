import { Component } from "react";
import "./cartchecker.css";

class TableDetail extends Component {
  state = {};
  render() {
    return (
      <tr className="my-5">
        <td>
          <button className="btn btn-danger btn-sm delete-btn">Delete</button>
        </td>
        <th scope="row">1</th>
        <td className="t-detail pt-2">Milk</td>
        <td class="t-detail pt-2">N</td>
        <td class="t-detail pt-2">$2.00</td>
      </tr>
    );
  }
}

export default TableDetail;

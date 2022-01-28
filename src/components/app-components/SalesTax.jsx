import { React, Component } from "react";

class SalesTax extends Component {
  state = {
    salesTax: 5.09,
    salesTaxValidClass: "",
  };

  changeSalesTax = (e) => {
    let salesTax = Number(e.currentTarget.value);
    let salesTaxValidClass =
      0 <= salesTax && salesTax <= 15
        ? this.props.updateTaxTotal(salesTax)
        : "warning";

    this.setState({ salesTax, salesTaxValidClass });
    //once this changes to a valid number, so does everyhting else in the whole total on the total tax
  };

  render() {
    return (
      <div
        className={`row pt-1 g-3 align-items-center ${this.state.salesTaxValidClass}`}
      >
        <div className="col-auto ">
          <label htmlFor="sales-tax" className="col-form-label">
            Sales Tax
          </label>
        </div>
        <div className="col-auto">
          <input
            type="number"
            min={0}
            max={15}
            id="salesTax"
            className={`form-control ${this.state.salesTaxValidClass}`}
            aria-describedby="sales-tax is-invalid"
            value={this.state.salesTax || ""}
            onChange={this.changeSalesTax}
          />
        </div>
        <div className="col-auto mx-0 mt-sm-4 mt-0 px-0">
          <span className="percent-sign">%</span>

          <span
            className={`mx-2 form-text form-text-md ${this.state.salesTaxValidClass}`}
          >
            Add percent between 0 - 15
          </span>
        </div>
      </div>
    );
  }
}

export default SalesTax;

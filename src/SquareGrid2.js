import React, { Component } from "react";
import data from "./tigerdata.json";
class SquareGrid extends Component {
  state = {
    total: 0
  };

  componentDidMount() {
    console.log(JSON.stringify(data));

    let t = 0;

    data.map(c => {
      console.log(c.salary);
      t += parseInt(c.salary, 10);
    });
    console.log(t);

    this.setState({
      total: t.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="cover">
          <h1 className="cover-title cover-title-tigers">
            <span>Tigers Top 10 Annual Salary Players 2019</span>
            <p className="cover-salary">{this.state.total}</p>
          </h1>
        </div>
        <ul className="sq clearfix">
          {data.map((item, index) => {
            return (
              <li key={item.id} className="sq-item">
                <a className="sq-item-anchor" href="">
                  <img
                    className="sq-item-anchor-cover"
                    src={item.picture}
                    alt=""
                  />
                  <span className="sq-item-anchor-title">{item.name}</span>
                  <span className="sq-item-anchor-title sq-item-anchor-salary">
                    {item.salary.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD"
                    })}
                  </span>
                  <span className="sq-item-anchor-title">{item.pos}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SquareGrid;

import React, { Component } from "react";
import data from "./tigerdata.json";
class SquareGrid extends Component {

  componentDidMount() {
    console.log(JSON.stringify(data));

    let t = 0;

    data.map(c => {
      console.log(c.salary);
      t += parseInt(c.salary, 10);
    });
    console.log(t);
  }

  render() {
    return (
      <div className="wrapper">
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
                    {item.salary}
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

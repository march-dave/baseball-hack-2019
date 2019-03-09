import React, { Component } from "react";
import data from "./data.json";
class SquareGrid extends Component {

 state = {
     id: 0,
     name: "",
     pos: "",
     picture: "",
     salary: ""
 };

 componentDidMount() {
     console.log(JSON.stringify(data));
    //  let obj = data.filter(  )

    // this.setState({
    //     id: 0,
    //     name: "",
    //     pos: "",
    //     picture: "",
    //     salary: ""
    // })
 }


  render() {
    return (
      <div className="wrapper">
        <ul className="sq clearfix">
          {data.map( (item, index) => { return ( 
          <li key={item.id} className="sq-item">
            <a className="sq-item-anchor" href="">
              <img
                className="sq-item-anchor-cover"
                src={item.picture}
                alt=""
              />
              <span className="sq-item-anchor-title">{item.name}</span>
            </a>
          </li>
            ) } )}
        </ul>
      </div>
    );
  }
}

export default SquareGrid;

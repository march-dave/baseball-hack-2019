import React, { Component } from "react";
import SqareGrid from "./SquareGrid";
import SqareGrid2 from "./SquareGrid2";

class App extends Component {

  state = {
    showResults: false
  }

  handleSearchTeam = (e) => {
    console.log(e.target.value.toLowerCase());

    let team = e.target.value.toLowerCase();
    
    if (team == "tiger") {
      this.setState({
        showResults: true
      })
    }
  }


  render() {
    return (
      <div>
        <SqareGrid />
        <div className="find-team-div">
          <span className="find-team-span">Compare Team</span>
          <input type="text" className="find-team-search" onChange={this.handleSearchTeam} />
        </div>
        { this.state.showResults ? <SqareGrid2 /> : null }

        {/* <SqareGrid2 /> */}


      </div>
    );
  }
}
export default App;

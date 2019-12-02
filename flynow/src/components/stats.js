import React from "react";
import Button from "@material-ui/core/Button";
//import Modal from 'react-modal';
import "typeface-roboto";

class stats extends React.Component {
  render() {
    return (
      <div>
        <h1
          align="center"
          style={{
            fontFamily: "roboto",
            fontSize: "48px",
            fontWeight: "normal",
            paddingTop: "10px"
          }}
        >
          Stats
        </h1>
        <hr size="100px" />
     
      <div className="container"> 
      <div className="panel panel-default p50 uth-panel">
        
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th>Flight Number</th>
                      <th>Origin</th>
                      <th>Destination</th>
                      <th>Seats Available</th>
                      <th> Max Capacity</th>
                  </tr>
              </thead>
              
          </table>
      </div>
      </div>
      </div>
  
    );
  }
}


export default stats;

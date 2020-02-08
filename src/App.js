import React from "react";
import "./scss/App.scss";
import Member from "./components/member";
import allMembers from "./components/allMembers";
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  setConfiguration
} from "react-grid-system";

setConfiguration({ gridColumns: 20 });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UXDesigner: false
    };
  }

  render() {
    const memberList = allMembers.map(member => (
      <Col xs={10} md={4}>
        <Member
          image={member.image}
          name={member.name}
          year={member.year}
          portfolio={member.portfolio}
          linkedin={member.linkedin}
        ></Member>
      </Col>
    ));

    return (
      <div className="container">
        <Row>
          <Col xs={20} md={5}>
            <img src={require("./images/designCommunity.svg")}></img>
            <button type="button">NOMINATE</button>
            <h3>Filters</h3>

            {
              //Need to add form action and all
            }

            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>
            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>
            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>
            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>
            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>
            <label>
              <input type="checkbox" name="UXDesigner" onChange={()=>{this.setState({UXDesigner: !this.state.UXDesigner})}} className="checkbox" ></input>
              <p>UX DESIGNER</p>
            </label>

            <h3>Sort By</h3>
          </Col>
          <Col xs={20} md={15}>
            <Row>{memberList}</Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

import React, {Component} from "react"
import {Tabs, Tab, Jumbotron, Grid} from "react-bootstrap"
import Todo from "../Todo/App"
import Jobs from "../Jobs/App"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Grid>
            <h2>The Job Resource</h2>
          </Grid>
        </Jumbotron>
        <div>
          <Jobs />
        </div>
        
        
      </div>
    )
  }
}

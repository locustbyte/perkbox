import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  jobOption(count) {
    let jobs = []
    for (let i = 0; i < count; i++) {
      jobs.push(i);
    }
    const jobList = jobs.map(job => {
      return (
        <JobCard
          cardIndex={job}
        />
      )
    })
    if (!count) {
      return (
        <NoJob />
      )
    }
    return (
      <div>
        {jobList}
      </div>
    )
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <div className="panel">
        <p>How many jobs do you have?</p>
          <ButtonGroup>
            <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
            <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
            <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
            <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
          </ButtonGroup>
        </div>
        {this.jobOption(this.state.jobCount)}
      </div>
    )
  }
}

class JobCard extends Component {
  render() {
    return (
      <div className="panel">
        <h3>Job {this.props.cardIndex + 1}</h3>
        <div>
          <div>
            <label>What is your job occupation?</label>
          </div>
          <div>
            {renderJobSelect()}
          </div>
        </div>
        <div>
          <div>
            <label>Company name</label>
          </div>
          <div>
            <input className="form-control" placeholder="Enter company name"/>
          </div>
        </div>
        <div>
          <div>
            <label>Income</label>
          </div>
          <div>
            <input className="form-control" placeholder="Enter Income Amount"/>
          </div>
        </div>
      </div>
    )
  }
}

class NoJob extends Component {
  render() {
    return (
      <div className="panel">
        <strong>What is your current status?</strong>
        <div>
          {renderNoJobSelect()}
        </div>
      </div>
    )
  }
}

function renderJobSelect() {
  const values = [
    "Accountant",
    "Occupational Therapist",
    "Driver",
    "Software Engineer",
    "Sales Assistant"
  ];
  return (
    renderSelect(values)
  )
}

function renderNoJobSelect() {
  const values = [
    "Select",
    "Searching for a job",
    "Taking a break"
  ];
  return (
    renderSelect(values)
  )
}

function renderSelect(values) {
  const options = values.map(option => {
    return (
      <option>{option}</option>
    )
  })
  return (
    <select className="form-control">
      {options}
    </select>
  )
}

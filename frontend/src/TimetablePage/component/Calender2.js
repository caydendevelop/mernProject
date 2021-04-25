import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
// import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week"
    };
  }

  componentDidMount() {
    // load event data
    this.setState(this.props.courseArray);
    console.log("componentDidMount: " , this.props.courseArray)
  }

  componentWillMount() {
    // load event data
    this.setState(this.props.courseArray);
    console.log("componentWillMount: ", this.props.courseArray)
  }

  render() {
    let {...config} = this.state;
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default Calendar;
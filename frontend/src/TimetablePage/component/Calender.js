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
    this.setState({
      startDate: "2021-09-15",
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2021-09-14T10:30:00",
          end: "2021-09-14T13:00:00"
        },
        {
          id: 2,
          text: "Event 2",
          start: "2021-09-14T09:30:00",
          end: "2021-09-14T11:30:00",
          
        },
        {
          id: 2,
          text: "Event 3",
          start: "2021-09-14T12:00:00",
          end: "2021-09-14T15:00:00",
          
        },
      ]
    });
  }

  render() {
    var {...config} = this.state;
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
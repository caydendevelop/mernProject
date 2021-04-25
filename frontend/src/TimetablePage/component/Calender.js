import React from 'react';
 
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
 
import Scheduler from 'devextreme-react/scheduler';
import Button from 'devextreme-react/button';
 
const recurringAppointments = [
  //2021-01-04T(09:00:00)+08:00
  { 
    text: 'COMP3359',
    startDate: "2021-01-18T09:30+08:00",
    endDate: "2021-01-18T11:20+08:00",
    recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH"
  }, 
  {
    text: 'COMP2396',
    startDate: "2021-01-18T12:30:00.000+08:00", 
    endDate: "2021-01-18T14:30:00.000+08:00",
    recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR"
  }
];

<<<<<<< HEAD
let date = new Date(2021, 3, 25);
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.schedulerRef = React.createRef();
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }
 
    get scheduler() {
        return this.schedulerRef.current.instance;
    }
 
    deleteAppointment() {
        this.scheduler.deleteAppointment(this.recurringAppointments[0]);
    }
 
    render() {
        return (
            <React.Fragment>
                <Scheduler
                     dataSource={recurringAppointments}
                     defaultCurrentDate={date}
                     defaultCurrentView="week"
                     firstDayOfWeek={0}
                     startDayHour={8}
                     endDayHour={19}
=======
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
>>>>>>> e80d6710486d912031e138d572193c54765dd604

                />
                <Button
                    text="Delete"
                    onClick={this.deleteAppointment}
                />
            </React.Fragment>
        );
    }
}
export default App;
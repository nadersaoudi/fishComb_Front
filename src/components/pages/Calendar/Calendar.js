import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  MonthView,
  DayView,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { connect } from 'react-redux';
import { appointments } from './appointments';
import { Fragment } from 'react';
import { useEffect } from 'react';
import {getCalendar} from '../../../Actions/calendar'
import PropTypes from 'prop-types';
const Calendar =({getCalendar,Calendars:{calendars}})=>{
 
  useEffect(()=>{
    getCalendar()
  },[getCalendar])
    var  [currentViewName,setcurrentViewName]=useState('work-week');
    const  currentViewNameChange = (currentViewName) => {
     setcurrentViewName(currentViewName);
    };
    return (
      <Fragment>
        <title>Calendar</title>
        <Paper>
         
        <Scheduler
          data={calendars}
          height={660}
          
        >
          <ViewState
            defaultCurrentDate="2021-03-25"
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
    
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView />
          <DayView />
    
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
          <AllDayPanel />
        </Scheduler>
      </Paper></Fragment>
    );
}
Calendar.prototype = {
 
  getCalendar: PropTypes.func.isRequired,
  Calendars:PropTypes.object.isRequired,
  
}
const mapStateToProps =state=>({
  Calendars:state.calendars
})
export default connect(mapStateToProps,{getCalendar}) (Calendar)
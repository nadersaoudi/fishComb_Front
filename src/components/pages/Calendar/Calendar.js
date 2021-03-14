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
const Calendar =({events:{events}})=>{
  const initialValue =  { title:'xxss', startDate:'' }; 
  const [interceptor,setinterceptor]=useState([])
  const interceptEvents=()=>{
    events.forEach(event=>{
      initialValue.title=event.name
      initialValue.startDate=event.date
         interceptor.push(initialValue)   
    })
    console.log(interceptor)
  }
  useEffect(()=>{
    interceptEvents()
  },[interceptEvents])
    var  [currentViewName,setcurrentViewName]=useState('work-week');
    const  currentViewNameChange = (currentViewName) => {
     setcurrentViewName(currentViewName);
    };
    return (
      <Fragment>
        <title>Calendar</title>
        <Paper>
         
        <Scheduler
         // data={interceptor}
          height={660}
        >
          <ViewState
            defaultCurrentDate="2018-07-25"
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
const mapStateToProps =state=>({
  events:state.events
})
export default connect(mapStateToProps) (Calendar)
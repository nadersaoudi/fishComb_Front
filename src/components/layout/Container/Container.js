import React from 'react';
import './Container.css';
import Profile from '../../pages/profile/Profile';
import {  Route, Switch,  } from "react-router-dom";
import Market from '../../pages/market/Market';
import Events from '../../pages/events/Events';
import Watch from '../../pages/watch/Watch';
import Board from '../../pages/board/Board';
import Message from '../../pages/messages/Messages';
import NewFeed from '../../pages/newsfeed/Newfeed';
import Searchitem from '../../pages/Search/Searchitem';


const Container = () => {

return(

  <div classes='row no-gutters '>
     <div className="content-wrapper col-10">
    <main role="main">
        <div className="main">
      
       
          <Switch>
          <Route path={`/dashboard/newsfeed`}>
                    <NewFeed />
                  </Route>
                  <Route path={`/dashboard/messages`}>
                    <Message />
                  </Route>
                  <Route path={`/dashboard/marketplace`}>
                    <Market />
                  </Route>
                  <Route path={`/dashboard/watch`}>
                    <Watch />
                  </Route>
                  <Route path={`/dashboard/events`}>
                    <Events />
                  </Route>
                  <Route path={`/dashboard/board`}>
                    <Board />
                  </Route>
                  <Route path="/dashboard/profile">
                    <Profile />
                  </Route>
                  <Route path="/dashboard/search">
                    <Searchitem />
                  </Route>
          </Switch>
         
       
               
              
        </div>
      </main>


    </div>
  </div>
   
)


}
export default Container;
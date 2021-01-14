import React  from 'react';
import {  Switch, Route,  } from "react-router-dom";
import Aboute from '../edit-profile/Aboute/Aboute';
import Order from '../edit-profile/Order';
import Edit from '../edit-profile/Edit';
import Network from '../edit-profile/Network'
import Webinars from '../edit-profile/Webinars';

const Content = () => {


    return (
        <main role="main">
        <div className="main">
        <Switch>
        <Route path={`/dashboard/profile/about`}>
            <Aboute/>
          </Route>
          <Route path={`/dashboard/profile/edit`}>
            <Edit/>
          </Route>
          <Route path={`/dashboard/profile/order`}>
            <Order />
          </Route>
          <Route path={`/dashboard/profile/network`}>
            <Network />
          </Route>
          <Route path={`/dashboard/profile/webinars`}>
            <Webinars />
          </Route>
        </Switch>
        </div>
      </main>
    )
}

export default Content;
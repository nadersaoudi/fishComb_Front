import React  from 'react';
import {  Switch, Route,  } from "react-router-dom";
import Aboute from '../edit-profile/Aboute';
import Order from '../edit-profile/Order';
import Edit from '../edit-profile/Edit';
import Network from '../edit-profile/Network'

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
        </Switch>
        </div>
      </main>
    )
}

export default Content;
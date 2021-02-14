import React from 'react';
import './Container.css';
import Profile from '../../pages/profile/Profile';
import { Route, Switch, } from "react-router-dom";
import Market from '../../pages/market/Market';
import Events from '../../pages/events/Events';
import Watch from '../../pages/watch/Watch';
import Board from '../../pages/board/Board';
import Message from '../../pages/messages/Messages';
import NewFeed from '../../pages/newsfeed/Newfeed';
import Searchitem from '../../pages/Search/Searchitem';
import Eventitem from '../../pages/events/Eventitem'
import Attended from '../../pages/events/Attended'
import ProductItem from '../../pages/market/products/ProductItem';
import Userprofile from '../../pages/profile/Userprofile';
import Cart from '../../pages/market/Cart/Cart';
import Replies from '../../pages/board/Replies';
import Invited  from '../../pages/events/Invited'
import Gallery  from '../../pages/events/Gallery'
import Page500 from '../../auth/500Page/Page500'
import Page404 from '../../auth/404Page/Page404'
const Container = () => {
  return (
    <div classes='row no-gutters '>
      <div className="content-wrapper col-10 px-0">
        <main role="main">
          <div className="main">
            <Switch>
              <Route exact path={`/dashboard/newsfeed`}>
                <NewFeed />
              </Route>
              <Route exact path={`/dashboard/messages`}>
                <Message />
              </Route>
              <Route exact path={`/dashboard/marketplace`}>
                <Market />
              </Route>
              <Route exact path={"/dashboard/cart"}> <Cart />
              </Route>
              <Route exact path={`/dashboard/watch`}>
                <Watch />
              </Route>
              <Route exact path={`/dashboard/events`}>
                <Events />
              </Route>
              <Route exact path={`/dashboard/attendedevent`}>
                <Attended />
              </Route>
              <Route exact path={`/dashboard/invited`}>
                <Invited />
              </Route>
              <Route exact path={`/dashboard/Gallery`}>
                <Gallery />
              </Route>
                <Route exact path={'/dashboard/singleevent/:id'} render={props => <Eventitem {...props} />}>
                </Route>
                  <Route exact path={'/dashboard/singleproduct/:id'} render={props => <ProductItem {...props} />}>
              </Route>
              <Route exact path={`/dashboard/board`}>
                <Board />
              </Route>
              <Route exact path={`/dashboard/profileuser/:id`} render={props => <Userprofile {...props} />}>
              </Route>
              <Route  path="/dashboard/profile">
                <Profile />
              </Route>
              <Route exact path="/dashboard/search">
                <Searchitem />
              </Route>
              <Route exact path={'/dashboard/thread/:id'} render={props => <Replies {...props} />}>
              </Route>
              <Route  path={'/dashboard/404'}  render={props => <Page404 {...props} />} />
              <Route  path={'/dashboard/500'}  render={props => <Page500 {...props} />} />
            </Switch>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Container;
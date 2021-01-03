import React from 'react';

import './Message.css';

const Message =() => {
    return (
        <div className="container">
            <div className="row pt-5"  >
            <div className="col-2">
                     <nav class="navbar navbar-toggleable-sm navbar-fixed-top navbar-light bg-faded">
                     
                     <div className='mt-2 '>
                         <button id='add'>add Room</button>
                         </div>
                </nav>
            </div>
        
            <div className="col-8 pb-3 h-100  id='box'">
                <ul className="nav nav-pills nav-justified " id='navprofil'>
                    <li className="nav-item">
                    <span className="float-left">Rooms</span>
                    </li>
                </ul>
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                        <button className='roombtn float-right'>join room</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                        <button className='roombtn float-right'>join room</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                        <button className='roombtn float-right'>join room</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                        <button className='roombtn float-right'>join room</button>
                    </div>
                </div>
            </div>
            
          
                
            </div>
            
        </div>
    )
}

export default Message;
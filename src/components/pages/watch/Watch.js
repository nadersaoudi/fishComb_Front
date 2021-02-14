import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Avatar } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const Watch =() => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));
      const classes = useStyles();
    return (
        <div>
            <title>Webinair |FishComb</title>
            <div className="row pt-5" id="n" >
            <div className="col-2">
            </div>
            <div className="col-4 pb-3">
                <ul className="nav nav-pills nav-justified " id='navprofil'>
                    <li className="nav-item">
                    <NavLink to={`/dashboard/watch`} className="m"><span className='n'>All Webinars</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>My Streams</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Invited Webinars</span></NavLink>
                    </li>
                  
                </ul>
                
            </div>
            <div className='col-3'></div>
            <div className='col-2'><Button> Add Webinar</Button></div>
            </div>
            <div className='row pt-4'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <form className='card'>
                     <div className='row' id='pub-top1'>
                        <div className='col-1'>
                            <Avatar  src="../../../../jeje.jpg" className={classes.large} />
                        </div>
                        
                        <div className='col-8'>
                            <span className='nameuser'>Tom Hard</span> 
                            <div className='row'>
                                <div className='col-2 datepost'>Starts in2m</div></div>
                        </div>
                        <div className='col-1'></div>
                        <div className='col-1 pt-0 ml-4'>
                        <Button>Join Now</Button>
                        </div>

                    </div>    
                    <div className='row mt-4'  id='pub-top11'>
                            <div className='col-12'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                                </div>  
                        </div>
                        <div className='row mt-4' >
            
                            <img src="../../../../photocov.jpg" alt='' className='col-12'
                            />
                            
                            

                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Watch;
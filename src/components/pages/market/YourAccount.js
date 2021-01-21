import React from 'react';
import { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

const  YourAccount = () => {
    return (
        <Fragment>
            <div>
                <form className='addProduct'>
                    <DialogContent>
                        <div className='row pt-1 pb-2'>
                            <div className='col-6'>
                                <img src='https://picsum.photos/id/77/200/300' width="250" height="300" alt='event' />
                            </div>
                            <div className='col-6'>
                                <div className='row pt-1 pb-1'>
                                    <div className='col-sm-12'>
                                        <b> Board</b>
                                    </div>
                                </div>
                                <div className='row pt-2'>
                                    <div className='col-sm-12'>
                                        <h6>£50</h6> 
                                    </div>
                                </div>
                                <div className='row pt-1'>
                                    <div className='col-sm-12'>
                                        <p><h6>qlhqkjhqksjh qh lkqshdkqsdhjlkqshd kqsjh qklsjdhq jhqsdkjhq kd hq sd 
                                                qso dqh dqjdmo q fjqhsdj hqshd qsd lqkshf qf q</h6></p>  
                                    </div>
                                </div>
                                <div className='row pt-1'>
                                    <div className='col-sm-12'>
                                       Quantity
                                    </div>
                                </div>
                                <div className='row pt-1'>
                                    <div className='col-sm-12'>           
                                    </div>
                                </div>
                                <div className='row pt-5 '>
                                    <div className='col-sm-6'>
                                        <Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}>
                                            <span><h6>Add to Basket</h6></span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </DialogContent>
                </form>
            </div> 
        </Fragment>
    )
}
export default YourAccount;
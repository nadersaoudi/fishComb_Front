import React from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import {myOrders} from '../../../../Actions/cart'
import PropTypes from 'prop-types';

const Order = ({myOrders,cart:{orders}}) => {
useEffect(()=>{
  myOrders()
},[myOrders])

return(
    <div className='kk'>
    <div className="row " >
          <div className='col-12 mt-5'>

          <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>First Name</th>
      <th>Last Name</th>
      <th>Total</th>
      <th>Transaction_Id</th>
    </tr>
  </thead>
  <tbody>
    {orders.map(order=> (
      <tr>
     
      <td>{order.data.first_name}</td>
      <td>{order.data.last_name}</td>
      <td>{order.data.sub_total}</td>
      <td>{order.data.payment_id}</td>
    </tr>
    )

    )}
   </tbody>
</Table>
        
          </div> 
          
         
     
        </div>
       
    </div>
)

}
Order.propTypes ={
  cart:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  cart:state.cart
})
export default connect(mapStateToProps,{myOrders}) (Order);

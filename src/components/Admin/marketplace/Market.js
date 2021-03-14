import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
import {  getMarket } from '../../../Actions/Market';

const Market =({markets:{markets},getMarket})=>{
    useEffect(() => {
        getMarket()
    }, [getMarket])

    return(
        <div>
               <title>
                Admin | events</title>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>category</th>
                        <th>Creator</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody> {
                   markets.map(markets => (
                        <tr key={
                            markets.id
                        }>
                            <td>{
                                markets.name
                            }</td>
                            <td>{
                                markets.price
                            }</td>
                            <td>{
                                markets.stock
                            }</td>
                             <td>{
                                markets.description
                            }</td>
                            <td>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))
                } </tbody>
            </Table>
        </div>
    )
}
Market.prototype = {
    markets:PropTypes.object.isRequired,
    getMarket: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
    markets: state.market,
})

export default connect(mapStateToProps,{getMarket})(Market)
import React from "module";
import { Link } from "react-router-dom";
import {  Col, Row,Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData} from './tileData';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      paddingTop:'60px'
     // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 700,
      height: 650,
    },
  }));
const Gallery =()=>{
    const classes = useStyles();
    return (
        <div>
        <Row className='pt-5 pb-3'>
                    <Col md={3} className='px-0' ></Col>
                    <Col md={4} className="pb-4 pt-5 px-0 mr-5">
                        <ul className="nav nav-pills nav-justified " id='navprofil'>
                            <li className="nav-item">
                    <Link to={`/dashboard/events`}className="link_cart" ><span className="n" >General event</span></Link>
                </li>

                <li className="nav-item">
                    <Link to={`/dashboard/Gallery`} className="link_cart" ><span className="n">Gallery</span></Link>
                </li>

            </ul>
        </Col>
        <Row className='pt-3'>
          <Col xs={1}></Col>
          <Col xs={10}>
          <h1>Events Gallery</h1>
          </Col>  
        </Row>
    </Row>
    <Row>
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={7}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Row>
    </div>
    )
}
export default Gallery;
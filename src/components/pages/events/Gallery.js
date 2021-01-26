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
        <Container>
        <Row className='pt-5'>
        <Col md={3} sm={3} xl={3} ></Col>
        <Col md={8} sm={8} xl={8}>
            <ul className="nav nav-pills nav-justified" id='navprofil'>
                <li className="nav-item">
                    <Link to={`/dashboard/events`} className="m"><span className="eventslink" >General event</span></Link>
                </li>

                <li className="nav-item">
                    <Link to={`/dashboard/Gallery`} className="m"><span className="n">Gallery</span></Link>
                </li>

            </ul>
        </Col>
        <Row className='pt-3'>
            <h1>Events Gallery</h1>
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
    </Container>
    )
}
export default Gallery;
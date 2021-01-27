import React, {useEffect, useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom"
import {Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {logout} from './../../../Actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import {Searchfriend} from '../../../Actions/Friends';
import {acceptinv} from '../../../Actions/events';
import {useHistory} from 'react-router-dom';
import Notification from './Notification';
import Toast from 'react-bootstrap/Toast'

const Header = ({
    auth: {
        user
    },
    logout,
    Searchfriend,
    Friends: {
        users
    },
    events: {
        inv
    },
    acceptinv
}) => {


    const [visible, setvisible] = useState(false);
    const [visible2, setvisible2] = useState(false);
    const [visible3, setvisible3] = useState(false);
    const handleClick2 = e => {
        if (visible === true) {
            setvisible(visible === false);
        }
        setvisible2(visible2 === false ? true : false);

    }
    const handleClick1 = e => {
        if (visible2 === true) {
            setvisible2(visible2 === false);
        }
        setvisible(visible === false ? true : false);
    }
    const handleClick3 = e => {
        setvisible3(visible3 === false ? true : false);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3)
        },
        large: {
            width: theme.spacing(6),
            height: theme.spacing(6)
        }
    }));
    const classes = useStyles();
    const [uid, setText] = useState('');
    const history = useHistory()
    return (

        <div className="header">
            <header className="main-header row  pt-4 pb-5 ">
                <div className="col-sm-2   pi">
                    <a href="/#/dashboard/newsfeed" className="logo flex-center">

                        <svg width="37px" height="39px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="0.15688919" y1="0.84793705" x2="0.70083094" y2="-0.2158695" id="gradient_1">
                                    <stop offset="0" stop-color="#32ABE4"/>
                                    <stop offset="1" stop-color="#0071BC"/>
                                </linearGradient>
                            </defs>
                            <g id="Logomark-01">
                                <path d="M3 1.49998C3 2.10672 2.63447 2.65371 2.07389 2.88584C1.5133 3.11797 0.868085 2.98952 0.439146 2.56039C0.0102067 2.13127 -0.117964 1.48599 0.114411 0.925508C0.346785 0.365026 0.893932 -0.000264348 1.50068 1.43535e-07C1.89843 1.0571e-07 2.27989 0.158054 2.56109 0.439373C2.84229 0.720692 3.00017 1.10222 3 1.49998L3 1.49998Z" transform="translate(22 25)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M2 0.999412C2.00023 1.40397 1.75668 1.76882 1.38296 1.92374C1.00924 2.07867 0.578986 1.99315 0.292918 1.70708C0.00685062 1.42101 -0.0786675 0.990764 0.0762582 0.617043C0.231184 0.243322 0.596027 -0.000231608 1.00059 1.65277e-07C1.55255 1.65277e-07 2 0.447452 2 0.999412Z" transform="translate(18 18)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1Z" transform="translate(17 25)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1.99999 1.00464C1.99743 1.55641 1.54843 2.00184 0.996653 1.99999C0.444876 1.99815 -0.00113105 1.54973 2.15463e-06 0.997946C0.00113536 0.446167 0.448981 -0.000420185 1.00076 2.96684e-07C1.26671 -3.60071e-06 1.52169 0.106014 1.70924 0.294577C1.89679 0.48314 2.00143 0.738689 1.99999 1.00464Z" transform="translate(3 25)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1L2 1Z" transform="translate(10 11)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M2 0.999986C2 1.40451 1.75628 1.76919 1.38251 1.92393C1.00875 2.07866 0.578578 1.99296 0.292645 1.70681C0.00671187 1.42065 -0.0786518 0.990416 0.0763705 0.616772C0.231393 0.243128 0.596261 -0.000312316 1.00079 3.00732e-07C1.26593 2.21437e-07 1.5202 0.10538 1.70761 0.292936C1.89502 0.480492 2.0002 0.734844 2 0.999986Z" transform="translate(19 7)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 3.71688e-15 3 0.671573 3 1.5L3 1.5Z" transform="translate(5 18)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.632608 0 0.759785 0.0526784 0.853553 0.146447C0.947322 0.240215 1 0.367392 1 0.5L1 0.5Z" transform="translate(16 13)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(27 14)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(3 12)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(12 20)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5L1 0.5Z" transform="translate(25 20)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(10 24)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.499993C1 0.702221 0.878181 0.884536 0.691346 0.961926C0.504512 1.03932 0.289456 0.996538 0.146459 0.853541C0.00346218 0.710544 -0.0393151 0.495488 0.0380743 0.308654C0.115464 0.121819 0.297779 0 0.500007 0C0.776146 0 1 0.223854 1 0.499993L1 0.499993Z" transform="translate(25 34)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(26 11)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5L1 0.5Z" transform="translate(9 3)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5L1 0.5Z" transform="translate(34 13)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none"/>
                                <path d="M28.1028 2.04855C27.268 1.42016 26.31 1.06651 25.3127 0.843382C24.5345 0.668829 23.7455 0.542848 22.9584 0.415854C22.135 0.282789 21.3121 0.124933 20.4828 0.0616895C18.5066 -0.084024 16.5429 0.0151421 14.6015 0.501866C12.1339 1.12317 9.94752 2.26409 8.16663 4.18164C7.78352 4.59308 7.43559 5.03706 7.12662 5.50874C3.0252 4.96839 0.344423 4.88136 0.00354933 5.54112C-0.110738 6.23276 2.55066 6.74731 5.7179 8.93756C5.69041 9.06506 5.6654 9.19357 5.64287 9.3231C5.24535 11.5822 5.48933 13.8068 6.07021 15.9945C6.45431 17.4411 6.90748 18.8673 7.29208 20.3133C7.56786 21.3495 7.44116 22.3407 6.77233 23.2069C6.25207 23.8788 5.72884 24.5502 5.19069 25.2038C3.62844 27.0936 3.89875 29.3122 5.33032 31C5.87095 30.575 6.25953 30.025 6.66848 29.4902C7.10078 28.9256 7.5306 28.3549 8.01011 27.8348C8.3485 27.468 8.62626 27.4047 8.89111 27.9587C8.9408 28.0645 9.00391 28.1642 9.06055 28.2664C9.5818 29.2019 10.1344 30.108 11.0298 30.7192C11.2007 30.8361 11.3279 30.871 11.4511 30.6797C11.7776 30.1738 12.1518 29.6901 12.4166 29.1497C12.9498 28.0604 13.0094 26.9139 12.6457 25.7482C12.3351 24.7541 11.8546 23.8666 11.1451 23.1274C10.4494 22.4014 10.2685 21.5403 10.4931 20.5607C10.5751 20.2066 10.6422 19.8428 10.749 19.4937C11.1898 18.0234 11.7051 16.5845 12.4976 15.2721C12.5946 15.1146 12.7189 14.9765 12.8643 14.8643C12.9225 14.8192 13.1038 14.839 13.1441 14.8951C13.5749 15.5023 14.1836 15.7932 14.8559 15.9794C16.8932 16.543 19.1004 16.9326 21.0006 17.8979C21.6013 18.2015 21.9944 18.6533 22.4252 19.1628C22.613 18.1352 22.3914 17.2528 21.7509 16.4636C21.098 15.6637 20.2433 15.0768 19.3886 14.5364C18.8579 14.201 18.3213 13.8685 17.8448 13.4511C17.5074 13.1557 16.6875 12.4423 16.6557 11.9464C16.5886 10.9001 17.0159 10.0213 17.8979 9.43339C18.5797 8.97804 19.3494 8.80804 20.1255 8.65777C21.6441 8.36331 23.1934 8.24947 24.6811 7.77438C26.2851 7.26236 27.6362 6.38049 28.5798 4.89553C29.2705 3.81179 29.1085 2.80495 28.1028 2.04855ZM24.6409 3.82899C24.2533 3.79408 24.0009 3.46673 24.0401 3.05084C24.0794 2.63495 24.3879 2.36933 24.7815 2.41081C25.1293 2.44775 25.4145 2.80444 25.3887 3.17581C25.3629 3.54718 25.0071 3.86238 24.6409 3.82899Z" transform="translate(8 0)" id="Shape" fill="url(#gradient_1)" stroke="none"/>
                                <g id="Group" transform="translate(0 12)" opacity="0.76">
                                    <path d="M0 0C0 0.158234 0.00199377 0.31595 0.00598131 0.473148C0.219813 8.5006 6.67614 14.8282 14.4 14.8282L17.5297 14.8282C25.2556 14.8282 31.7099 8.49852 31.9237 0.473148C31.9277 0.315605 31.9297 0.157889 31.9297 0L0 0Z" transform="translate(0.037383176 12.16192)" id="Path" fill="#00B1E0" fill-rule="evenodd" stroke="none"/>
                                    <path d="M31.9297 1.91747C31.9297 2.97777 24.7821 3.83493 15.9651 3.83493C7.14816 3.83493 0 2.97622 0 1.91747C0 0.858714 7.14766 0 15.9651 0C24.7826 0 31.9297 0.857678 31.9297 1.91747Z" transform="translate(0.037383176 10.244453)" id="Path" fill="#00D4F7" fill-rule="evenodd" stroke="none"/>
                                    <path d="M10.5984 8.64933C10.8247 10.1792 9.86268 10.0615 9.86268 10.0615C7.76922 10.0024 9.12748 7.58384 9.12748 7.58384C10.5421 6.34008 10.2589 5.41347 10.2589 5.41347C10.089 4.11789 9.08162 4.46925 9.08162 4.46925C10.9039 1.17121 8.84436 0 8.84436 0C9.69171 2.0009 7.99701 3.24363 7.99701 3.24363C6.37259 4.25418 5.38318 6.15818 4.91913 7.26305C4.64199 6.27633 3.92374 6.32038 3.92374 6.32038C2.73495 6.37946 2.8476 7.73205 2.8476 7.73205C2.79078 9.90864 0 10.2968 0 10.2968L0 11.3561L13.8233 12.1598L13.8233 11.3561C12.4092 7.94349 10.5984 8.64933 10.5984 8.64933Z" transform="translate(8.068287 0.0020729366)" id="Path" fill="#00D4F7" fill-rule="evenodd" stroke="none"/>
                                </g>
                            </g>
                        </svg>

                    </a>
                </div>
                <form className="col-sm-5 px-0  header__input"
                    onSubmit={
                        e => {
                            e.preventDefault();
                            Searchfriend({uid});
                            setText('')
                        }
                }>
                    <div className="col-sm  header__input">

                        <input type="text" placeholder='Search Fishcomb' aria-label="Search"
                            value={uid}
                            onChange={
                                e => setText(e.target.value)
                            }/>


                        <button className="col-sm-1  header__button"
                            onClick={
                                () => {
                                    history.push('/dashboard/search')
                                }
                        }>

                            <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                <g id="fishcomb-product-icons-14">
                                    <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="col-sm-2"></div>
                <div className="col-sm-3  flex">
                    <div className="col-sm-2 pt-1">
                        <Avatar src={
                                user && user.profile_image
                            }
                            className={
                                classes.large
                            }/>
                    </div>

                    <div className="col-sm-4 pt-3">
                        <Link to={`/dashboard/profile/about`}
                            className='lin'>
                            {
                            user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)
                        }
                            {
                            user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)
                        } </Link>
                    </div>
                    <div className="col-sm-2 pt-3">
                        <Link to={`/dashboard/newsfeed`}
                            className='lin'>Home</Link>
                    </div>
                    <div className='col-sm-4 pt-3 flex'>
                        <div className='col-4 '>
                            <svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/1999/xlink" className="icon"
                                onClick={handleClick2}>
                                <g id="Chat-01">
                                    <path d="M3.19465 20L3.19465 19.7873C3.19465 18.469 3.19465 17.1537 3.19465 15.8354C3.19681 15.7191 3.14436 15.6083 3.05271 15.5358C1.23752 14.0249 0.139704 11.8314 0.0235906 9.48359C-0.193853 6.41255 1.10175 4.04262 3.5027 2.20899C4.93851 1.13877 6.61957 0.438735 8.39519 0.171619C11.0663 -0.328585 13.8275 0.275335 16.0389 1.84346C17.6648 2.91738 18.901 4.47983 19.5664 6.3017C20.0232 7.60583 20.1212 9.00723 19.8503 10.3615C19.1949 13.9358 16.4195 16.7222 12.6021 17.4833C11.5004 17.6972 10.3733 17.7517 9.2559 17.645C8.77269 17.6031 8.2925 17.5522 7.80627 17.5132C7.72623 17.51 7.64685 17.5287 7.57675 17.5671L3.34867 19.9191L3.19465 20ZM5.18487 10.0079C5.81958 9.99147 6.32296 9.47173 6.31419 8.84189C6.30542 8.21206 5.78775 7.70631 5.15283 7.70728C4.5179 7.70824 4.00179 8.21555 3.99496 8.84541C3.99736 9.15611 4.12407 9.45314 4.34722 9.67116C4.57037 9.88917 4.87169 10.0103 5.18487 10.0079L5.18487 10.0079ZM8.80893 8.8514C8.78673 9.34044 9.06656 9.79371 9.51575 9.99632C9.96495 10.1989 10.4932 10.1101 10.85 9.77204C11.2069 9.43395 11.3206 8.91453 11.1373 8.46004C10.9539 8.00555 10.5104 7.70738 10.017 7.70688C9.70169 7.6964 9.39531 7.81149 9.1661 8.02649C8.9369 8.2415 8.80394 8.53854 8.79685 8.8514L8.80893 8.8514ZM16.0027 8.8514C16.0224 8.36279 15.7409 7.91129 15.2914 7.7106C14.842 7.5099 14.3146 7.60027 13.9591 7.93892C13.6035 8.27757 13.491 8.79659 13.6747 9.25033C13.8585 9.70407 14.3018 10.0015 14.7947 10.0019C15.4441 10.0136 15.9804 9.5016 15.9936 8.8574L16.0027 8.8514Z" id="Shape" stroke="none"/>
                                    <path d="M1.91667 3.99955C0.823442 3.95395 -0.0302127 3.038 0.000819927 1.94391C0.0318526 0.849811 0.936051 -0.0162416 2.03011 0.000231138C3.12416 0.0167039 4.0019 0.909586 4 2.00412C3.97439 3.13012 3.04235 4.02283 1.91667 3.99955Z" transform="translate(3 7)" id="Path" fill-rule="evenodd" stroke="none"/>
                                    <path d="M0.00123292 2.06962C-0.027298 1.2551 0.441473 0.504778 1.18609 0.173109C1.93072 -0.158559 2.80216 -0.00519193 3.38875 0.560759C3.97534 1.12671 4.15967 1.99197 3.85467 2.74779C3.54966 3.50362 2.81637 3.99872 2.0012 3.99922C1.47849 4.01402 0.971842 3.81775 0.595558 3.45471C0.219275 3.09166 0.00505619 2.59242 0.00123292 2.06962Z" transform="translate(8 7)" id="Path" fill-rule="evenodd" stroke="none"/>
                                    <path d="M3.99839 1.92025C4.03103 2.73555 3.565 3.4889 2.82084 3.82378C2.07668 4.15865 1.20368 4.00788 0.614992 3.44281C0.0263038 2.87773 -0.159983 2.01172 0.144295 1.25461C0.448573 0.497505 1.18238 0.00117858 1.99843 0.000525566C2.51865 -0.0115316 3.02222 0.184286 3.39761 0.54461C3.77299 0.904935 3.98921 1.40003 3.99839 1.92025L3.99839 1.92025Z" transform="translate(13 7)" id="Path" fill-rule="evenodd" stroke="none"/>
                                </g>
                            </svg>
                            <div aria-live="polite" aria-atomic="true"
                                style={
                                    {
                                        position: 'relative',
                                        minHeight: '100px',
                                        display: visible2 ? 'block' : 'none'
                                    }
                            }>
                                <Toast style={
                                    {
                                        position: 'fixed',
                                        top: 100,
                                        right: 50,
                                        borderRadius: '0'
                                    }
                                }>
                                    <Toast.Header>
                                        <strong className="mr-auto">Events Invitations
                                        </strong>
                                        <small>just now</small>
                                    </Toast.Header>
                                    {
                                    inv && inv.map(e => <div key={
                                        e.id
                                    }>
                                        <Toast.Body>
                                            <div className='col-md-12'>
                                                <b>Name:
                                                </b>
                                                {
                                                e.name
                                            }</div>

                                            <div className='col-md-12'>
                                                <b>Location:
                                                </b>
                                                {
                                                e.location
                                            }</div>

                                            <div className='col-md-12'>
                                                <b>Date :
                                                </b>
                                                {
                                                e.date
                                            }</div>

                                            <button onClick= {x =>
                                                                                                                                 acceptinv(e.id)} id='invitaion'>&#10004;</button>

                                        </Toast.Body>
                                        <hr/>
                                    </div>)
                                } </Toast>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <svg width="21px" height="22px" version="1.1" xmlns="http://www.w3.org/2000/svg" className="icon"
                                onClick={handleClick1}>
                                <g id="63-631368_community-transition-black-chat-icon-png-transparent-png-02">
                                    <path d="M8.39318 3.743C7.53909 2.75915 7.70804 1.36059 8.77815 0.556153C9.76258 -0.17984 11.2073 -0.185995 12.1998 0.541574C13.2777 1.34993 13.4509 2.75664 12.5947 3.74884L12.8336 3.81881C15.7375 4.76058 17.4567 6.56831 17.898 9.26532C18.21 11.1664 18.4456 13.0761 18.7377 14.9801C18.8743 15.9165 19.3749 16.7827 20.1548 17.4322C20.3406 17.5925 20.5364 17.7442 20.7289 17.9016C20.9746 18.0691 21.0652 18.3588 20.9513 18.613C20.8419 18.8629 20.5581 19.0196 20.2544 18.9979L0.746799 18.9979C0.443889 19.0201 0.160414 18.8647 0.0498637 18.6159C-0.0624534 18.3679 0.0191885 18.0845 0.252307 17.9133C0.627315 17.6111 0.982966 17.2908 1.31762 16.954C1.88957 16.2993 2.23518 15.5139 2.31324 14.6914C2.57874 12.7933 2.79114 10.8835 3.1562 8.99708C3.6507 6.42836 5.37976 4.71393 8.1675 3.82173L8.36994 3.75758C8.36994 3.75758 8.38322 3.74884 8.39318 3.743ZM11.2572 2.34056C11.281 2.09295 11.1464 1.85421 10.9077 1.7209C10.669 1.58758 10.3658 1.58176 10.1207 1.70577C9.87557 1.82978 9.72913 2.06311 9.74058 2.3114C9.71678 2.55901 9.85146 2.79775 10.0902 2.93106C10.3288 3.06437 10.6321 3.0702 10.8772 2.94619C11.1223 2.82218 11.2687 2.58884 11.2572 2.34056L11.2572 2.34056Z" id="Shape" stroke="none"/>
                                    <path d="M0.0696772 0L6.88812 0C7.25167 1.8313 6.69827 4.41783 5.67631 5.74118C4.52034 7.26307 2.91116 7.41937 1.6555 6.13173C0.399847 4.84408 -0.231586 2.3901 0.0777559 0L0.0696772 0Z" transform="translate(7 15)" id="Path" fill-rule="evenodd" stroke="none"/>
                                </g>
                            </svg>
                            <div aria-live="polite" aria-atomic="true"
                                style={
                                    {
                                        position: 'relative',
                                        minHeight: '100px',
                                        display: visible ? 'block' : 'none'
                                    }
                            }>
                                <Toast style={
                                    {
                                        position: 'fixed',
                                        top: 140,
                                        right: 40,
                                        width: '425px',
                                        height: 'auto',
                                        borderRadius: '0'

                                    }
                                }>
                                    <Toast.Body>
                                        <div className='row pt-3 pb-5 pl-3 '>
                                            <h5>
                                                <b>Notification</b>
                                            </h5>
                                        </div>
                                        {
                                        users && users.map(users => (
                                            <Notification className='notification_row'
                                                key={
                                                    users.id
                                                }
                                                users={users}/>
                                        ))
                                    } </Toast.Body>
                                </Toast>
                            </div>
                        </div>
                        <div className='col-sm-4 '>
                            <svg width="14px" height="13px" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick3}
                                className="icon">
                                <path d="M6.5 0L13 12L0 12L6.5 0Z" transform="matrix(-1 -8.742278E-08 8.742278E-08 -1 13.5 12.5)" id="Triangle" fill-rule="evenodd" stroke="none"/>
                            </svg>
                            <div aria-live="polite" aria-atomic="true"
                                style={
                                    {
                                        position: 'relative',
                                        minHeight: '100px',
                                        display: visible3 ? 'block' : 'none'
                                    }
                            }>
                                <Toast style={
                                    {
                                        position: 'fixed',
                                        top: 140,
                                        right: 40,
                                        width: '200px',
                                        height: ' 130px',
                                        borderRadius: '0'

                                    }
                                }>
                                    <Toast.Body>

                                        <MenuItem>Settings</MenuItem>
                                        <MenuItem>Password</MenuItem>
                                        <Link to='/home'
                                            onClick={logout}
                                            className='rea'>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Link>
                                    </Toast.Body>
                                </Toast>

                            </div>


                        </div>


                    </div>

                </div>
                {/* Logo */} </header>
        </div>
    )


}
 Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    Friends: PropTypes.object.isRequired,
    Searchfriend: PropTypes.func.isRequired,
    events: PropTypes.object.isRequired,
    acceptinv: PropTypes.func.isRequired

};
const mapStateToProps = state => ({auth: state.auth, Friends: state.Friends, events: state.events})
export default connect(mapStateToProps, {logout, Searchfriend, acceptinv})(Header);

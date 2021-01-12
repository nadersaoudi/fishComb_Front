import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import "./Publication.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ReactTinyLink } from "react-tiny-link";
import Moment from "react-moment";
import {
  getPosts,
  addLike,
  addComment,
} from "../../../../Actions/Post";
import { deletePost } from "../../../../Actions/Post";
import SingleComm from "./SingleComm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Publication = ({
  auth: { user },
  posts,
  deletePost,
  addLike,
  addComment
}) => {


  const [hidden, setHidden] = useState(true);
  const [body, setText] = useState("");


  const onclick = () => {
    setHidden(false);
  }

  const addcomment = async (id, body) => {
    addComment(id, body);
    
  };
  /******************************/
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  /*****************************/
  return (
    <div className="row pb-5">
      <div className="card">
        <div className="form-pu">
          <form id="lo">
            <div className="row" id="pub-top1">
              <div className="col-sm-1">
                <Avatar
                  src={posts && posts.user.profile_image}
                />
              </div>
              <div className="col-sm-10">
                <span className="nameuser">
               {posts && posts.user.first_name}{posts && posts.user.last_name}
                </span>
                <div className="row">
                  <div className="col-sm-8 datepost">
                    Posted on{" "}
                    <Moment
                      date={posts && posts.created_at}
                      format="YYYY-MM-DD HH:mm"
                      trim
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-1" id="pnt">
                <div className={classes.root}>
                  <div>
                    <Button
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      <svg width="26px" height="7px" version="1.1" xmlns="http://www.w3.org/1999/xlink" >
                        <g id="Group" transform="translate(0.5 0.5)">
                          <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" id="Oval" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                          <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(20 0)" id="Oval-Copy" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                          <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(10 0)" id="Oval-Copy-2" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                        </g>
                      </svg>
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={(e) => deletePost(posts.id)}>Delete My Post</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </div>
              </div>

            </div>
            <div className="row pt-2" id="pub-top11">
              <div className="col-sm-1"></div>
              <div className="row pt-5">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">{posts && posts.description}</div>
              </div>
              <div className="row pt-3"></div>
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                {posts && posts.link && (
                  <ReactTinyLink
                    cardSize="large"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    url={posts.link}
                  />
                )}
              </div>
              <div className="col-1"></div>
            </div>
          </form>
          <div className="row"></div>
          <div className="row pt-2 pb-4">
            <div className="col-sm-2">
              <div className="row" id="lcp">
                <div className='col-sm-1'></div>
                <div className="col-sm-4">
                  <button className="But__Like" onClick={(e) => addLike(posts.id)}>
                    <svg
                      width="25px"
                      height="21px"
                      version="1.1"
                      xmlns="http://www.w3.org/1999/xlink"
                      id="like"
                    >
                      <g id="like">
                        <g id="like">
                          <path
                            d="M14.6825 0L15.0357 0.09375C15.6746 0.255 16.2262 0.52125 16.4365 1.17C16.7857 2.22375 17.2778 3.25875 17.4325 4.335C17.5556 5.175 17.2619 6.06375 17.1468 6.93C17.1151 7.18875 17.0595 7.44375 17.004 7.755C17.1944 7.755 17.3571 7.755 17.5159 7.755C19.1706 7.755 20.8254 7.755 22.4802 7.755C23.2738 7.755 24.004 7.905 24.4167 8.62875C24.8684 9.38962 24.7982 10.3315 24.2381 11.025C24.0862 11.2037 24.0482 11.4461 24.1389 11.6588C24.3803 12.3357 24.2397 13.0822 23.7659 13.6388C23.6071 13.8142 23.5657 14.059 23.6587 14.2725C23.8744 14.9724 23.7273 15.7274 23.2619 16.3088C23.1672 16.4326 23.1209 16.5837 23.131 16.7363C23.5278 18.6113 22.5516 19.8675 20.5198 19.9838C19.75 20.025 18.9762 19.9838 18.2024 19.9838C15.8214 19.9838 13.4405 19.9838 11.0595 19.9838C10.3629 20.0241 9.67001 19.8604 9.0754 19.515C8.91794 19.4391 8.75317 19.3776 8.58333 19.3313C8.58333 19.4625 8.55159 19.545 8.54365 19.6275C8.55353 19.9117 8.43503 20.1865 8.21773 20.3833C8.00043 20.5801 7.70485 20.6802 7.40476 20.6588C5.32143 20.6775 3.23016 20.6775 1.14683 20.6588C0.396825 20.6588 0 20.25 0 19.5188C0 16.5363 0 13.5575 0 10.5825C0 9.72 0.416667 9.31125 1.3254 9.3075C3.57937 9.3075 5.8373 9.3075 8.09524 9.3075C8.14117 9.29978 8.18819 9.29978 8.23413 9.3075C8.96429 9.6 9.32143 9.135 9.63095 8.66625C10.5476 7.26375 11.4365 5.87625 12.3016 4.47375C12.3866 4.32016 12.4277 4.14822 12.4206 3.975C12.4206 3.27375 12.3889 2.5725 12.369 1.87125C12.3373 0.8325 12.7262 0.34875 13.8016 0.09375C13.9008 0.0675 14 0.03375 14.1032 1.33227e-15L14.6825 0ZM15.7381 8.76375C15.9048 7.8675 16.0635 7.02375 16.2143 6.17625C16.381 5.2425 16.6111 4.30125 16.2143 3.37125C15.9881 2.83125 15.7937 2.27625 15.5556 1.74C15.4414 1.43298 15.1948 1.18619 14.8769 1.06103C14.5591 0.935878 14.1999 0.944135 13.8889 1.08375C13.5616 1.15646 13.3499 1.4565 13.4048 1.77C13.461 2.4837 13.4755 3.19978 13.4484 3.915C13.455 4.2949 13.368 4.67103 13.1944 5.01375C12.504 6.1875 11.75 7.32375 11.0317 8.47875C10.4539 9.46974 9.5914 10.2861 8.54365 10.8338C8.30415 10.9429 8.16519 11.1844 8.19841 11.4338C8.19841 13.5638 8.19841 15.6937 8.19841 17.8275C8.19841 17.955 8.19841 18.0863 8.19841 18.1237C8.65873 18.3113 9.05952 18.4725 9.46429 18.63C9.7945 18.8123 10.1557 18.9392 10.5317 19.005C13.8056 19.0313 17.0833 19.005 20.3611 19.005C20.8972 19.0235 21.4109 18.8009 21.746 18.405C21.9591 18.1897 22.0702 17.9018 22.0537 17.6074C22.0372 17.3131 21.8946 17.0378 21.6587 16.845C21.5397 16.77 21.4365 16.6762 21.3254 16.5938C21.4484 16.5225 21.5675 16.4438 21.6944 16.3837C22.2198 16.1749 22.5801 15.7089 22.631 15.1725C22.6921 14.6807 22.349 14.2252 21.8373 14.1188C21.8056 14.1188 21.7897 14.0512 21.7222 13.9462C22.3294 13.7325 22.881 13.4362 23.0595 12.8212C23.2619 12.1275 22.8968 11.6962 22.1667 11.4188C22.303 11.3097 22.4554 11.22 22.619 11.1525C23.3186 10.8831 23.7202 10.1851 23.5794 9.48375C23.4841 8.96625 23.0873 8.76375 22.2222 8.76375L15.7381 8.76375ZM1.05556 10.3125L1.05556 19.6388L7.24603 19.6388L7.24603 10.3088L1.05556 10.3125Z"
                            transform="translate(0 0.23625)"
                            id="like"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="col-sm-3">
                  {(<div className="col-sm-4 datepost">{posts.likes.length} </div>)}
                </div>

              </div>
            </div>
            <div className="col-sm-2">
              <div className="row" id="lcp">
                <div className="col-sm-4">
                  <button className="ButCom" onClick={onclick}>
                    <svg
                      width="23px"
                      height="21px"
                      version="1.1"
                      xmlns="http://www.w3.org/1999/xlink"
                    >
                      <g id="63-631368_community-transition-black-chat-icon-png-transparent-png-04">
                        <path
                          d="M5.60959 21C5.72062 20.206 5.79675 19.5096 5.9268 18.8262C6.041 18.2274 5.90143 17.8857 5.31775 17.5831C3.22097 16.4995 1.57462 14.9179 0.635669 12.6693C-0.864755 9.0897 0.343832 5.1131 3.70313 2.52602C8.14731 -0.903881 15.1038 -0.835543 19.4972 2.6985C24.2142 6.47009 24.1635 12.8711 19.3672 16.5353C16.6423 18.5984 13.5399 19.3143 10.187 19.0475C9.81394 19.0213 9.44032 19.0895 9.09895 19.246C7.9538 19.7829 6.83721 20.3785 5.60959 21ZM6.83721 19.1093C7.63976 18.7091 8.30908 18.3218 9.01647 18.0354C9.43538 17.8592 9.88711 17.7803 10.3393 17.8044C13.1181 18.0354 15.716 17.479 18.0571 15.9267C22.5139 12.9589 23.0564 7.57976 19.2688 4.11081C15.2878 0.456366 8.2964 0.296911 4.15675 3.75936C0.216946 7.0591 0.245495 12.1974 4.26777 15.3898C5.12425 16.0699 6.11713 16.5613 7.07829 17.1601L6.83721 19.1093Z"
                          id="Shape"
                          fill="#000000"
                          stroke="none"
                        />
                      </g>
                    </svg>
                  </button>


                </div>

                <div className="col-sm-3 datepost">{posts.comments.length} </div>
              </div>
            </div>
           
          </div>


          <div className='row pt-2' hidden={hidden}>
            <div ><hr /></div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addcomment(posts.id, { body });
                setText("");
              }}

            >
              <div className="row pt-1" >
                <div className='col-sm-1'></div>
                <div className="col-sm-1">
                  <Avatar
                    src={user && user.profile_image}
                  />
                </div>

                <div className="col-sm-9 pp" >
                  <input
                    className=" col-sm-11 comm"
                    type="text"
                    value={body}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button type="submit" className="b">
                    add
                </button>
                </div>
              </div>
            </form>
            <div className="row pt-1">
              <div className='col-sm-1'></div>
              <div className='col-sm-11'>
                {posts && posts.comments.map(comments => 
                  (
                    <SingleComm key={comments.id} comments={comments} />
                  )
                )}
              </div>


            </div>


          </div>
        </div></div></div>
  );
};

Publication.prototype = {
  auth: PropTypes.object.isRequired,
  Post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  Post: state.Post,
});
export default connect(mapStateToProps, { deletePost, addComment, getPosts, addLike })(
  Publication
);

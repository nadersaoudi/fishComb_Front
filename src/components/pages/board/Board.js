import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css';

const Board =() => {
    return (
        <div className='contaniner pt-4'>
        <div className='row'>
         <div className='col-2'></div>
         <div className='col-9 pt-2'>
             
                 <Link className='col-2'>Latest</Link>
                 <Link className='col-2'>New</Link>
                <div className='float-right pb-4 '>
                    <button classname="col-2" id='btn__ask' >Ask qestion</button>
                </div>
         </div>
        </div>
        <div className='row'>
            <div className='col-2 pt-4'>
                <input className='col-9  search'type='text'></input>
                <button className='col-3' id="btn">
                <svg width="19px" height="19px"  version="1.1" xmlns="http://www.w3.org/1999/xlink">
                       <g id="fishcomb-product-icons-14">
              <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
            </g>
          </svg>
                </button>
            </div>
            <div className='col-9'>
                <div className='flex'>
                <div className='col-6 pl-0'>qestions</div>
                <div className='col-3'>Views</div>
                <div className='col-2'>Last Post</div>
                </div>
                <div className='row'>
                    <div className='card'>

                        <div class="col-sm-6">
                        One of three columns
                        </div>
                        <div class="col-sm-3">
                        12547
                        </div>
                        <div class="col-sm-3">
                        One of three columns
                        </div>
                    </div>    
                    <div className='card'>

                    <div class="col-sm-6">
                    One of three columns
                    </div>
                    <div class="col-sm-3">
                    12547
                    </div>
                    <div class="col-sm-3">
                    One of three columns
                    </div>
                    </div>     <div className='card'>

                    <div class="col-sm-6">
                    One of three columns
                    </div>
                    <div class="col-sm-3">
                    12547
                    </div>
                    <div class="col-sm-3">
                    One of three columns
                    </div>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Board;
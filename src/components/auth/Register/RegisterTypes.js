import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const RegisterTypes = () => {
    return (
       <Fragment>
                <Button>
                    <NavLink to={'/ministryregister'}>
                        Register ministry
                    </NavLink>
                </Button>
                <Button>
                    <NavLink to={'/userregister'}>
                        Register User
                    </NavLink>
                </Button>
       </Fragment>
    )
}

export default RegisterTypes

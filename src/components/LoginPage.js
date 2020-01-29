import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout" >
        <div className="box-layout__box">
            <h1 className=".box-layout__title" >Expense App</h1>
            <p>Welcome to Expense Viewer</p>
            <button className="button" onClick={startLogin} >Google Login</button>
        </div> 
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
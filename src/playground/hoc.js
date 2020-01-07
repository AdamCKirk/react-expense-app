// Higher Order Component (HOC) - A component (HOC) that renders another component
// To reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const Details = (props) => (
    <div>
        <h1>Details</h1>
        <p>There are the users details: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? <WrappedComponent {...props}/> : <p>This is not Authenticated</p> }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Details);


ReactDOM.render(<AdminInfo isAdmin={true} info="These are details" />, document.getElementById('app'));
//ReactDOM.render(<AuthInfo isAuth={true} info="These are details" />, document.getElementById('app'));
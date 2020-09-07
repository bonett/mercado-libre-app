import React from 'react';
import { withRouter } from 'react-router-dom';

const NavComponent = (props) => {
    const { history } = props;

    return (
        <div>
            <button type="button" onClick={() => history.push('/items')}>Go to </button>
        </div>
    );
};

export default withRouter(NavComponent);

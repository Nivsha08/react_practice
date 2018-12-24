import React from 'react';
import { PageState } from "../../containers/App";

const statusBar = ( props ) => {
    return (
        <div>
            <PageState.Consumer>
                { v => <h3>Page Status: {v}</h3> }
            </PageState.Consumer>
            <button onClick={props.click}>Toggle page status!</button>
        </div>
    );
};

export default statusBar;
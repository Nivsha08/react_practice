import React, { Component } from 'react';
import Sidebar from "../../components/Navigation/Sidebar/Sidebar"
import TopBar from "../../components/Navigation/Topbar";
import "./layout.scss"

class layout extends Component {
    state = {
        isSidebarVisible: false
    };
    openSidebar = () => {
        this.setState({ isSidebarVisible: true });
    };
    closeSidebar = () => {
        this.setState({ isSidebarVisible: false });
    };

    render() {
        return (
            <div className="page-wrapper">
                <TopBar visible={this.state.isSidebarVisible}
                        open={this.openSidebar}
                        close={this.closeSidebar} />
                <Sidebar show={this.state.isSidebarVisible}
                         open={this.openSidebar}
                         close={this.closeSidebar} />
                { this.props.children }
            </div>
        );
    }
}

export default layout;
import React from 'react';

import NavToggle from './NavToggle';

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState(prevState => ({
            showList: !prevState.showList,
        }));
    }

    render() {

        const list = !this.state.showList || !Array.isArray(this.props.linkList) ? null : this.props.linkList.map(item => {

        });

        return (
            <div className="m_navList">
                <NavToggle onToggle={this.onToggle} isShow={this.state.showList} />
                {list}
            </div>
        );
    }
}

export default NavList;

import React from 'react';

class NavToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(prevState => ({
            isShow: !prevState.isShow,
        }));
    }

    render() {
        const toggleClass = this.props.isShow ? 'showClose' : '';

        return (
            <div className={`m_navToggle ${toggleClass}`} onClick={this.props.onToggle}>
                <span className="firstLine"></span>
                <span className="secondLine"></span>
                <span className="thirdLine"></span>
            </div>
        );
    }
}

export default NavToggle;

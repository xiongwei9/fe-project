import React from 'react';
import Axios from 'axios';
import { hot } from 'react-hot-loader/root';

import '@src/css/base.scss';
import './waterfall.scss';

const Item = (props) => {
    return (
        <div className="item" style={{ height: props.height }}>
            <div className="item-content">{props.height}</div>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    render() {
        const items = [];
        for (let {key, value} of this.state.items) {
            items.push(<Item key={key} height={value} />);
        }
        return (
            <div className="masonry">
                {items}
            </div>
        );
    }

    async componentDidMount() {
        const result = await Axios.get('/static/masonryItems.json');
        this.setState({ items: result['data'] });
    }
}

export default hot(App);

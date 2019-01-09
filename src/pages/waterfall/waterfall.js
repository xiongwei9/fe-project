import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import '@babel/polyfill';
// import { hot } from 'react-hot-loader/root';

import '@css/common/base.scss';
import '@css/waterfall/waterfall.scss';

const Item = (props) => {
    return (
        <div className="item" style={{ height: props.height }}>
            <div className="item-content">{props.height}</div>
        </div>
    );
};

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

// export default hot(App);
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

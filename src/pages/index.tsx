import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, observer, inject } from 'mobx-react';

import { Form } from '../components/tsIndex/Form.tsx';
import UserStore from '../components/tsIndex/store/User.ts';


const $app: Element = document.createElement('div');
$app.setAttribute('id', 'root');
document.body.appendChild($app);

interface AppStoreProps {
    user?: UserStore;
}
const rootStore: AppStoreProps = {
    user: new UserStore(),
};

// problem: 这里inject的值怎么没有 typescript 的智能提示
const App = inject('user')(observer(({user}: {user?: UserStore}) => {
    const clickEvent = () => {
        user.addAge();
        user.setName('oh, you are ' + user.age);
    };
    return (
        <div className="app">
            <Form name="xiongwei" age={1}></Form>
            <div>this is data from user store: {user.name}</div>
            <button onClick={clickEvent}>set user store</button>
        </div>
    );
}));


ReactDOM.render(
    <Provider {...rootStore}>
        <App />
    </Provider>,
    $app
);

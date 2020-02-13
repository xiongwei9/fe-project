import React from 'react';
import ReactDOM from 'react-dom';
import * as Mobx from 'mobx';
import { observer } from 'mobx-react';

const { observable, action, autorun, computed } = Mobx;


let appState = observable({
    timer: 0,
    numbers: [],
});

appState.resetTimer = action(() => {
    appState.numbers.push(appState.timer);
    appState.timer = 0;
    console.log('appState.numbers: ', appState.numbers.toJS());
});

setInterval(action(() => {
    appState.timer += 1;
}), 1000);

const len = computed(() => appState.numbers.length );
autorun(() => {
    console.log('appState.timer changed:', appState.timer);
});
autorun(() => {
    console.log('appState.numbers.length changed: ', len.get());
});

const App = observer(({ appState }) => (
    <div>
        <h1>Time passed: {appState.timer}</h1>
        <button onClick={appState.resetTimer}>reset timer</button>
    </div>
));


ReactDOM.render(
    <App appState={appState} />,
    document.getElementById('root')
);

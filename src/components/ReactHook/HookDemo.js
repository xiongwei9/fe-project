import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

const Api = function() {
  const fns = [];
  let mState = false;

  this.register = (fn) => {
    fns.push(fn);
  };
  this.delete = (fn) => {
    console.log('delete function', fns.length);
    for (const mFn of fns) {
      if (mFn === fn) {
        const idx = fns.indexOf(fn);
        fns.splice(idx, 1);
      }
    }
  };
  this.setState = state => {
    mState = state;
    for (const fn of fns) {
      fn(mState);
    }
  };
};

window.api = new Api();

function useStatus() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    const handleState = (state) => {
      setIsOnline(state);
    };

    window.api.register(handleState);

    return () => {
      window.api.delete(handleState);
    };
  });

  return isOnline;
}

// 每次组件更新的时候，函数组件都会重新执行一遍，但是不意味着组件卸载重装
const Component = () => {
  const isOnline = useStatus();

  useEffect(() => {

    return () => {
      // 组件更新／卸截时，这个都会被调用
      console.log('clean effect');
    };
  }, []);

  return (
    <>
      <p>{isOnline ? 'online' : 'offline'}</p>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'xiongwei',
    age: 1,
  });

  const isOnline = useStatus();

  useEffect(() => {
    // document.title = `you clicked ${count} times`;
    console.log('useEffect father');

    return function cleanup() {
      console.log('clean father');
    };
  });

  return (
    <div>
      <p>times: {count}</p>
      {/* <p>name: {user.name}    age: {user.age}</p> */}
      <button onClick={() => {setCount(count + 1); setUser({...user, name: user.name + count});}}>Click</button>
      <p>name: {isOnline ? 'xiongwei' : 'nobody'}</p>
      <div>
        <button onClick={() => setUser({ ...user, name: user.name + count })}>change</button>
        <Component name={user.name} />
      </div>
    </div>
  );
};

export default hot(App);
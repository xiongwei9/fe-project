import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

// 每次组件更新的时候，函数组件都会重新执行一遍，但是不意思着组件卸载重装
const Component = props => {
  console.log('--------> render child');
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('useEffect child');

    return () => {
      // 组件更新／卸截时，这个都会被调用
      console.log('clean effect');
    };
  }, []);

  return (
    <>
      <span onClick={() => setNum(num + 1)}>{num}</span>
      <span>{props.name}</span>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'xiongwei',
    age: 1,
  });

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

      <div>
        <button onClick={() => setUser({ ...user, name: user.name + count })}>change</button>
        <Component name={user.name} />
      </div>
    </div>
  );
};

export default hot(App);
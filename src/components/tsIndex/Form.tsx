import * as React from 'react';

const { useState } = React;

interface FormProps {
    name: string;
    age: number;
}

const Form = (props: FormProps) => {
    const [count, setCount]: [number, (count: number) => void] = useState(0);

    return (
        <div>
            <input type="text" value={props.name} disabled />
            <br/>
            <input type="text" value={props.age} disabled />
            <br/>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>
        </div>
    );
};

export {
    FormProps,
    Form,
}

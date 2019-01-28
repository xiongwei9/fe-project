console.log('hello ts');


interface ObjValue {
    label: string;
    size: number;
    color?: string;
}

function print(obj: ObjValue): void {
    console.log(obj.label);
}

let myObj = {
    size: 10,
    label: 'xxx',
    colour: 'black',
};

print(myObj);

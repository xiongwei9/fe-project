import { observable, action } from 'mobx';

class User {
    @observable
    name: string;

    @observable
    age: number;

    constructor(name = '', age = 0) {
        this.name = name;
        this.age = age;
    }

    @action
    setName(name: string) {
        this.name = name;
    }
    @action
    addAge(growth = 1) {
        this.age += growth;
    }
}

export default User;

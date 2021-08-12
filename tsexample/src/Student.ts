import Course from './Course';

@Course({
    name: "Angular 12"
})
export default class Student {
    constructor(private firstName:string) {}
    getFirstName(): string {
        return this.firstName;
    }
}


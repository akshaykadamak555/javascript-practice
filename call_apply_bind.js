var person1 = { firstName: 'Akshay', lastName: 'Kadam'};
var person2 = { firstName: 'prasad', lastName: 'patil'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName); 
}

const call = say.call(person1, 'Hello');
const apply = say.apply(person1, ['Hello']);
const bind = say.bind(person1);
bind('hello');
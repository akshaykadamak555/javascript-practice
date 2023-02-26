function greet() {
    let name = 'Akshay';
    function displayName() {
        return 'Hi' + ' ' + name;
    }

    return displayName;
}

const g1 = greet();
console.log(g1);
console.log(g1());
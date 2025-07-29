console.log("Homework: if-else conditions");

let testValues =[1, 0, -3];

console.log("=== Task 1: a == 0 ===");
testValues.forEach(a=> {
    if (a === 0) {
        console.log(`a = ${a} → ok`);
    } else {
        console.log(`a = ${a}, → notOK`);
    }
});

// You'll continue like this for each condition
//Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("===Task 2: a > 0 === ");
testValues.forEach(a => {
    if (a > 0) {
        console.log(`a = ${a} → ok`);
    } else {
        console.log(`a = ${a} → notOK`);
    }
});
//3. If a is less than zero, output 'Correct', else 'Incorrect'.Check with a = 1, 0, -3.

console.log("===Task 3: a < 0 === ");
testValues.forEach(a => {
    if (a < 0) {
        console.log(`a =${a} → ok`);
    } else {
        console.log(`a =${a} → notOK`);
    }
});
// If a is greater than or equal to zero, output 'Correct', else 'Incorrect'.Check with a = 1, 0, -3.

console.log("===Task 4: a >= 0 === ");
testValues.forEach (a => {
    if (a>= 0) {
        console.log(`a = ${a} → ok`);
    } else {
        console.log(`a = ${a} → notOK`);
    }
});
//5. If a is less than or equal to zero, output 'Correct', else 'Incorrect'.Check with a = 1, 0, -3.

console.log("===Task 5: a <=0 ===");
testValues.forEach (a => {
    if (a <= 0) {
        console.log(`a = ${a} → ok`);
    } else {
        console.log(`a = ${a} → notOK`);
    }
});

// If a is not equal to zero, output 'Correct', else 'Incorrect'.Test with a = 1, 0, -3.

console.log("===Task 6: a != 0 ===");
testValues.forEach (a =>{
    if (a != 0) {
        console.log(`a = ${a} → ok`);
    } else {
        console.log (`a =${a} → notOK`);
    }
});

//If a equals 'test', output 'Correct', else 'Incorrect'.Test with a = 'test', 'тест', 3.

testValues = [ 'test', 'тест', 3];

console.log("===Task 7: a == 'test' ===");
testValues.forEach (a => {
    if (a == 'test') {
        console.log(`a = ${a} → Correct`)
    } else {
        console.log(`a =${a} → Incorrect`)
    }
});

// If a equals '1' by value and type, output 'Correct', else 'Incorrect'.Test with a = '1', 1, 3.

testValues =['1',1,3];

console.log("=== Task 8: a == 1 ===");
testValues.forEach (a=> {
    if (a== '1') {
        console.log(`a= ${a}  → Correct `);
    } else {
        console.log(`a = ${a} → Incorrect`);
    }
});

//Task updated
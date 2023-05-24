let user = 'John Doe';
console.log(user);

const student = 'Natali';
console.log(student);

user = student;
console.log(user); //Natali

let test = 1;
test +=1;
test = test + '1';
console.log(test); // 21

test = test - 1;
console.log(test); // 20
console.log(typeof test); // number

test = true;
console.log(typeof test);

let array = [2, 3, 5, 8];
let str = 1;
for (let i = 0; i < array.length; ++i) {
  str *= array[i];
}
console.log(str);

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let a = 0; a < arr.length; a++) {
  if (arr[a] < 10 && arr[a] > 5) {
    console.log(arr[a]);
  }
}

let total = [2, 5, 8, 15, 0, 6, 20, 3];
for (let m = 0; m < total.length; m++) {
  if ((total[m] % 2) === 0) {
    console.log(total[m]);
  }
}

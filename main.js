let user = 'John Doe';
console.log(user);

const student = 'Natali';
console.log(student);

user = student;
console.log(user); //Natali

let test = 1;
test += 1;
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

//lesson-3

function palidrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j])
      return false;
  }
  return true;
}
console.log(palidrome('шалаш'));

const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(133, 10));

const max = (a, y) => {
  if (a > y) {
    return a;
  } else {
    return y;
  }
}
console.log(max(-6, 0));

let set = [10, 5, 20, 13, 40, 55, 67, 80, 99, 100];
let Zero = (number) => String(number).replaceAll('0', 'zero');
console.log(Zero(set));

//lesson-4

function sum(a) {
  let sum1 = a;
  function count(b) {
    return sum1 += b;
  }
  return count;
}
console.log(sum(5)(2));


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const paragraphs = document.querySelectorAll('p'); 

paragraphs.forEach((p) => {
  let count = 0;
  p.addEventListener('click', () => {
    p.style.color = colors[count % colors.length];
    count++;
  });
})
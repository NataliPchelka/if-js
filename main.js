/* eslint-disable no-prototype-builtins */
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
  if (total[m] % 2 === 0) {
    console.log(total[m]);
  }
}

//lesson-3

function palidrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) return false;
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
};
console.log(min(133, 10));

const max = (a, y) => {
  if (a > y) {
    return a;
  } else {
    return y;
  }
};
console.log(max(-6, 0));

let set = [10, 5, 20, 13, 40, 55, 67, 80, 99, 100];
let Zero = (number) => String(number).replaceAll('0', 'zero');
console.log(Zero(set));

//lesson-4

function sum(a) {
  let sum1 = a;
  function count(b) {
    return (sum1 += b);
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
});

//lesson-5

const date = '2023-1-25';
function replacer(match, p1, p2, p3, p4, p5) {
  return [p5, p3, p1].join('.');
}

const newDate = date.replace(/(\d{1,})(\D)(\d+)(\D)(\d+)/, replacer);
console.log(newDate);

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(query) {
  const results = [];

  data.forEach((item) => {
    const { country, city, hotel } = item;
    const searchString = `${country} ${city} ${hotel}`.toLowerCase();
    if (searchString.includes(query.toLowerCase())) {
      results.push(`${country}, ${city}, ${hotel}`);
    }
  });

  return results;
}
console.log(search('Indonesia'));

//lesson-6

const palidromeSecond = (str) =>
  str == str.split('').reverse().join('') ? true : false;

console.log(palidromeSecond('шалаш'));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function searchList(query) {
  const results = [];
  hotels.forEach((item) => {
    const { name, city, country } = item;
    const searchString = `${country} ${city} ${name}`.toLowerCase();
    if (searchString.includes(query.toLowerCase())) {
      results.push(`${country}, ${city}, ${name}`);
    }
  });

  return results;
}
console.log(searchList('Hamburg'));

function groupCountry(hotels) {
  const countries = {};

  hotels.forEach((hotel) => {
    const { city, country } = hotel;
    if (!countries[country]) {
      countries[country] = [city];
    } else if (!countries[country].includes(city)) {
      countries[country].push(city);
    }
  });

  return countries;
}

console.log(groupCountry(hotels));

//lesson-7

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (typeof object1 === 'object' && typeof object2 === 'object') {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!object2.hasOwnProperty(key)) {
        return false;
      }
      if (
        typeof object1[key] === 'object' &&
        typeof object2[key] === 'object'
      ) {
        if (!deepEqual(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

//lesson-8

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + this.lastName;
  }
}

class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get course() {
    return new Date().getFullYear() - this.students.admissionYear;
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students extends Student {
  constructor({ ...props }) {
    super(props);
  }
  getInfo() {
    const sortedStudents = studentsData.sort((a, b) =>
      a.courseName.localeCompare(b.courseName),
    );
    sortedStudents.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      const course = new Date().getFullYear() - student.admissionYear;
      console.log(`${fullName} - ${student.courseName}, ${course} курс`);
    });
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());

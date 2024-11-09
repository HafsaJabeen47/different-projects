// alert('your free minutes are out of Range.');
// confirm("Do you want to change your password?")


//how to add string in different ways.

// var name = 'myname';
// var lastname = 'jabeen';
// var residence = 'lahore, pakistan';

// var temp = `${name} is a 'nice' girl. she has "good" communication skill and she feels good to live in ${residence}`;
// console.log(temp);
// console.log(name + lastname + residence);




// by shradha khapra channel

// how to make an object in const variable and how to access the type of keys in an object specifically?
const product = {
    title: "ink pen",
    price: 50,
    rating: 4,
    color: "red",
    material: "matel",
    isFollow: true,
}

console.log(typeof product["isFollow"]);

// how to assign new value to const object?

product["price"] = product["price"] + 30;

console.log(product);


let profile = {
    userName: "itx-me",
    userName: "last name",
    account: "private",
    isFollow: false,
    platform: "linked-in",
    numberOfPosts: 15,
    followers: 15567,
    location: "lahore"
}

console.log(profile);
console.log(typeof profile["platform"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["account"]);
console.log(typeof profile["isFollow"]);
// console.log(typeof ["location"]);




// how to use for-loop in sum like how to calculate sum of 1 to 10?

let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum = sum + i;
    // here is started the logic of for-loop like how to repeat again and again step by step and adding 1 value in i variable.
    // sum = 0;
    // sum = 0 + 1;
    // sum = 1;

    // i++ - 2;

    // sum = 1 + 2;
    // sum = 3;

    // i++ - 3;

    // sum = 3 + 3;
    // sum = 6;

    // i++ - 4;

    // sum = 6 + 4;
    // sum = 10;

    // i++ - 5

    // sum = 10 + 5;
    // sum = 15;

    // i++ - 6

    // sum = 15 + 6;
    // sum = 21;

    // i++ - 7;

    // sum = 21 + 7;
    // sum = 28;

    // i++ - 8;

    // sum = 28 + 8;
    // sum = 36;

    // i++ - 9;

    // sum = 36 + 9;
    // sum = 45;

    // i++ - 10;

    // sum = 45 + 10;
    // sum = 55;

    // i++ - 11; //ab i ki value greater than 10 ho gai to so ab hm loop se bahr jaen gen or condition false ho jay gi agr less than or equal to 10 ho (<=10) gi to phr true condition me answer ay ga.
    

}
console.log("sum =", sum)


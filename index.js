window.onload = function (e) {
    var paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs[0].innerHTML);

    var var1 = 3;
    var var2 = 4;

    var1 += 7;
    console.log('var1', var1);

    console.log(var1 != 10);

    console.log(Math.sqrt(var1));
    console.log('ceil:', Math.ceil(Math.sqrt(var1)));

    if (var1 < 6) {
        console.log('if statement is true');
    } else if (var1 == 10) {
        console.log('if is false, else if statement');
    }

    //  for & while loop
    var text = '';
    myArray = [
        'first', 'second', 'third'
    ]
    for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
        text += myArray[i] + "\n";
    }
    // console.log(text);
    //     console.log(text[i]);

    while (i < 10) {
        text += "The Number is " + i + "\n";
        i++;
    }
    console.log(text);

    // var this = this + something else;
    // var employee = {
    //     department: "Shipping",
    //     name:"Sha"
    // }
    var senior = 5;
    var age = 51;
    if (age < 30) {
        senior += 1;
    } else if (age > 50) {
        senior += 5;
    }

    var Person = {
        firstName: "Sharan",
        lastName: "Reddy",
        seniority: senior
    }
    console.log(Person);

    //  Percipio Angular PDF

    var i = 1;
    for (var i = 1; i <= 5; i++) {
        // do something
    }
    console.log(i);

    let a = 1;
    for (let a = 1; a <= 5; a++) {
        // do something
    }
    console.log(a);

    const START = 10;

    console.log(START);

    // Boolean
    let taskCompleted = false;
    console.log(taskCompleted);
    // Number
    let decimal = 6;
    console.log(decimal);
    let hex = 0xf00d;
    console.log(hex);
    let binary = 0b1010;
    console.log(binary);
    let octal = 0o744;
    console.log(octal);
    // String
    let plan = "basic";
    console.log(plan);
    // Array
    let statuses = [0, 10, 20, 30];
    console.log(statuses);
    let statuses2 = [0, 10, 20, 30];
    console.log(statuses2);
    // Any
    let list = [decimal, plan, taskCompleted];
    console.log(list);
    // Maniplating Strings
    let firstName = 'Peter';
    let lastName = 'Parker';
    let age1 = 18;
    let text1 = firstName + '\n' + lastName + '\n' + age1;
    let text2 = `${ firstName} ${ lastName} ${ age1 }`;
    console.log(text1);
    console.log(text2);

    // It is overide to webpage 
    // let hi = `<h1>Hello</h1>
    //    <p>World</p>`;
    // document.write( hi );

    // Square root
    let message = `The square root of 2000 is ${ Math.sqrt( 2000 )}`;
    console.log(message);

    // Functions
    function calculateDiscount(price) {
        return price * 0.50;
    }
    console.log(calculateDiscount(25));

    function calculateDiscount1(price, discount = 0.50) {
        return price * discount;
    }
    console.log(calculateDiscount1(25, 0.30));

    function displayName(firstName, lastName, prefix) {
        return (prefix) ? `${prefix } ${firstName} ${lastName}` : `${firstName} ${lastName}`
    }
    console.log(displayName("Jhon", "Smith", "Dr"));

    //    Arrow Functions
    setTimeout(function () {
        console.log("Hi");
    }, 3000);

    setTimeout(() => {
        console.log("Hi");
    }, 3000);

    setTimeout(() => console.log("Hi"), 3000);

    let add = function (a, b) {
        return to + b;
    }
    console.log(add);
    let addF = (a, b) => a + b;
    console.log(addF);

    //  Function types

    let car = {
        speed: 10,
        Accelerate: function () {
            this.speed += 10;
            console.log(this.speed);
        }
    }
    car.Accelerate();

    let car2 = {
        speed: 10,
        Accelerate: function () {
            setTimeout(function () {
                this.speed += 10;
                console.log(this.speed);
            }, 3000)
        }
    }
    car2.Accelerate();

    // Array type
    let car3 = {
        speed: 10,
        Accelerate: function () {
            setTimeout(() => {
                this.speed += 10;
                console.log(this.speed);
            }, 3000)
        }
    }
    car3.Accelerate();

    // let _this = this; type
    let car4 = {
        speed: 10,
        Accelerate: function () {
            let _this = this;
            setTimeout(function () {
                _this.speed += 10;
                console.log(_this.speed);
            }, 3000)
        }
    }
    car4.Accelerate();

    //  Destructing Objects & Arrays
    let rect = {
        x: 5,
        y: 10,
        width: 20,
        height: 25
    };
    let {
        x,
        y,
        width,
        height
    } = rect;
    console.log(x, y, width, height);

    let {
        abc,
        xyz,
        width: w,
        height: h
    } = rect;
    console.log(abc, xyz, w, h);
    let {
        Abc,
        Xyz,
        ...remaining
    } = rect;

    console.log(Abc, Xyz);
    console.log(remaining);

    let person = {
        firstName: "George",
        lastName: "Martin",
        prefix: "Dr"
    }

    function sayHi({
        firstName,
        lastName,
        prefix
    }) {
        return `${prefix} ${firstName} ${lastName}`;
    }
    console.log(sayHi(person));

    let [p, q] = [3, 4];
    console.log(p, q);
    [p, q] = [q, p]
    console.log(p, q);

    //  Promises

    function asyncTask(callback) {
        setTimeout(() => {
            console.log("Async Tack Calling Callback");
        }, 3000);
    }
    asyncTask(() => console.log("Callback called"));

    // Another methods in Promises
    let firstMethod = function () {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('first method completed');
                resolve({
                    data: '123'
                });
            }, 2000);
        });
        return promise;
    };

    let secondMethod = function (someStuff) {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('second method completed');
                resolve({
                    newData: someStuff.data + ' some more data'
                });
            }, 2000);
        });
        return promise;
    };
    let thirdMethod = function (someStuff) {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('third method completed');
                resolve({
                    result: someStuff.newData + ' and even more data'
                });
            }, 3000);
        });
        return promise;
    };
    firstMethod()
        .then(secondMethod)
        .then(thirdMethod)
        .then(
            (res) => console.log(res)
        );

        
}
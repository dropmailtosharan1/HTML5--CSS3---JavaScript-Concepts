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
     if(age < 30) {
        senior += 1;
     } else if (age > 50) {
        senior +=5;
     }

     var Person = {
        firstName: "Sharan",
        lastName: "Reddy",
        seniority: senior
     }
     console.log(Person);
}
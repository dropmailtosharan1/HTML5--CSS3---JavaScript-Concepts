window.onload = function (e) {
    var paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs[0].innerHTML);

    var var1 = 3;
    var var2 = 4;

    var1 += 7;
    console.log('var1', var1);

    console.log(var1 !=10);

    console.log(Math.sqrt(var1));
    console.log('ceil:', Math.ceil(Math.sqrt(var1)));
}
// const myObject = {
//     nombre : "Jonatan",
//     apellido: "Pena"
// }

// myObject.edad = 25

// const array = [1,2,3,4,5];
// array[50] = 10


function convert() {
    let input = document.getElementById('myInput').value;
    let p = document.getElementById('resultado');
    Celsius = (input - 32) * 5/9;
    p.textContent = Celsius;
}

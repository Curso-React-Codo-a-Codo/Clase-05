let MyDom = document; //document es un objeto global

let name = "Firulais";

const myDog = {
    name: "Firulais" //este es un atributo (Nombre del atributo : valor)
};//Es una manera de construir un objeto

const myCat = {
    "name":"Kity"//este es un atributo (Nombre del atributo : valor)
};//Es una manera de construir un objeto

console.log(myDog.name);
console.log(myCat.name);

/*class Mouse{
    constructor(name, age){ //Le pasamos name como valir para construir
        this.name = name; // se utiliza this en el caso del contexto de un objeto, nopodria ser this.perro = name
        this.age = age;
    }
}

const myMouse = new Mouse("Perez",4);
*/

function Mouse(name, age){
    this.name=name;
    this.age=age;
}

const myMouse = new Mouse("Carlos",10);

//Esta funcion y la llamada de la misma es igual a la clase y la llamada de la clase de arriba

class Button {
    constructor(parentID, text){
        this.parentID = parentID; // el id del div en el cual estara el boton
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentID)

        const myButtonHTML = myApp.innerHTML + "<button>"+this.text+"</button>"; //Asi genero mas de un boton (acumulo el myapp.inner.html)

        myApp.innerHTML = myButtonHTML;
    }
}

//let myButton = new Button("app","Se ha Generado este Boton");
//myButton.render();

//let myButton2 = new Button("app","Se ha Generado este otro Boton");
//myButton2.render();

class Input {
    constructor(parentID, type) {
        // if type != opciones validas.... entonces poner un valor
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myInputHTML = myApp.innerHTML + "<input type="+this.type+">";
        myApp.innerHTML = myInputHTML;
    }
}

let myInput = new Input("app","checkbox");
myInput.render();

let myInput2 = new Input("app","date");
myInput2.render();

let myInput3 = new Input("app","password");
myInput3.render();

let mySuperArrayofStrings = ["Login","Signup","Reset","Cancel"];

function RenderButton(text){
    let myButton = new Button("app", text);
    myButton.render();
}

mySuperArrayofStrings.forEach(element => RenderButton(element)); //por c/u de los elementos ejecutar una definicion
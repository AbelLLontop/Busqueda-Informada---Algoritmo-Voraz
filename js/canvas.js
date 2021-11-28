const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 1600;
canvas.height=1000;

const colors ={
    circulos:"#580d5e",
    texto:"#f570ff",
    iluminado:"#db29e9",
    lineas:"#8c0b97"

}

function clear(){
    console.log("limpio")
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}   


class Circle{
    constructor(name="a",position={x:10,y:10}){
        this.position =position
        this.radio = 20;
        this.desde = 0;
        this.hasta = 2*Math.PI;
        this.name = name;
    }
    dibujar(){       
        context.beginPath();
        context.fillStyle = colors.circulos;
        context.arc(this.position.x,this.position.y,this.radio,this.desde,this.hasta);     
        context.fill();
		context.stroke();

        context.fillStyle = colors.texto;
        context.lineWidth = 2;
        context.font = "20px Arial";
        context.textAlign = "center";

        context.fillText(this.name, this.position.x,this.position.y+40);
    }
    iluminar(){
        context.beginPath();
        context.fillStyle = colors.iluminado;
        context.arc(this.position.x,this.position.y,10,this.desde,this.hasta);     
        context.fill();
		context.stroke();

    }
  

}


const circulos = {
    'Arad': new Circle("Arad",{x:100,y:300}),
    'Craiova': new Circle("Craiova",{x:600,y:860}),
    'Dobreta': new Circle("Dobreta",{x:300,y:890}),
    'Fagaras': new Circle("Fagaras",{x:780,y:460}),
    'Lugoj': new Circle("Lugoj",{x:300,y:600}),
    'Mehadia': new Circle("Mehadia",{x:320,y:740}),
    'Oradea': new Circle("Oradea",{x:340,y:50}),
    'Pitesti': new Circle("Pitesti",{x:800,y:640}),
    'Rimnicu Vilcea': new Circle("Rimnicu Vilcea",{x:580,y:500}),
    'Sibiu': new Circle("Silbiu",{x:490,y:350}),
    'Timisoara': new Circle("Tiimisoara",{x:140,y:480}),
    'Zerind': new Circle("Zerid",{x:200,y:150}),
    'Bucarest': new Circle("Bucarest",{x:1000,y:640}),
}


function dibujarCirculos(){
   dibujarLineas();
    for(let i in circulos){
        circulos[i].dibujar();    
    }

}
function dibujarLineas(){
    for(let i in circulos){     
        let ciuVecinos = ciudades[i].vecinos;
        for(let a of ciuVecinos){
            context.strokeStyle = colors.lineas;
            context.moveTo(circulos[i].position.x, circulos[i].position.y);
            context.lineTo(circulos[a].position.x,circulos[a].position.y);
            context.stroke();}
    }
}

function iluminarGrafos(recorridoTotal){
    update();
    let inicial = recorridoTotal[0];
    for(let i of recorridoTotal){
        
       if(i!=inicial){
        context.strokeStyle = "red";
        context.moveTo(circulos[i].position.x, circulos[i].position.y);
        context.lineTo(circulos[inicial].position.x,circulos[inicial].position.y);
        context.stroke();
        inicial = i;
       }     
        circulos[i].iluminar();

    }
}


function update(){
    clear();
    dibujarCirculos();
}
update();


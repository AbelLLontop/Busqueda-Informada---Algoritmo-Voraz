
const botonCalcular = document.getElementById("botonCalcular");
const input_options = document.getElementById("ddlViewBy");

botonCalcular.addEventListener("click", calcular, false);

//Inicialización de distancias
const ciudades = {
    'Arad': { distance: 366, vecinos: ['Sibiu', 'Timisoara', 'Zerind'] },
    'Craiova': { distance: 160, vecinos: ['Dobreta', 'Pitesti','Rimnicu Vilcea'] },
    'Dobreta': { distance: 242, vecinos: ['Craiova', 'Mehadia'] },
    'Fagaras': { distance: 176, vecinos: ['Bucarest', 'Sibiu'] },
    'Lugoj': { distance: 244, vecinos: ['Mehadia', 'Timisoara'] },
    'Mehadia': { distance: 241, vecinos: ['Dobreta', 'Lugoj'] },
    'Oradea': { distance: 380, vecinos: ['Sibiu', 'Zerind'] },
    'Pitesti': { distance: 100, vecinos: ['Bucarest', 'Rimnicu Vilcea'] },
    'Rimnicu Vilcea': { distance: 193, vecinos: ['Pitesti', 'Sibiu'] },
    'Sibiu': { distance: 253, vecinos: ['Arad', 'Fagaras', 'Oradea', 'Rimnicu Vilcea'] },
    'Timisoara': { distance: 329, vecinos: ['Arad', 'Lugoj'] },
    'Zerind': { distance: 374, vecinos: ['Arad', 'Oradea'] },
    'Bucarest': { distance: 374, vecinos: ['Fagaras'] }
}


let recorridoTotal = [];

function calcular() {
    let ciudadOrigen = input_options.options[input_options.selectedIndex].text;

    recorridoTotal = [ciudadOrigen];
    
    //console.clear();
    buscarVecinos(ciudadOrigen);
    iluminarGrafos(recorridoTotal);
}


function buscarVecinos(ciudadOrigen) {
    obtenerSiguiente(ciudades[ciudadOrigen].vecinos);
}

function obtenerSiguiente(nombreVecinos) {
    if (!nombreVecinos.includes('Bucarest')) {
       
        let ciudadesVecinas = nombreVecinos.map((nombreCiudad) => ({
            name: nombreCiudad,
            distancia: ciudades[nombreCiudad].distance
        }))

        let ciudadConDistanciaMenor = ciudadesVecinas.reduce((ac, curr) => (ac.distancia >= curr.distancia) ? curr : ac);

        recorridoTotal.push(ciudadConDistanciaMenor.name);

        buscarVecinos(ciudadConDistanciaMenor.name);
    } else {
        recorridoTotal.push('Bucarest');
        console.log(recorridoTotal.join("-"));

    }
}

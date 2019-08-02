// import Axios from "axios";

var datos;

function mandarDatos(url, dato){
    axios.post(url, dato)
    .then((res)=>{datos = res;})
    .catch((err)=>{datos = err;})
    .then(()=>{ })
}

function send(){
    

    console.log("Datos enviados");
}

function obtenerDatos(url){
    axios.get(url)
    .then((res)=>{datos = res; console.log(datos["c"])})
}

obtenerDatos("http://localhost:3000/math");



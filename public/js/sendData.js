// import Axios from "axios";

var datos;

function mandarDatos(url, dato){
    axios.post(url, dato)
    .then((res)=>{datos = res;})
    .catch((err)=>{datos = err;})
    .then(()=>{ })
}

function obtenerDatos(url){
    axios.get(url)
    .then((res)=>{datos = res; console.log(datos["c"])})
}

mandarDatos("http://localhost:3000/math", 
{
    "a": 12,
    "b": 15,
    "action": 1
});

obtenerDatos("http://localhost:3000/math");



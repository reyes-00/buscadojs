const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const add_autos = document.querySelector('#resultado');

// Años
const fecha = new Date();
const max = fecha.getFullYear();
const min = max - 10;
// console.log(min);

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
}

document.addEventListener('DOMContentLoaded',()=>{
  mostrarAutos(autos); /* Muestra todos autos  */
  llenarSelectYear(); //llena el select de año
});

// Eventos para los inputs de busqueda
marca.addEventListener('change', e =>{
  datosBusqueda.marca = e.target.value;
  filtarAuto();
  
})
year.addEventListener('change', e =>{
  datosBusqueda.year = e.target.value;
  filtarAuto();
  
})
minimo.addEventListener('change', e =>{
  datosBusqueda.minimo = e.target.value;
  filtarAuto();
  
})
maximo.addEventListener('change', e =>{
  datosBusqueda.maximo = e.target.value;
  filtarAuto();
  
})
puertas.addEventListener('change', e =>{
  datosBusqueda.puertas = e.target.value;
  filtarAuto();
  
})
transmision.addEventListener('change', e =>{
  datosBusqueda.transmision = e.target.value;
  filtarAuto();
  
})
color.addEventListener('change', e =>{
  datosBusqueda.color = e.target.value;
  filtarAuto();
  console.log(datosBusqueda);
})

function mostrarAutos(autos){
  limpiarHtml();
  if(autos.length){
    autos.forEach(auto => {
      const {color,marca,modelo,precio,puertas,transmision,year} = auto;
      const listado = document.createElement('p');
      listado.textContent = `${marca} - ${modelo} - Precio $$ ${precio} - Puertas ${puertas} - ${transmision} - ${year} - color: ${color}`;
      
      add_autos.appendChild(listado);
    });

  }else{
    noautos();
  }

}

function noautos(){
  limpiarHtml();
  const mensaje = document.createElement("DIV");
  mensaje.classList.add("alerta",'error');
  mensaje.textContent = "No encontramos un auto con esos terminos.";
  add_autos.appendChild(mensaje);
}

// Limpia el html previo 
function limpiarHtml(){
  while(add_autos.firstChild){
    add_autos.removeChild(add_autos.firstChild);
  }
}

function llenarSelectYear(){
  for(i = max; i >= min; i-- ){
    const opcion = document.createElement('option');
    opcion.textContent = i;
    opcion.value = i;
    year.appendChild(opcion);
  }
}

function filtarAuto(){
  const respuesta = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  mostrarAutos(respuesta)

}

function filtrarMarca(auto){
  const {marca} = datosBusqueda
  if(marca){
    return auto.marca == marca
  }
  return auto;
}
function filtrarYear(auto){
  const {year} = datosBusqueda

  if(year){
    return auto.year == parseInt(year)
  }
  return auto;
}
function filtrarMinimo(auto){
  const {minimo} = datosBusqueda

  if(minimo){
    return auto.precio >= minimo
  }
  return auto;
}
function filtrarMaximo(auto){
  const {maximo} = datosBusqueda

  if(maximo){
    return auto.precio <= maximo
  }
  return auto;
}
function filtrarPuertas(auto){
  const {puertas} = datosBusqueda

  if(puertas){
    return auto.puertas == puertas
  }
  return auto;
}
function filtrarColor(auto){
  const {color} = datosBusqueda

  if(color){
    return auto.color == color
  }
  return auto;
}
function filtrarTransmision(auto){
  const {transmision} = datosBusqueda

  if(transmision){
    return auto.transmision == transmision
  }
  return auto;
}

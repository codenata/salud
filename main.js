// Los productos se pueden vender hasta 30 dias antes de su fecha de vencimiento.
// Pasado ese plazo, el producto debe dejar de ofrecerse.

// Hay cargados productos que cumplen con los 30 dias de para venderse y otros que no. Los productos que no pueden comercializarse son negocios perdidos. 


// Sistema de ingreso a panel
let clave = "usuario123";
let acceso = prompt("*** Ingrese su Clave de ACCESO ***");
let veces = 1;

while (acceso != clave && veces > 0) {
        veces = veces - 1;
    alert(`Su clave de acceso no corresponde! Podes probar ${veces+1} vez mas`);
    acceso = prompt("*** Confirme su clave de ACCESO ***");
}


// Sistema para cargar vendedores

class Vendedor {
    constructor(nombre, empresa, email) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.email = email;
    }
}

let listaVendedores = [
    {nombre: "Marcelo Gomez", empresa: "Vicmor SRL", email: "marcelo@vicmorsrl.com.ar"},
    {nombre: "Sebastian Ramirez", empresa: "Drogueria Martorani", email: "martorani@martorani.com"},
    {nombre: "Andrea Maldonado", empresa: "Farmacia Rex", email: "rex@farmaciarex.com.ar"},
    {nombre: "Gladys Lucia Vega", empresa: "Farmacity", email: "pescarmona@farmacity.org"},
];

const agregarVend = () => {
    let nombre = prompt("SISTEMA PARA CARGAR NUEVOS VENCEDORES. Como es su nombre?");
    let empresa = prompt("Como se llama su empresa?");
    let email = prompt("Cual es su email?");

    let vendNuevo = new Vendedor(nombre, empresa, email);

    listaVendedores.push(vendNuevo);
    return listaVendedores;
}

agregarVend();


console.log("Listado de vendedores");
// for.... of - SOLO PARA ARRAYS DE OBJETOS
for (const vendedor of listaVendedores) {
    console.log(`El vendedor ${vendedor.nombre} pertenece a la firma ${vendedor.empresa} y su contacto es ${vendedor.email}`)
}

// Navegacion por los productos cargados

const productos = [
    { rubro: 'Oxigenoterapia', producto: 'Canula nasal', modelo: "pediatrico", marca: 'drager', fechaVencimiento: '2023-11-07', precioVentaLote: 15800, stockUnidadesLote: 200 },
    { rubro: 'Oxigenoterapia', producto: 'Canula nasal', modelo: "adulto", marca: 'drager', fechaVencimiento: '2023-09-14', precioVentaLote: 31600, stockUnidadesLote: 400 },
    { rubro: 'Oxigenoterapia', producto: 'Canula nasal', modelo: "pediatrico", marca: 'galemed', fechaVencimiento: '2023-01-21', precioVentaLote: 110600, stockUnidadesLote: 1400 },
    { rubro: 'Oxigenoterapia', producto: 'Canula nasal', modelo: "adulto", marca: 'galemed', fechaVencimiento: '2023-02-07', precioVentaLote: 27650, stockUnidadesLote: 350 },
    { rubro: 'Oxigenoterapia', producto: 'Mascara Oxigeno Directo', modelo: "adulto", marca: 'galemed', fechaVencimiento: '2023-03-28', precioVentaLote: 240000, stockUnidadesLote: 2000 },
    { rubro: 'Oxigenoterapia', producto: 'Mascara Oxigeno Directo Con Reservorio', modelo: "adulto", marca: 'galemed', fechaVencimiento: '2023-01-07', precioVentaLote: 76000, stockUnidadesLote: 200 },
    { rubro: 'Oxigenoterapia', producto: 'Mascara Oxigeno Venturi', modelo: "adulto", marca: 'galemed', fechaVencimiento: '2023-09-14', precioVentaLote: 910000, stockUnidadesLote: 3500 },
    { rubro: 'Oxigenoterapia', producto: 'Mascara Oxigeno Venturi', modelo: "pediatrico", marca: 'galemed', fechaVencimiento: '2023-07-21', precioVentaLote: 80600, stockUnidadesLote: 1200 },
    { rubro: 'Oxigenoterapia', producto: 'Frasco Humidificador', modelo: "500 ml", marca: 'ago', fechaVencimiento: '2023-06-28', precioVentaLote: 14875, stockUnidadesLote: 25 },
    { rubro: 'Anestesia', producto: 'Trocar cateter', modelo: "24 Fr", marca: 'pahsco', fechaVencimiento: '2023-05-05', precioVentaLote: 7800, stockUnidadesLote: 10 },
    { rubro: 'Anestesia', producto: 'Trocar cateter', modelo: "28 Fr", marca: 'pahsco', fechaVencimiento: '2023-00-10', precioVentaLote: 19500, stockUnidadesLote: 25 },
    { rubro: 'Anestesia', producto: 'Circuito Anestesia', modelo: "adulto", marca: 'westmed', fechaVencimiento: '2023-05-15', precioVentaLote: 210000, stockUnidadesLote: 600 },
    { rubro: 'Anestesia', producto: 'Circuito Anestesia', modelo: "pediatrico", marca: 'westmed', fechaVencimiento: '2023-00-20', precioVentaLote: 175000, stockUnidadesLote: 500 },
];

// PRESENTACION por Alert
// En el sistema hay cargados productos por total de $X distribuidos en X cantidad de Lotes de Oferta
let sumaPreciosVentaLote = productos.reduce((total, productos)=> {
    return total + productos.precioVentaLote
}, 0)
let cantidadLotes = productos.length;
    alert(`BIENVENIDOS!! En el sistema hay cargados ${cantidadLotes} lotes de mercaderia por un total de $${sumaPreciosVentaLote} + iva`);

    
// Consulta de Productos por vencer Modelo: pediatrico o adulto.
let consultaModelo = prompt("Queres consultar por un producto modelo Adulto o Pediatrico").toLowerCase();
console.log(`Productos cargados en el sistema, modelo ${consultaModelo}`);// sale por consola
console.log(productos.filter(venc => venc.modelo == `${consultaModelo}`));
// Consulta de Productos por vencer Marca: galemed, pahsco, drager o ago.
let consultaMarca = prompt("Queres consultar por un producto marca Galemed, Pahsco, Drager o Ago").toLowerCase();
console.log(`Productos cargados en el sistema, marca ${consultaMarca}`);// sale por consola
console.log(productos.filter(venc => venc.marca == `${consultaMarca}`));

// Productos cargados ordenados por fecha de vencimiento
productos.sort((a, b)=> {
    if(a.fechaVencimiento > b.fechaVencimiento) {
        return 1
    }
    if(a.fechaVencimiento < b.fechaVencimiento) {
        return -1
    }
    return 0
})
console.log(`Productos ordenados por fecha de vencimiento`);
console.log(productos) // Me muestra en consola los productos cargados, ordenados por fecha de vencimiento.


// Los productos aptos para la venta son aquellos para los que falta mas de 1 mes para su fecha de vencimiento
// a la fecha HOY la comparo con fecha de vencimiento, le y busco una diferencia minima de 31 dias y lo muestro en consola.

let listaProdParaVender = [];
for (const paraVender of productos) {
    let fechaVenc = new Date(paraVender.fechaVencimiento);
    let fechaHoy = new Date();
    let diferenciaDias = Math.abs(fechaHoy-fechaVenc);
    let diasSeguridad = diferenciaDias/(1000*3600*24); // dias en milisegundos
    if (diasSeguridad >= 31) {
        listaProdParaVender.push(paraVender);
    } 
}

console.log("Productos que se pueden comercializar");
console.log(listaProdParaVender);
productos.forEach(paraVender => {
})

// Ahora despedida por ALERT y paso informe de los negocios perdidos.
let sumaPreciosParaVenderLote = listaProdParaVender.reduce((total, listaProdParaVender)=> {
    return total + listaProdParaVender.precioVentaLote
}, 0)
let cantidadLotesParaVender = listaProdParaVender.length;
let negocioPerdidoPor = sumaPreciosVentaLote - sumaPreciosParaVenderLote
    alert(`Hasta luego!! En el sistema hay cargados ${cantidadLotesParaVender} lotes de mercaderia SIN VENCER por un total de $${sumaPreciosParaVenderLote} + iva. LAMENTABLEMENTE Se perdieron Negocios por $${negocioPerdidoPor} + iva`);


let balance = 0
let pagos = {};
let citas = [];



function agregarFondos(){
        balance += parseInt(document.getElementById("balance").value);
        document.getElementById("bal").innerHTML = "Su Balance Actual Es De: "+
        "<br>"+"₡"+balance;
        document.getElementById("balance").value="";
}

function agregarPagos(){
    let nombrePago = document.getElementById("pagar1").value;
    let valorPago = document.getElementById("pagar2").value;
    pagos[nombrePago] = valorPago;
    document.getElementById("pagar1").value="";
    document.getElementById("pagar2").value="";
}

function mostrarPagos(){
    let lista = "";
    for (let pago in pagos) {
        lista += pago + " = " + "₡"+ pagos[pago]+"<br>";
    }
    document.getElementById("listaGastos").innerHTML = "Mis pagos son:<br>" + lista;
    let totalPagos = 0
    for(let i in pagos){
        totalPagos += parseFloat(pagos[i]);
    }
    document.getElementById("totalGastos").innerHTML = "Mi total de gastos es:"+ "<br>"+ "₡" +totalPagos;
    saldoFinal = balance-totalPagos;
    document.getElementById("bal").innerHTML= "Mi saldo después de los pagos será:"+"<br>"+" ₡" + saldoFinal;
}

function agregarCita(){
    let datCita ={};
    datCita.nombre = document.getElementById("nombre").value;
    datCita.lugar = document.getElementById("lugar").value;
    datCita.fecha = document.getElementById("fecha").value;
    datCita.hora = document.getElementById("hora").value;
    citas.push(datCita);
    document.getElementById("nombre").value="";
    document.getElementById("lugar").value="";
    document.getElementById("fecha").value="";
    document.getElementById("hora").value="";
}

function mostrarCitas() {
    let lista = "";
    for (let i = 0; i < citas.length; i++) {
        const cita = citas[i];
        const indice = i + 1;
        lista += "cita #: "+ indice + "<br>" + "nombre: " + 
        cita.nombre + "<br>" + "lugar: " + 
        cita.lugar + "<br>"+ "fecha: " +
        cita.fecha+ "<br>"+"hora: " + 
        cita.hora + "<br>";
    }
    document.getElementById("citas").innerHTML = "Mis citas son:<br>" + lista;
}
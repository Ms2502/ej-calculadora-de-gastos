var arr_nom = [];
var arr_monto=[];

/* cuando pongo agregar se debe actualizar la lista*/
/* eliminar items individuales antes*/

function addEntry(){
    if((document.getElementById("nombre").value) !== "" && (document.getElementById("plata")).value !== ""){     /*si no es un string vacio, ejecuta el codigo*/
        arr_nom.push(document.getElementById("nombre").value);
        arr_monto.push(Number(document.getElementById("plata").value));
        console.log(arr_nom,arr_monto);
    }
    else{
        alert("¡No se han completado los campos!");
    }

    strToList();
    total();
    
    /* me falta agregar algo que reincie el text input*/
    /* y enviar el input con enter */

};

function restart(){
    globalThis.arr_nom=[];
    globalThis.arr_monto=[];
    console.log(arr_nom,arr_monto);
    document.getElementById("list").innerHTML = "";
    document.getElementById("total").innerText = "";
    document.getElementById("prom").innerText = "";
    
}

function strToList(){/*añade el nuevo item de las dos listas al html*/
    var lstr=""          
    for(let i = 0; i < arr_nom.length; i++){
        lstr = lstr + "<li>" + arr_nom[i] +": $"+ arr_monto[i] + "</li>" ;
        document.getElementById("list").innerHTML = lstr; /*como evito usar innerHtml*/
    };
}

function total(){
    var total = 0
    for (let i = 0; i < arr_monto.length; i++) {
        var total = total += arr_monto[i];
    };
    var prom = total/arr_nom.length;

    document.getElementById("total").innerText = "El total es: $" + total;
    document.getElementById("prom").innerText = "A cada uno le toca aportar: $" + prom;
}


var nombreDeLosProductos = JSON.parse(localStorage.getItem("Productos"));
var direccionDeLasImagenes = JSON.parse(localStorage.getItem("Imagenes"));
var precioDeLosProducots = JSON.parse(localStorage.getItem("Precio"));
var cantidadDeProductos = [0,0,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0];
var validador = [0,0,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0];

var cuentaid=0;
var totalAPagar=0;
var columnas=0, filas=0;

var gananciasDelDia = parseInt(localStorage.getItem("gananciasDelDia"));

// ----------------------------------Parte del cliente-------------------------------------------
function Comprar(Producto){
    var Cantidad = 1;

    Carrito(Producto,Cantidad);
}
function Eliminar(Producto){
    var cantidad = 1;

    cantidadDeProductos[Producto]-=cantidad;

    if(cantidadDeProductos[Producto]===0){
        validador[Producto]=0;
        totalAPagar-=precioDeLosProducots[Producto];

        document.getElementById("totalapagar").innerHTML = "Total a pagar: " + totalAPagar;
        document.getElementById("Producto"+String(Producto)).remove(Element);
    }
    else{
        totalAPagar-=precioDeLosProducots[Producto];

        document.getElementById("totalapagar").innerHTML = "Total a pagar: " + totalAPagar;
        document.getElementById("CantidadP" + String(Producto)).innerHTML = "Cantidad: " + cantidadDeProductos[Producto];
    }
}
function Eliminar2(Producto){

    document.getElementById("totalapagar").innerHTML = " ";
    document.getElementById("Producto" + String(Producto)).remove(Element);
}
function Carrito(Producto,Cantidad){
    if(validador[Producto]!==1){

        validador[Producto]=1;

        // var div = document.createElement("div");
        var buttom = document.createElement("button");
        var img = document.createElement("img");
        var p = document.createElement("p");

        totalAPagar+=precioDeLosProducots[Producto];
        cantidadDeProductos[Producto]+=Cantidad;

        img.setAttribute("src",direccionDeLasImagenes[Producto]);

        p.innerHTML = "Cantidad: " + String(Cantidad);
        p.setAttribute("id","CantidadP" + String(Producto))

        buttom.appendChild(img);
        buttom.appendChild(p);
        buttom.setAttribute("id","Producto"+String(Producto));
        buttom.setAttribute("onclick"," Eliminar(" + Producto + ")");

        // div.appendChild(buttom);
        // div.setAttribute("id","Producto"+String(Producto));

        document.getElementById("carrito").appendChild(buttom);
        document.getElementById("totalapagar").innerHTML = "Total a pagar: " + String(totalAPagar);
    }
    else{
        totalAPagar+=precioDeLosProducots[Producto];
        cantidadDeProductos[Producto]+=Cantidad;

        document.getElementById("CantidadP" + String(Producto)).innerHTML = "Cantidad: " + cantidadDeProductos[Producto];
        document.getElementById("totalapagar").innerHTML = "Total a pagar: " + String(totalAPagar);
    }
}
function Finalizar(){
    if(totalAPagar!==0){
        for(var i=0;i<nombreDeLosProductos.length;i++){
            if(validador[i]===1){
                Eliminar2(i);
            }{

            }
        }


        Recivo();

        for(var i=0;i<nombreDeLosProductos.length;i++){
            validador[i]=0;
            cantidadDeProductos[i]=0;
        }
        gananciasDelDia=gananciasDelDia+totalAPagar;
        totalAPagar=0;
        localStorage.setItem("gananciasDelDia",gananciasDelDia);
    }
    else{
        alert("No hay comidas seleccionadas en su lista");
    }
}

function Recivo2(Producto){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td.innerHTML = nombreDeLosProductos[Producto];
    td1.innerHTML = cantidadDeProductos[Producto];
    td2.innerHTML = cantidadDeProductos[Producto]*precioDeLosProducots[Producto];

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("Cuenta"+String(cuentaid)).appendChild(tr);
}
function Recivo(){
    cuentaid++;
    var div = document.createElement("div");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var center = document.createElement("center");
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var fecha = new Date();
    var br = document.createElement("br");

    p.innerHTML = "Restaurante Calipso";
    p1.innerHTML = "Lo Mejor Con los Mejores " + "     " + "Fecha" + "     : "+ fecha.toLocaleString();

    th.innerHTML = "Pedido";
    th1.innerHTML = "Cantidad";
    th2.innerHTML = "Precio";
    
    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);

    table.setAttribute("id","Cuenta"+String(cuentaid));
    table.appendChild(tr);

    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(br);
    div.appendChild(table);
    div.setAttribute("id","Res"+ String(cuentaid));
    center.appendChild(div);
    document.getElementById("recivo").appendChild(center);

    for(var i=0;i<nombreDeLosProductos.length;i++){
        if(validador[i]===1){
            Recivo2(i);
        }
    }
     
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var br1 = document.createElement("br");
    p2.innerHTML = "El total a pagar es de " + String(totalAPagar);
    p3.innerHTML = "Muchas gracias por su preferencia";
    
    document.getElementById("Res"+String(cuentaid)).appendChild(br1);
    document.getElementById("Res"+String(cuentaid)).appendChild(p2);
    document.getElementById("Res"+String(cuentaid)).appendChild(p3);

    // localStorage.setItem(Document.getElementById("recivo"));

    // RecivoADM();
}

function Cerrar(){
    alert(gananciasDelDia);
}

//--------------------------------------------------Parte del ADM-------------------------------------
function Menuc(){
    for (var i=0; i<nombreDeLosProductos.length;i++){
        Anadirproducto(i);
    }
}
function ActualizarMenu(){
    var aux=0;
    var codigo = document.getElementById("CodigoA").value;
    var Nuevonombre = document.getElementById("Nuevonombre").value;
    var NuevoPrecio = parseInt(document.getElementById("Nuevoprecio").value);
    var Nombreanterior;

    for(var i=0;i<nombreDeLosProductos.length;i++){
        if(codigoDeLosProductos[i]===codigo){
            Nombreanterior=nombreDeLosProductos[i];
            nombreDeLosProductos[i]= Nuevonombre;
            precioDeLosProducots[i]= NuevoPrecio;
            aux=1;

            document.getElementById("Nombre" + String(i+1)).innerHTML = nombreDeLosProductos[i];
            document.getElementById("Precio" + String(i+1)).innerHTML = "$"+precioDeLosProducots[i];

            alert("Se ha Actualizado el producto" + " " + Nombreanterior);
        }
        else if(aux===0 && i===nombreDeLosProductos.length-1){
            alert("Producto no encontrado");
        }
    }
}
function Anadirproducto(aux){
    columnas++;
    if(columnas<2){filas++;
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var buttom = document.createElement("button");
        var img = document.createElement("img");
        var nombre = document.createElement("span");
        var precio = document.createElement("span");
        var codigo =  document.createElement("span");
        var br = document.createElement("br");
        var br1 = document.createElement("br");

        nombre.innerHTML = nombreDeLosProductos[aux];
        precio.innerHTML = "$"+precioDeLosProducots[aux];

        nombre.setAttribute("id","Nombre"+nombreDeLosProductos.length);
        precio.setAttribute("id","Precio"+nombreDeLosProductos.length);
        codigo.setAttribute("id","Codigo"+nombreDeLosProductos.length);

        img.setAttribute("src",direccionDeLasImagenes[aux]);
        img.setAttribute("id","Imagen" + String(nombreDeLosProductos.length));
        
        buttom.appendChild(img);
        buttom.appendChild(nombre);
        buttom.appendChild(br);
        buttom.appendChild(precio);
        buttom.appendChild(br1);
        buttom.appendChild(codigo);
        buttom.setAttribute("onclick","Comprar(" + aux + ")");

        td.appendChild(buttom);

        tr.appendChild(td);
        tr.setAttribute("id","fila"+String(filas))

        document.getElementById("Menu").appendChild(tr);
    }
    else{
        var td = document.createElement("td");
        var buttom = document.createElement("button");
        var img = document.createElement("img");
        var nombre = document.createElement("span");
        var precio = document.createElement("span");
        var codigo =  document.createElement("span");
        var br = document.createElement("br");
        var br1 = document.createElement("br");

        nombre.innerHTML = nombreDeLosProductos[aux];
        precio.innerHTML = "$"+precioDeLosProducots[aux];

        nombre.setAttribute("id","Nombre"+nombreDeLosProductos.length);
        precio.setAttribute("id","Precio"+nombreDeLosProductos.length);
        codigo.setAttribute("id","Codigo"+nombreDeLosProductos.length);

        img.setAttribute("src",direccionDeLasImagenes[aux]);
        img.setAttribute("id","Imagen" + String(nombreDeLosProductos.length));

        buttom.appendChild(img);
        buttom.appendChild(nombre);
        buttom.appendChild(br);
        buttom.appendChild(precio);
        buttom.appendChild(br1);
        buttom.appendChild(codigo);
        buttom.setAttribute("onclick","Comprar(" + aux + ")");

        td.appendChild(buttom);


        document.getElementById("fila"+String(filas)).appendChild(td);

        if(columnas===5){
            columnas=0;
        }
    }
}
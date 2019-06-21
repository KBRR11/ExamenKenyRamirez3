$(document).ready(function (){
	var nombre2=$("#idnom_user").val();
	var a=dividirCadena(nombre2, " ");
	buscarid(a);
});
function dividirCadena(cadenaADividir,separador) {
	   var arrayDeCadenas = cadenaADividir.split(separador);
	   return arrayDeCadenas[0];
	}
function buscarid(nombre2) {
	//alert(nombre2);
	$.get("unv",{"opc":1,"nombre":nombre2},function (data) {
			//alert(data);
	       var x = JSON.parse(data);
	       $("#iddatos").val(x.dni);
	       
	       // $("#edit_nomrol").val(String.idpersona);
	    });
}
/*function evaluar(x){
    $.get("unv",{"op":1,"idpersona2":x},function (data) {
       var x = JSON.parse(data);
        $("#edit_nomrol").val(x.nombres);
        $("#edit_idrol").val(x.apellidos);
    });
    $("#myModal2").modal('show');
}*/
$("#ida").click(function() {
	var fin_ff=$("#fecha_f").val();
	var inic_fi=$("#fecha_i").val();
	$.get("fc",{"opc":1,"a":inic_fi,"b":"fin_ff"},function (data) {
		alert(data);
       var x = JSON.parse(data);
       $("#iddatos").val(x.dni);
       for (var i = 0; i < x.length; i++) {
    	   $("#tablareport").append("<tr><td>"+(i+1)+"</td><td>"+x[i].idventa+"</td><td>"+x[i].fecha+"</td><td><a href='#' onclick='editar("+x[i].idr+")'><i class='far fa-edit'></i></a></td><td><a href='#' onclick='eliminar("+x[i].idr+")'><i class='fas fa-trash-alt'></i></a></td></tr>");
       }
    });
});
$("#enviar_2").click(function (){
    var nompersona = $("#nom").val();
    var apellpersona=$("#apell").val();
    var id=$("#idper").val();
    var clav=$("#pass").val;
    alert(nompersona);
    $.post("unv",{"nombre":nompersona,"apellido":apellpersona,"clave":clav,opc:3});
});

	//alert(nombre2);
	
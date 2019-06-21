$(document).ready(function (){
	$("#operacion").hide();
});
$("#calcular").click(function (){
	var horas=$("#horas").val();
	var trabajador=$("#nombre").val();
	//alert(trabajador+" SU SUELDO ES S/:"+result);
    $.get("ht",{"op":1,"nom":trabajador,"horas":horas},function (data) {
        var x = JSON.parse(data);
        alert(trabajador+" SU SUELDO ES S/:"+x);
    });
    
});
$("#mostrar").click(function (){
	$("#operacion").show();
    
});
$("#num").keyup(function (){
    var numero=$("#num").val();
    var multipliacodor=1;
    var resultado;
    for (var i = 1; i <= numero; i++) {
    	multipliacodor=multipliacodor*i;
	}resultado=multipliacodor;
	$("#resul").val(resultado);
});
$("#buscar").click(function (){
	var nombre=$("#nombre").val();
	var clave=$("#clave").val();
    $.get("ht",{"op":2,"nombres":nombre,"pass":clave},function (data) {
        alert(data);
    }); 
});


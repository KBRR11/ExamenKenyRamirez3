$(document).ready(function() {
	alert("hola");
	listar();
	});
function listar() {
	$.get("uc",{op:1},function(data){
		alert(data);
	})
}
$(document).ready(function (){
	var nombre2=$("#nom").val();
	obtenerid(nombre2);
});
function obtenerid(nombre2) {
	$.get("unv",{"opc":1,"nombre":nombre2},function (data) {
		alert(data);
       var x = JSON.parse(data);
       var id=$("#idper").val(x.idpersona);
    });
}
$("#enviar_2").click(function (){
    var nomper = $("#nom").val();
    var apellper=$("#apell").val();
    var id=$("#idper").val();
    $.post("unv",{"idper":id,"nomper":nomper,"apellper":apellper,"opc":3}, function () {
    	$.post("unv",{"idper":id,"nomuser":nomuser,"opc":4});
    });
    $("#myModal2").modal('hide');
});
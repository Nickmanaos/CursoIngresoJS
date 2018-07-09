/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
/*	
lleve un largo rato modificando los codigos, insistiendo con que no habia error
hasta que finalmente note una A mayuscula en el alert */
var numeroUno=document.getElementById("numeroUno").value;
var numeroDos=document.getElementById("numeroDos").value;
var resultado=parseInt(numeroUno)+parseInt(numeroDos);
alert("resultado "+resultado);



}


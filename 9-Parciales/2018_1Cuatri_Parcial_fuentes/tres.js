function mostrar()
{
 var precio =prompt("Ingrese precio");
 var porcentajeDescuento=prompt("Ingrese porcentaje de descuento");
 var precioFinal = parseInt(precio)% parseInt(porcentajeDescuento);
document.getElementById("elPrecioFinal").value=precioFinal;

 
}

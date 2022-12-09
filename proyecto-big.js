/*
MASTER de Nuevo proyecto
Sistema de subasta de insumos medicos.

1- Sistema de registro GENERAL de usuarios. Hasta 3 intentos.
Con este registro puede ver publicaciones en el sitio con precio, pero NO fechas ni stock disponible.
    user.usuario;
    user.contrasena;
    user.email;
    user.referencia; (si viene referido por otro user, lo debe colocar aqui)

Si el usuario quiere OPERAR dentro del sitio debe completar estos datos a su registro.
    user.nombre;
    user.apellido;
    user.celular;
    user.empresa;
    user.cuit;

El sistema contabilizara ciertas acciones y brindara un user.credito en base a parametros.
    user.cantCompras;
    user.cantVentas;
    user.cantProdAlaVenta;
    user.cantReferencias;
    user.credito;

    Con cada compra el usuario suma 10 creditos.
    Con cada venta el usuario suma 5 creditos.
    Con cada producto que haya publicado a la venta, suma 1 credito.
    Cada usuario que se registra utilizando su codigo de referido, suma 2 creditos.

    Los creditos tendran 180 dias de validez, si no se utilizan se vencen.

El credito de cada usuario le permite operar dentro del sitio, ya que las operaciones tienen costo.

2- Determina si user registrado compra o vende.
    user.rol;

3- Sistema ingreso de nuevos productos.
    producto.fechaIngreso; (lo toma de sistema)
    producto.foto;
    producto.nombre; 
    producto.medida; (french,mm, lpm, etc)
    producto.marca; 
    producto.modelo; 
    producto.cantidadLote; 
    producto.fechaVencimientoReal;
    producto.fechaMaximaVenta;
    producto.precioLote;

****************************************************************************

HOME
En la home va a haber un menu, sector de registro/login, banner con oferta para comprar creditos, un main explicando el sitio, 
la ofertas disponibles con nombre/precio/foto y dias restantes de validez de la oferta.

Los productos con plazo mas corto de validez de la oferta (menor diferencia entre fecha actual HOY y fecha maxima de venta) 
estaran al comienzo EN ORDEN.

Formulario de suscripcion a newsletter con ofertas.

Si el navegante hace clic para ver descripcion de alguna oferta, se lo dirigira al sistema de registro/login.

*******************************************************************************

Una vez registrado y logeado
El usuario podra acceder a ver todos los productos cargados en el sitio, EN ORDEN.

Cada producto se exhibira con foto, nombre, marca, fecha de vencimiento, stock disponible (LOTE) y precio (LOTE).
Tendra habilitada la opcion de SALTEAR o OFERTAR. Ambas acciones tienen un costo de 1 credito.
Al hacer clic en SALTEAR, se consume un credito y aparece la opcion SALTEAR o OFERTAR en el siguiente producto.

Si elige OFERTAR, se consume un credito y se debera indicar si desea adquirir el LOTE o que cantidad desea y cuanto pretende abonar por el LOTE o por la cantidad que desea.
Esta oferta se le hace llegar al user.propietario al correo que indico al momento de su registro.

El user vendedor ingresa con su usuario y selecciona en el menu "ver propuestas".
Le van a aparecer en orden de llegada, las diferentes ofertas que recibio por sus productos a la venta, pero solo vera la cantidad que le quieren comprar.
Para poder ver la oferta COMPLETA, de precio y cantidad, debe consumir un credito.
Para saltearlo y ver los datos de la siguiente oferta, tambien debera consumir un credito.



*/

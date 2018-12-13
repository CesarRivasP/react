SINGLE PAGE APPLICATION AND MULTI PAGE APPLICATION (MVC)

* MULTI PAGE APPLICATION (MVC)
En general esta representado por la arquitectura MVC, ya que es la arquitectura que se sigue en los modelos de aplicaciones de múltiples paginas.
- Cada vez que se solicita una URL nueva (new page), el proceso es este:
  + El navegador solicita la pagina al server
  + El server realiza los procesamientos de datos que sean necesarios en cada caso
  * A partir de esos procesamientos genera el HTML
  * El HTML viaje mediante la red
  * Se despliega en nuestro navegador
(Siempre se ejecuta este proceso en MVC)

Explicado todo este proceso, por eso es que percibe el cambio de pagina para los usuarios, ya que al hacer una actualización se actualiza completamente la pagina.

Frameworks que utilizar MVC
  - .net
  - Laravel (Varios frameworks de php)


* SINGLE PAGE APPLICATION
Se trabaja de una manera distinta, puesto que la aplicación vive en un HTML que en el momento de la primera solicitud al servidor, se trae el HTML, el bundle de javascript (que es donde esta toda la definición de la aplicación). En este bundle de JS, en base a los condicionales que se hayan puesto, se van renderizando las distintas paginas en base a lo que vaya solicitando el usuario.
Nota:
* Se puede manupular la URL para ver modificaciones en la URL de manera que el comportamiento de navegacion de una pagina sea tal cual el que se lograba en MVC. Es decir, que se puede cambiar la URL sin tener que recargar la pagina, sin tener que ir a buscar al server nueva informacion. Para lo unico por lo que hay que buscar nueva informacion es cuando se necesita una respuesta de datos, no va a viajar parte del html como en MVC. En el resquest al server van a viajar respuesta en formato generalmente JSON con los datos que se hayan solicitado.
La api en el backend, en base a lo solicitado, mediante http va a realizar la respuesta. En base a eso va a alterarse el estado de la app, y se va a volver a renderizar, pero siempre sin recargar la pagina.
* Nunca se recarga
* Se logra una mejor UX (USER EXPERIENCE)
* Mejor velocidad en el momento de la carga de los modulos. (Solo se hace una vez)


Actualmente se esta imponiendo el SINGLE PAGE APPLICATION porque:
- El manejo de routing o el renderizado del lado del server se resuelven de una manera facil
- Permiten mejorar el SEO de la pagina
- Permiten mejorar la carga inicial

Frameworks que utilizar SPA
* REACT
* Angular

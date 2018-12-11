¿OneWayDataFlow y Virtual DOM?

* Funcionamiento del Virtual DOM aplicado al OneWayDataFlow.
El flujo de datos dentro de la jerarquía de componentes de react posee una única dirección en sentido descendente, desde los componentes padres a los componentes hijos.
Es por este motivo que a este tipo de flujo de información se le denomina OneWayDataFlow.
Los componentes padres se encargan de pasar las propiedades que luego utilizaran los componentes hijos, y a su vez estos pasaran las propiedades a sus propios hijos. De esta manera, los hijos nunca se comunican en forma directa con sus padres.
Esta restricción en el sentido de circulación de la información si bien puede parecer una limitacion, en realidad es beneficiosa porque permite aislar e identificar posibles problemas en algun componente en particular mucho mas fácilmente.
Si existe un problema en el componente hijo no quedan mas opciones que sea un error en el mismo componente o en los datos que le paso el componente padre. El problema no puede estar siendo causado por
la interaccion del componente hijo con el componente padre, ni tampoco por alguno de los componentes hermanos.

* Relacion entre OneWay y el DataFlow

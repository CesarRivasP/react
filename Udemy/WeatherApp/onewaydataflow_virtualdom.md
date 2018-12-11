¿OneWayDataFlow y Virtual DOM?

* Funcionamiento del Virtual DOM aplicado al OneWayDataFlow.
El flujo de datos dentro de la jerarquía de componentes de react posee una única dirección en sentido descendente, desde los componentes padres a los componentes hijos.
Es por este motivo que a este tipo de flujo de información se le denomina OneWayDataFlow.
Los componentes padres se encargan de pasar las propiedades que luego utilizaran los componentes hijos, y a su vez estos pasaran las propiedades a sus propios hijos. De esta manera, los hijos nunca se comunican en forma directa con sus padres.
Esta restricción en el sentido de circulación de la información si bien puede parecer una limitacion, en realidad es beneficiosa porque permite aislar e identificar posibles problemas en algun componente en particular mucho mas fácilmente.
Si existe un problema en el componente hijo no quedan mas opciones que sea un error en el mismo componente o en los datos que le paso el componente padre. El problema no puede estar siendo causado por
la interaccion del componente hijo con el componente padre, ni tampoco por alguno de los componentes hermanos.

* Relacion entre OneWay y el DataFlow
- React al barrer la estructura de componentes, con cada uno de ellos, sus propiedades y algunos datos extra, genera una representacion liviana de la vista que usualmente es llamada virtualDOM, este virtualDOM obedece al estado del arbol de componentes en un momento dado, pero al realizar actualizaciones de los datos y las propiedades, se actualiza el virtualDOM y tambien se debera actualizar el DOM real.
Proceso:
1.- Estado inicial: conformado por el estado de cada uno de los componentes.
2.- Se genera el virtualDOM, toma los extractos mas importantes de cada uno de los componentes. Dentro de la tecnologia de React, esto es llamado 'Fiber?'. Cada uno de los componentes tiene información propia del componente mas algunas informaciones extra que permiten confeccionar el virtualDOM.
3.- Se genera el DOM real, en una primera instancia con la primera renderizacion en el proceso de mounting se genera el DOM real dentro del navegador. Una vez que sucede eso, se podrá ver en pantalla los distintos datos que este mostrando el programa hasta que suceda un cambio de estado.
4.- Cambio de estado, puede ser originado por algún tipo de evento con el cual posteriormente se producirá algún cambio en el estado del componente. Cualquier tipo de cambio va a generar un nuevo estado, y con ello un nuevo virtualDOM.
5.- virtualDOM, este nuevo virtualDOM debe tener alguna modificacion con respecto al DOM virtual 1, por lo que se tiene un segundo virtualDOM. En ese momento, una vez que react detecta que hay algun cambio en el DOM va a realizar una comparacion.
6.- Comparacion entre virtualDOM generado en una primera instancia y virtualDOM generado en una segunda instancia, esto es el proceso de reconciliation. Una vez que se ejecuta dicha comparacion, se detectan los cambios y se actualiza lo necesario para que se refresque el DOM real.
7.- Actualiza solo lo necesario de DOM, asi se logra una mayor eficiencia, ya que no hay partes actualizadas dentro del DOM real que no hayan sufrido cambios.

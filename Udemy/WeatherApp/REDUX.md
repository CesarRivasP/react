Redux - Estado de la aplicación
React se encarga de la manipulación de la parte visual de la aplicación.
Es un framework que no opina (Opinionated) sobre como se va a manejar el estado de la aplicación. Allí es donde interviene redux.
Redux es un framework que se aboca exclusivamente a manejar el estado de la aplicación, es su única aplicación.
- No esta ligado en cuanto a su constitución a React, pero en la practica habitualmente se encuentran en conjunto.
- Redux es un framework independiente que se puede utilizar con otros frameworks visuales. No obstante, la implementación que se realiza para vincularlo con React es la mas popular y de mayor utilización, por lo tanto es sobre la que se va a encontrar mas documentación.
- Sin redux el manejo del estado de la aplicación con setStates y manejándolo con el estado dentro de los componentes puede llegar a ser un estado de aplicación mas difícil de trazar, especialmente cuando se tienen funciones asíncronas, ya que esto lleva a un estado de la aplicación que se le denomina 'opaco', y lo que nos proporciona redux es un estado de aplicación mucho mas claro, consistente y facil de entender. Esto nos va a permitir individualizar issues y problemas de una manera mucho mas rápida.

* Store
 Uno de los axiomas sobre los que se base redux es que el estado es único y global en toda la aplicación.
- Va a haber un único componente llamado 'store' donde se guarda el estado de toda la aplicación. Esto permite tener un único punto donde se pueda ver el estado de todos los componentes que luego se renderizan. Así es mas sencillo acceder al estado, y se puede ver que el estado va a ser en forma de árbol, con distintas propiedades que se van ramificando hasta llegar al estado individual de cada uno de ellos (al final se asocian los componentes a ese estado individual).

* Action
 Otro de los axiomas es que el estado se modifica por acciones.
 - La única forma de modificar el estado (READ ONLY), es mediante la emisión de acciones.
 - Las acciones pueden tener a su vez asociados valores, en los cuales se le indica que es lo que se quiere modificar de ese estado, pero la única forma que nos proporciona redux de modificar ese estado de la aplicación es mediante actions.
 - Las actions van a establecer una copia del estado actual, sobre esa copia le van a aplicar las modificaciones pertinentes, y se va a generar un nuevo estado.
 - Solamente mediante acciones se va a poder hacer la transición de un estado a otro.
 Ejemplo:

  state1 => state2 => state3

+ State1 simboliza la aplicación de una acción.
  - Se aplica la acción con un determinado valor que modifica valor del state1 a un state2.
+ El state2 hace una copia del state1 mas la modificación establecida por la acción.
+ Luego se hace la transición del state2 al state3.
Esto nos indica que tenemos distintas copias del estado. Cuando se llegue al state3 se puede hacer deshacer, y volver al state2, ya que lo que tenemos es una copia establecida.

Con la definición de la arquitectura de Redux, tenemos transiciones de estado mucho mas claras. Y por mas que se generen eventos asincronicos, como después esos eventos deben corresponderse con acciones, y eso después establece transiciones de estado que son guardadas, nos permite ver como se ejecutan esas transiciones independientemente de que los eventos se hagan de manera asíncrona se puede hacer una traza de las modificaciones mucho mas fácil.

* Una de las claves de como se manejan los estados dentro de Redux es que es un estado inmutable, y lo que se hacen son copias. Entonces, al no permitir mutaciones se hace una renderizacion mucho mas rápida porque las comparaciones que lleva a cabo react en los procesos de Reconciliation y otros, se establecen a nivel de objeto si hay modificación o no, y esto hace que sean mucho mas eficientes las renderizaciones.
- Se utilizan librerías como inmutableJS (No se permiten mutaciones)

* Reducer
Es una función.

* Dispatch
Es un método que ayuda a disparar una acción.


* Instalación de Redux
- La libreria core de redux es independiente de React, ya que redux esta intencionadamente separado de React. Esta pensado para que pueda ser utilizado con Javascript plano, u otro framework visual como Angular, por decir alguno.
- La libreria react-redux es la que realiza la vinculacion entre los dos frameworks.

* Inicio
- createStore va a generar el store, que es el lugar donde se va a poner todo el estado de la aplicación.
-  La funcion createStore espera como parametro a un 'reducer'.

- Una action es un objeto que viene identificado por un 'type'(nombre que identifica el tipo de acción), y se le pasa como valor el dato que se esta cambiando.

- Se debe abstraer lo maximo posible la logica del dispatch de las acciones, o la lógica de modificación del store.
- Toda la manipulación del estado debe quedar por fuera del componente.
- Se debe alejar el componente del manejo del estado (lo que esta en el store).

- En vez de hacer un dispatch directo de la accion, se puede hacer un action creator.
- El action creator es una funcion que se le pasa al dispatch para luego ser utilizada.
Nota:
En vez de hacer el dispatch de una acción directamente, se llama a un actionCreator. De esta manera estandarizamos la forma en que se llaman a la acciones y también se le proporciona un nombre a esa acción.


* El type es el identificador de la acción y este en la parte del reducer se va a utilizar para catalogar que se debe hacer ante una accion.
Se genera una accion.
La accion genera una modificacion

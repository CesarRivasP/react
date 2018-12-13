Proceso de Reconciliación
React nos permite abstraer de las modificaciones de estado de los componentes y como estas modificaciones actualizan la pantalla.
La mayor parte del tiempo podemos trabajar dentro de los componentes sin prestar atención a como estos funcionan internamente. Esto nos permite concentrarnos en las funcionalidades de la aplicación y avanzar
sin necesidad de que se conozca su procedimiento de actualización.
Ante cada modificación de alguna propiedad o estado de nuestros componentes, react arma una representacion
de la estructura de componentes en forma de arbol (Virtual DOM) que compara con la representacion anterior.
Para realizar una actualizacion inteligente de la pantalla, React debe aplicar un algoritmo que encuentre solo las diferencias entre la estructura previa y la posterior al cambio, y con ello generar la minima cantidad de operaciones para transformar el arbol de componentes previo a la modificación en el nuevo arbol, con la modificacion aplicada.
Comparar dos arboles de componentes es una tarea muy costosa en tiempo, por lo que se siguen algunas heuristicas que permiten acelerar este proceso, es decir, se base en algunos artilugios que requieren que el desarrollador siga algunas buenas practicas para que realmente funcionen como se espera.
Los principios de la heuristica son dos:
1.- Dos elementos o nodos de diferente tipo producirán arboles diferentes.
2.- Cuando existieran elementos hijos del mismo tipo, el desarrollador puede proveer una clave (key) para indicar cuales elementos permanecen estables entre diferentes renderizaciones.

* Cuando se detecta un cambio?
Mecanismo de Diffing
Tiene varios pasos:
- Primer Caso
Cuando se cambio el tipo del elemento dentro de una rama del arbol. Si por ejemplo, se paso de un "div" a un "span", entonces se asume que se cambio toda la rama que estuviera por debajo de ese cambio. En ese caso se desmontara el componente anterior mediante el componentWillUnmount y se montara el nuevo con componentWillMount. El estado del componente anterior al cambio se perdera por completo.

<div>
  <counter /> X
<div>
---
<span>
  <counter /> V
<span>

- Segundo Caso
Actualización de componentes. Cuando react compara elementos del mismo tipo se fija en los atributos y solo actualiza los atributos que hayan cambiado. Luego, sigue la comparación sobre los elementos hijos.
A diferencia del primer caso, en la actualización de un componente de un mismo tipo se mantiene el estado y solo se invoca el evento componentWillUpdate.
<div className="before" title="stuff" />
<div className="after" title="stuff" />

- Tercer Caso

Comparacion de elementos hijos. Se produce este proceso de comparacion cuando el elemento padre es el mismo, pero se actualizo. Por ejemplo, podria tratarse de un div o cualquier componente que contenga otros componentes. Entonces, react va iterando recursivamente sobre el arbol de componentes hijos y compara por posicion el componente hijo anterior a la modificacion y posterior, generando los cambios necesarios cada vez que encuentra diferencias entre los valores de sus propiedades.

- Comparacion al detalle de lo que debe realizar el mecanismo de Reconciliación para los componentes hijos.
//lista no ordenada
<ul>
  <li>first</li>
  <li>second</li>
</ul>
//Al agregar un tercer elemento
<ul>
  <li>first</li>
  <li>second</li>
-> <li>third</li>
</ul>

En este caso, react va a tomar al primer elemento "first", no va a encontrar modificaciones. Va a tomar el segundo, y va a ocurrir lo mismo. Al final, solo insertara el tercer elemento que es el que realmente se esta modificando.

* Otro Caso
<ul>
-> <li>duke</li>
  <li>villanova</li>
</ul>
//Al agregar otro elemento
<ul>
-> <li>connecticut</li>
  <li>duke</li>
-> <li>villanova</li>
</ul>

Al agregar otro elemento "connecticut", este elemento se agrega en la primera posición, por sobre los elementos anteriores. Como esta el ejemplo, react encontrara diferencias en todas las posiciones al comparar el primer elemento, con el nuevo primer elemento y notara que hay un cambio, al igual que con el segundo elemento. Ademas insertara un nuevo elemento al final "villanova".
Como se puede ver, el cambio no se realizo de la mejor manera y es muy ineficiente. Especialmente se puede notar en listados con gran cantidad de items.

- Keys
Es necesario utilizar las keys del componente.
Estas son parte del segundo principio de la heuristica de comparacion del mecanismo de Reconciliación
Ejemplo con keys:
<ul>
-> <li key="2015">duke</li>
  <li key="2016">villanova</li>
</ul>
-------------------------
<ul>
  <li key="2014">connecticut</li>
  <li key="2015">duke</li>
  <li key="2016">villanova</li>
</ul>

React revisara las claves, y va a encontrar modificaciones entre los elementos que tengan las mismas claves, ya no por posicion. Y cuando encuentre una clave nueva sabra que tiene que insertar este nuevo elemento.
En este ejemplo seria el que tiene la clave "2014".
Nota:
Es muy importante que las claves no sean claves aleatorias o random, ya que de esa manera la heuristica  funcionaria muy poco eficientemente. Tampoco se deberia utilizar el numero de indice como key, ya que tambien podria tener un rendimiento inferior al optimo e inclusive podria ocasionar algunos issues.
Para que una clave sea buena y genere un buen rendimiento, puede ser una propiedad de los datos que se van a mostrar, y debe permanecer estable entre renderizaciones.


Reconciliatión and ShouldComponentUpdate
- Cuando el ShouldComponentUpdate retorna false no debe seguir analizando, se cancela todo el proceso de verificación, tanto el proceso de Reconciliation como de deffing, se evitan esos procesos. Por eso, una de las formas de hacer mas eficiente el renderizado es utilizando correctamente el ciclo de vida ShouldComponentUpdate.
- Cuando el ShouldComponentUpdate retorna true indica que se debe seguir con el proceso de Reconciliation, de manera que compara los VirtualDOM equivalentes. Si retorna false, es que no son equivalentes, al encontrar diferencias en el Virtual DOM ejecuta una actualización del DOM real y solo modifica lo que sea diferente.
 Si retorna true, y al comparar los Virtual DOM son equivalentes, no se hace una re-renderizacion.
 Todos estos procesos react los ejecuta constantemente, siempre que los componentes llaman al render.

 Performance
 - La función render debe ser una función liviana, la cual solo modifica el DOM en los casos que son necesarios.
 - Por eso es importante que la función render sea lo mas simple que se pueda, y no deben de haber procesamientos extra de ningún tipo, debe ser exclusivamente centrado en la renderizacion y no en procesos.

Arrow Functions
- No vincula sus propios 'this', 'arguments', 'super' o 'new Target'.
- Estas funciones siempre son anónimas. No existe una definición de dicha función, sino que se asigna a una constante.
- Son funciones no relacionadas con métodos, y no pueden ser usadas como constructores.

Componentes
- Props es un nombre estándar a la hora de pasar parámetros en componentes.
- Cuando se tiene un componente que retorna su contenido en una única linea, se pueden utilizar paréntesis para abarcar el contenido de la función.
- Si esta función tiene mas de una linea, debe utilizar return para envolver dicho contenido.

Destructuring
- Es una tecnica que nos permite asignar valores a variables desde un objeto mas complejo, o desde arrays con varios elementos mediante la técnica de 'Object pattern'.
- Se refiere a que cuando se tiene una propiedad con un nombre que luego se quiere asignar a una variable o constante con el mismo nombre que la propiedad, esta se puede asignar de forma directa utilizando dicha técnica (Destructuring).
- Se tiene :
  Destructuring Target <= Destructuring Source
    * Destructuring Target: en este es donde se aloja el valor después de realizar el destructuring.
      Ejemplo:
        Destructuring de objects
        + const obj = { name: 'Cesar', nick: 'oke' }
          const { name: myName, nick: myNick } = obj
          myName //'Cesar'
          myNick //'oke'
          nick //Undefined
            'Se asigno un valor a myName y myNick'
            Destructuring de objects con simplificacion de propiedades
            + const { name, nick } = obj
              name //'Cesar'
              nick //'oke'
      Destructuring de arrays
      + const myArray = ['a', 'b']
        const [x,y] = myArray
        x //'a'
        y //'b'
- También puede utilizarse para asignaciones con 'const', 'let', y var.
- El destructuring se puede anidar de manera que se puede hacer destructuring de objetos con estructuras anidadas o de arrays que tienen arrays como elementos.
- Al hacer destructuring sobre un objeto, no es necesario tomar todas sus propiedades, se pueden tomar solo las que se necesitan.
  + const source = {x: 7, y: 5}
    const {x} = source
    x //7
    y //undefined

- También se pueden establecer valores por defecto a las propiedades.
  + const {x, y = 5} = {}
    x // undefined
    y // 5

- En el destructuring de arrays se puede utilizar 'elision'. De esa forma se pueden omitir uno o mas elementos de determinada posición del array.
  + const [,,x,y] = ['a','b','c','d']
    x //"c"
    y //"d"
    'a' y 'b' no están asignada a ningún tipo de variable.

- Tambien se puede utilizar el 'rest operator' en conjunción con destructuring para extraer los elementos remanentes, los elementos que queden, despues de tomar los primeros identificados. Nota: Este tipo de operador con tres puntos, se parece al 'spread operator', pero su funcion es diferente.
  + const [x, ...y] = ['a','b','c']
    x //'a'
    y // ["b", "c"]


Otros apuntes
 - Si realmente desea confirmar que una variable no es nula y no es una cadena vacía específicamente, escribiría:

      if(data !== null && data !== '') {
         // do something
      }

    Observe que cambié su código para verificar la igualdad de tipos ( !==| ===).

    + Si, sin embargo, solo quiere asegurarse de que un código se ejecutará solo para valores "razonables", entonces puede, como ya han dicho otros, escribir:

      if (data) {
        // do something
      }
    Dado que, en javascript, tanto los valores nulos como las cadenas vacías, es igual a falso (es decir null == false).

    La diferencia entre esas 2 partes del código es que, para la primera, cada valor que no sea específicamente nulo o una cadena vacía, ingresará el if. Sin embargo, en la segunda, cada valor 'true-ish' entrará en los if: false, 0, null, undefined y cadenas vacías, no lo haría.

- Se acostumbra importar solo lo que se necesita, ya que de esa manera
se logra que nuestra librería o bundle final este mas optimizado, pese menos.

- Con el uso de Constantes logran un código mas estructurado, y también este permite trazar los errores mas fácilmente, porque se establece que valores son posibles y ese evita que hayan equivocaciones a la hora de escribir ciertos valores.

Refactorizacion
- A la hora de establecer la ruta de un archivo haciendo referencia a la carpeta de este, sin indicar el nombre del archivo en especifico, este busca directamente al archivo index.js
Ejemplo:
  import WeatherData from './WeatherData'; --> Buscara al index.js

Estilos
- Al trabajar con HTML se implementan los estilos mediante 'class' y el nombre de la clase css, en react, para que no genere conflictos con el nombre original, se llama 'className' y allí se le pasa el nombre de la clase.
- Las clases css se expresan de la siguiente manera:
  .[nombre de la clase]{
    estilos ...
  }

En React existen dos tipos de componentes:
- Class Components (Componentes tipo clase)
  * Es una clase que extiende del objeto component y luego del método render es lo que permite dibujar dicho componente
- Functional Components (Componentes funcionales)
  * Se define mediante una arrow function lo que ese componente va a dibujar en pantalla. (No tiene un método 'render')

Transformar un componente funcional en uno tipo clase
- La funcionalidad de ambos es la misma.
- Solo cambia el cuerpo de la función, el cual ahora se encuentra dentro del método render.
- Se utilizan componentes funcionales cuando no se necesitan los métodos extra que puede brindar un componente de tipo clase, su enfoque es que es el componente mas simple a la hora de usar e implementar.
- Se utiliza un componente de tipo clase cuando se necesita utilizar alguna de las instancias del ciclo de vida del componente que nos proporciona React.

- Cuando se esta trabajando dentro de un componente de tipo clase, para hacer referencia a los métodos o funciones que están dentro de ese componente se tiene que utilizar la palabra reservada 'this'.
- Solo se puede utilizar this.state e igualarlo a algún objeto dentro del constructor.
- En el resto de las oportunidades se debe invocar a 'this.setState' para actualizar el estado, y en dicho método hay que pasarle el nuevo estado.
- Ciclo de vida de un componente, pasos:
 * Constructor: donde se establece el estado del componente.
 * Con el estado inicial se hace una primera renderizacion.
 * Al hacer el setState, este le indica a React que va a hacer una          actualización del estado, y se establece el nuevo estado.
 * Luego que se establece el nuevo estado se le indica una nueva renderizacion y se renderiza pasando nuevamente por el método render.
  Constructor -> Estado inicial -> Render -> Evento onClick -> setState() -> 2do Render

Fetch
- La instrucción fetch trae los datos del servidor dando el chance de usar los datos dentro del navegador.
- Es una instrucción nativa, no necesita librerías.
- Axios es una librería externa que brinda retro compatibilidad con navegadores mas antiguos.
- El metodo fetch devuelve una promise cuando aun esa promise no tiene el resultado que se esta esperando.

Promise
- Es un objeto que es utilizado para peticiones asíncronas y representa un valor que puede estar disponible en el momento (ahora), en un futuro o nunca debido a algún tipo de fallo.
- Puede encontrarse en varios estados:
  * Pending (Pendiente)
    Es el estado inicial en cual en ese momento no se encuentra ni cumplida, ni rechazada.
  * Fulfilled (Cumplida)
    La operación se completo satisfactoriamente.
  * Rejected (Rechazada)
    La operación se fallo.

    Ejemplo:
    * Resolve
      let promesa = new Promise((resolve, rejected) => {
        setTimeout(() => {
          resolve("Éxito total!");
        }, 2000)
      });

      console.log("Ahora comienza");

      promesa.then((mensaje) => {
        console.log(mensaje);
      });
      console.log("Aca termina"); //Se ejecutara antes que la promise.

    * rejected
    let promesa = new Promise((resolve, rejected) => {
        setTimeout(() => {
          rejected("Fracaso");
        }, 2000)
      });

      console.log("Ahora comienza");

      promesa.then((mensaje) => {
        console.log(mensaje);
      }).catch((error) => { console.log(error)})

- La sentencia 'then' es una palabra reservada para las promises, que indica que en el momento en el que la promesa sea exitosa, se va a aplicar una función que se va a ejecutar cuando haya terminado exitosamente.
- La sentencia 'catch' se utiliza para mostrar el error. Se cuando el estado es rejected pasa por aquí.

SOLID
- S -> Single Responsability - Única Resposabilidad
    - Cada una de las clases tiene que tener una única responsabilidad para poder tener el menor nivel de acoplamiento para que después pueda ser transformada lo mas rápido posible en caso de que se necesite.
      * Los componentes visuales solo deben encargarse de la UI.
- Es uno de los patrones de diseño mas utilizados.


- Se usan llaves al importar cuando al exportar no se utiliza la palabra default.

Lifecycles
- Fase de montaje de montaje del componente
  Cuando el componente se incorpora dentro del árbol de componentes que esta incluido dentro del DOM.
   En esta fase se tienen tres eventos principales:
   Fase de Montaje
     * Ciclo de Montaje (1er ciclo)
        - Se ejecuta el Constructor (inicializar un estado o 'bild' (bildear funciones)). No es necesario hacer bild si se trabaja con la sintaxis de ecmascript.
        1.- UNSAFE componentWillMount: Si lo que se quiere es buscar datos en el servidor lo antes posible, se podria hacer en el componentWillMount, donde siquiera se hizo el render. Entonces si el servidor responde rapido quizas no se renderice nunca y se evita hacer doble renderizado
        2.- render (Sacar el JSX que se va a mostrar en el DOM)
        3.- componentDidMount (Punto de inicializaciones, de ir a buscar al servidor): Si se coloca en el componentDidMount, entonces se renderiza la primera vez, cuando aun no tiene los datos y posteriormente se va a tener que volver a renderizar.
    * Ciclo de Actualizacion
      1.- UNSAFE componentWillUpdate
      2.- render
      3.- componentDidUpdate (Solo se ejecuta cuando hay actualizaciones, no se ejecuta la primera vez, solo cuando hay una actualización (se modifica alguna props o cambia algo en el estado))

Nota: a pesar de las observaciones hechas sobre el componentWillMount y el componentDidMount sobre el momento en el que se deberia ejecutar una llamada con respecto al momento en el que se hara el render, de igual manera no se puede evitar el primer renderizado en el cual aun no se tienen datos. Se debe tomar en cuenta esa situacion en la que no se tienen los datos y mostrar algo que el usuario pueda ver para indicarle que estan por venir los datos (Loading). Es decir, que por mas que se quiera poner lo antes posible la carga, no se va a lograr que el resultado venga antes del primer renderizado.
  - Por lo que no se debe poner en el componentWillMount
Ejemplo para ver el orden en el que se ejecutan:

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }

  //React no recomienda su uso
  //Van a ser eliminados en la version 17
  componentWillMount(){
    console.log("UNSAFE componentWillMount");
  }
  //UNSAFE: Este prefijo indica que estan marcados como inseguros.
  componentWillUpdate(nextProps, nextState){
    console.log("UNSAFE componentWillUpdate");
  }

Operador Ternario (if en linea)
                                                  (si no)
 data ? (data viene con algo ?) si tiene algo(true) : la otra opción.

Herramienta
Eslint
- Los linter nos permiten incrementar la calidad del código puesto que pueden detectar bugs potenciales y también permiten mejorar la mantenibilidad del código. Son herramientas automatizadas que al correr nos evita tener que realizar manualmente trabajos de relevamiento de código y encuentra errores y malas practicas que usualmente se pasan por alto.
- Realiza una validación bastante liviana, similar a la de un compilador en un lenguaje tipado, pero sin llegar al nivel de validación que este tipo de herramienta puede llegar a tener.
- En .eslintrc se configuran un conjunto de reglas.
- Pasos para instalar:
  1.- npm i eslint -D
  2.- eslint --init
  3.- Use a popular style guide -> Airbnb
  4.- What format do you want your config file to be in? -> JSON


- Los componentes funcionales no tienen estados (statelest components?)

- Para cada uno de los elementos que se estén generando dentro de un determinado <div>, necesita una clave que sea única. Esta es necesaria para poder hacer mas eficiente el re-dibujado de los componentes que se encuentran en este caso, dentro de la lista (LocacionList). Sin esa key, cuando se quiera refrescar cualquier componente de la lista, cada uno de los ítems va a ser re-dibujado, entonces en el caso de tener muchos componentes, el tener la clave única evitaría que React tenga que hacer un re-dibujado completo de todo por las dudas de si es que cambia  alguno de los componentes. Entonces de esa manera podría hacer un mapeo mas eficiente entre el componente que ya existe y el componente nuevo, por lo que de esa manera solo renderizaria lo que ha cambiado.
Se puede solucionar el problema de las keys de dos maneras:
 1.- Utilizando el index que la función 'map' provee, y en base al indice sabiendo que este es único, establecer el key.
  Tambien hay que tomar en cuenta que el key basado en el index no es una clave natural, por lo que al querer reordernar los componente o agregar un componente, y eso modifica el indice va a terminar React revisando componente por componente para ver que se modifico, y eso es lo que se busca evitar.
  * Cualquier componente de React que se genere dentro de un array (el cual genera una lista de esos componentes)
  va a necesitar una key.

Media Queries
- Es una tecnica basica de CCS3 que mediante la detección de los tamaños en pantalla del 'viewport', que es el lugar donde nuestra pagina se esta renderizando.
  * Mediante la detección de ese tamaño, se puede determinar ante diferentes tamaños el css que se quiere aplicar.
  * Estas variaciones van desde colores de fondo, colores de letra, ubicación de los distintos componentes, todo mediante los media queries.

Flexbox
- Es un tipo de display que nos permite ordenar de manera inteligente los elementos que se ubican dentro de los contenedores con el display flexbox. Dicho esto, si bien no se puede tener el grado de control que se posee con los media queries, se pueden determinar distintas direcciones en las que va a aparecer los controles dentro de un contenedor, como va a actuar el espacio que esta por fuera (que divide los contenedores), como va a ser su crecimiento.

- Son cuatro tamaños posibles de pantallas, los cuales se referencian mediante las siguientes siglas:
  * xs - extra small (telefono)
  * sm - small (tablet)
  * md - medium (notebook)
  * lg - large (desktop)
  - Con esto, se le establece al componente un tamaño relativo a ese tipo de pantalla.
  - Esta librería detecta el tamaño de pantalla mediante media querie, y determina en que tamaño de pantalla se encuentra actualmente, y na vez que determina eso, sabe en base a lo que se le establece que tamaño tiene que tener la columna, y la renderiza.
  * Si la sumatoria de la columna es mayor a 12, las columnas pasan a estar en una nueva fila.
  * Cuando no se le establece una definicion explicita para el tamaño de pantalla, se toma el tamaño definido inmediato inferior.

Grid
- Cuando indicar los tamaños de la grilla, y no se le especifica alguno de los tamaños, al ubicarse en su tamaño correspondiente y no tener especificado que tamaño debe tomar, selecciona el tamaño inmediato inferior.
- Las columnas se muestran en la misma fila mientras sumen 12.
Por ejemplo, en caso de que falte lg, tomara md de haber sido declarado.
  * Sin la etiqueta 'fluid' en el grid, no se aprovecha al máximo la pantalla puesto que queda un margen que establece un ancho que es fijo, y de cambiar el tamaño de la pantalla, el tamaño de los elementos es fijo.
  * El fluid hace que se intente ajustar al tamaño total de la pantalla.
- Si las columnas son exactamente del mismo ancho, se puede establecer que ocupen el mismo espacio de la siguiente manera:

  <Grid fluid>
    <Row>
      <Col xs>
        <div className="red"></div>
      </Col>
      <Col xs>
        <div className="green"></div>
      </Col>
      <Col xs>
        <div className="blue"></div>
      </Col>
      <Col xs>
        <div className="yellow"></div>
      </Col>
    </Row>
  </Grid>

  * Y así se dividen el espacio en un 25% (Son cuatro columnas) para cada una.
  * Esa manera en la que se dividen el espacio automáticamente de debe al auto-size que tiene la librería react-flexbox.
  * xsOffset: hace un desplazamiento con respecto a la columna, tantas columnas como le sea indicado.
  * El alineamiento de la fila se puede hacer indicando en rows la siguiente etiqueta:
  (Aplica ara el eje horizontal)
    - start="xs"  (xs es la propiedad que se esta utilizando en el ejemplo)
    - center="xs"
    - end="xs"
  * Cuando el espacio no es totalmente utilizado, o utilizado al 100% porque existe espacio remanente, se pueden usar distintas técnicas para manejar ese espacio, como por ejemplo:
    - around: que establece una distribución de espacio que empieza con un espacio inicial, y luego entre cada uno de los componentes. ejemplo: around="xs"
    - between: los componentes se ubican hacia los extremos (izquierdo y derecho), mientras con around se deja un espacio equivalente con respecto a los bordes.
  * Hay algunas propiedades de esta librería que se comparten con bootstrap, como el sistema de filas y columnas.

State
- El Super constructor al invocarse llama al constructor de component y allí inicializa this, y
una vez que inicializa this es que se puede utilizar el state sin problemas.
- Solo se puede hacer 'this.state =' en el constructor del componente, en ningún otro lugar se puede utilizar esta sentencia, de utilizarse seria 'setState'.
- El setState dispara una nueva renderizacion, y esta renderizacion es de toda la pantalla (todos los componentes). De todos los componentes, el único que modifica es en el que se encuentra los valores que se cambiaron en el setState.

Ciclo de actualización / render
  - Constructor del componente principal (app.js)
    * Dentro de constructor se establece el state con un igual. Ejemplo: 'state ='
    * Si no hay otro manejador de eventos, se ejecuta el render.
  - render ( código jsx (primitivas de html y componentes))
    * También se va a ejecutar el constructor de cada componente (puede estar vació o no)
      + Si el constuctor esta vacio, se llama al super constructor de component.
    * Se ejecuta el render de cada uno de los componentes
      + A su vez, los render's pueden disparar otro nuevos renders de componentes que estén dentro.
    * Una vez termina este proceso, es que se puede visualizar la pantalla
  - Hay distintos métodos que pueden hacer que se realice un nuevo renderizado de los componentes.
    * Modificación del estado (setState)
      + this.setState: react interpreta que tiene que hacer una nueva renderizacion, por lo que vuelve a llamar a la función render de app.js (componente principal), que a su vez vuelve a llamar a cada uno de los componentes.
      Para que dicha sentencia sea eficiente, react lo trabaja mediante un DOM virtual que compara las diferencias que existen del estado anterior con estado nuevo y luego solo renderiza lo que necesita renderizar (lo que cambio), pero en forma visual.
      Es importante no disparar el setState u otras cosas que puedan modificar el renderizado si no es necesario
      + Cuando se cambia una propiedad de algunos de los componentes, tambien se fuerza el renderizado de ese componente.

  Axios
  - Es una libreria que logra un nivel de cobertura para navegadores mas antiguos que el metodo 'fetch'.
    * fetch es bastante soportado por la mayoría de los navegadores, pero axios tiene un nivel de cobertura aun mayor.
    * El método fetch es nativo.

fetch
- Esto genera una promise, y se esperan los resultados con la sentencia 'then' que nos permite obtener el resultados una vez que se termina de ejecutar la promise. Es decir que no se ejecuta de forma asincrona, sino que primero se ejecuta el fetch(url_api), y una vez termina de resolverse y se obtiene el resultado se ejecuta lo que se ponga dentro del 'then'
- Fetch es una sentencia que permite obtener datos del servidor, ya sea hacer un get o http request.

MomentJS
- Esta libreria se encarga de resolver tareas relacionadas con el manejo de fechas.

componentWillReceiveProps
- Se utiliza en casos en los que se quiere actualizar el componente.
- Se ejecuta siempre que se modifiquen las propiedades, excepto la primera vez que se establece el componente.


Los componentes del tipo clase proveen mas potencialidades que los de tipo función, puesto que los de tipo funcion solo son una funcion que renderiza, y los de tipo clase viene asociados a muchas mas potencialidades.
En los de tipo clase, siempre va a existir, al menos, un metodo llamado render, esto es lo minimo que debe poseer el componente para funcionar correctamente.

Principales métodos del ciclo de vida de los componentes en React
Existen tres fases para un componente.
Fases:
- Montaje: es la fase en la cual se realiza en montaje al inicio.
- Actualización: la fase en la cual se actualiza para mostrar datos nuevos.
- Desmontaje: la fase de desmontaje, en la cual el componente deja de estar en pantalla
Alternativamente (Cuando suceden errores)
- Manejo de errores (Error Handling)

* Fase de montaje (Mounting)
  Dentro de esta fase se producen los siguiente eventos:
  - constructor: este método es el primero en ser llamado por React, y sucede antes de que se monte el componente. Se debe utilizar en casos como la inicializacion del estado local del componente meidante this.state o el 'binding' de funciones. (No se ha hecho binding de funciones porque se ha utilizado la sintaxis de ecmascript 6 con arrow functions y de esta manera se evita)
    - getDerivedStateFromProps: fue introducido en React 16
  - render: este es el único método requerido, sirve para generar los elementos de React que van a ser mostrados por pantalla. El render es importante que sea una función pura, y no actualice ni modifique el estado de ninguna manera. Este método debe ser liviano, y que solo se encargue de armar la parte visual.
  - componentDidMount: es invocado luego que el componente es insertado en el árbol de componentes del DOM

  * Fase de actualizacion de los Componentes (Update)
    - render
    - componentDidUpdate: este método es invocado inmediatamente después de que ocurre una actualización. Este método nos permite comparar los valores de la propiedades antes de la actualización y después de la actualización, y por ejemplo, realizar una petición al servidor en función de esos valores
    Otros menos utilizados:
    - getDerivedStateFromProps: fue introducido en la reciente versión de react 16.
    - shouldComponentUpdate: Se utiliza inmediatamente despues que ocurre una actualizacion. Ayuda a mejorar la eficiencia, pero solo debe utilizarse en casos muy particulares.
    - getSnapshotsBeforeUpdate: fue introducido en la reciente versión de react 16.
* Fase de desmontaje del componente (Unmounting)
Se ejecuta cuando un componente va a ser tirado del DOM, el metodo que maneja esta fase es el componentWillUnmount.
  - componentWillUnmount: Dentro de este metodo se pueden realizar tareas de limpieza como invalidar timers, cancelar peticiones al servidor o eliminar cualquier tipo de subscripcion que puediera haberse hecho en el componentDidMount.

* Fase de Manejo de errores (Error Handling)
Solo se ejecutara en caso de que suceda algún problema en el renderizado del componente en alguno de los métodos del ciclo de vida o en el constructor de cualquiera de sus componentes hijos.

* UNSAFE METHODS
Previo a react 16 estaba el método componentWillMount, el cual es desaconsejado por react y lo han declarado como inseguro. Junto a este método, el componentWillUpdate, y el componentWillReceiveProps. Este ultimo fue declarado unsafe porque supuestamente los desarrolladores tendían a utilizarlo de manera que generaba bugs e inconsistencias.
Todos estos métodos declarados unsafe quedaran deprecados en la versión 17 de react.


¿Que es lo que genera que un componente se actualice o re-renderice?
Al hacer:
- SetState: cuando se establece un nuevo estado
- Cuando desde un componente padre se modifican las props
- Cuando se llama al forceUpdate

Cualquiera de estos tres eventos genera la re-renderizacion del componente y una actualización en pantalla.
¿Que elementos se pueden renderizar?
1.- Los react elements que son componentes nativos y componentes de usuarios extendidos de Component JSX.
2.- Se pueden renderizar como nodos de texto tanto strings como numeros.
3.- Si se necesita algún componente que no renderice en ningún tipo de HTML element, podemos renderizar con Null o false.

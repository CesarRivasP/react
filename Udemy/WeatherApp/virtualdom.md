¿Que es el virtual DOM?
Virtual DOM - Estructura de componentes en forma de Árbol (Comúnmente denominada Virtual DOM)
En las paginas web, el navegador mantiene una representación de los elementos visuales que se muestran en la pagina, esta estructura se denomina DOCUMENT OBJECT MODEL (DOM).
Dentro de la estructura de datos que se mantiene en el DOM, se tiene una jerarquía de objetos HTML que el navegador puede representar y cada vez que existe alguna modificación en este DOM, se generan modificaciones visuales en pantalla.
Muchos de los frameworks y librerías visuales basados en JS se encargan de modificar el DOM del navegador y de esta manera consiguen manipular la interfaz grafica. El problema con ese tipo de solución, es que alterar el DOM real es una tarea costosa en tiempo y no resulta ser performante al menos que se realice de manera muy selectiva.
Todo esto, se refiere a que se deben modificar los elementos del DOM que realmente fueron modificados.
React logra los antes mencionado mediante la utilización del Virtual DOM.
React mantiene en memoria una representación liviana de cada uno de los componentes generados, y ante cada modificación de los mismos, ejecuta una comparación y determina los cambios que existieron e impacta solo estos cambios finalmente en DOM real, evitando actualizaciones innecesarias, y haciendo este proceso tan eficiente como pudiera ser.

REACT FIBER
En la ultima versión de react aparece un nuevo núcleo de renderizacion, donde ademas se ejecuta el proceso de Reconciliation
que se llama 'React Fiber'.
Se hizo un refactoring completo del motor de evaluación del DOM virtual, pero al momento de utilizarlo es completamente retro-compatible con las versiones anteriores. En esta evolución se mantuvo el 100% de todas sus características y se pasar al nuevo motor de re-renderizacion 'fiber' sin ningun tipo de modificaciones en nuestras aplicaciones.
No solo ayuda a una mejor renderizacion de las aplicaciones pensadas para la web, sino también para react native.
En el se hace un renderizado incremental mucho mas eficiente solamente en los momentos que se necesita.

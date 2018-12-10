import moment from 'moment';


const transformForecast = (data) => (
// Se quieren filtrar los pronosticos correspondientes a las horas 6,12,18,
// por lo que hay que hacer un filtrado sobre la informacion por medio del metodo 'filter'.
  data.list.filter(item => (
    // Dentro de data se busca la propiedad 'list', a la que se le aplica el filter.
    // Va a analizar item por item y revisando la condicion que queremos que cumpla lo va a incluir en el array resultante
    moment.unix(item.dt).utc().hour() === 6 ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
  ))
); //va a retornar un objeto, para que el state deje de ser nulo en ForecastExtended
//Esta funcion permite establecer un nuevo estado dentro del state dentro del componente
export default transformForecast;
/* Con el servicio transformForecast se busca analizar si la informacion que llega es la que necesitamos, y si es asi,
transformarla de manera que se pueda usar para generar los componentes. */
/* El metodo filter recibe una funcion que retorna un booleano, y en base a ese booleano establece si el elemento
va a ser parte del array resultante o no. */
/* dt es el dato que corresponde a la hora del pronostico que esta expresado en formato UNIX, de manera que se le da
uso a la libreria moment, y se le indica que se le va a generar un valor en base a un dato UNIX (item.dt) y que se
necesita evaluar la hora.*/
/*
Para asegurar el funcionamiento en paises con horario UTC no multiplo de 3, agregar 'utc()'
*/

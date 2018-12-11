PropTypes
- Ayuda a validar las propiedades que le pasamos como parámetros a los distintos componentes.
- 'isRequired' se utiliza a la hora de evitar que se validen propiedades con valores nulos. Con isRequired una vez que esta marcada una propiedad
como requerida, va a ser necesario pasar valores diferente de nulo, diferente de empty.
* Tipos de validaciones disponibles
- optionalArray -> PropTypes.array: cuando se espera que la propiedad sea un array.
- optionalBool: PropTypes.bool
- optionalFunc -> PropTypes.func: cuando se va a pasar un parámetro del tipo funcion.
- optionalNumber: PropTypes.number
- optionalObject: PropTypes.object
- optionalString: PropTypes.string
- optionalSymbol: PropTypes.symbol
- optionalNode: PropTypes.node : Para cualquier tipo de parámetro que pueda ser un elemento React, pero ademas incluye números, strings, elementos o fragmentos de estos tipos, es decir, es una categoría mas amplia.
- optionalElement: PropTypes.element: La propiedad debe ser un elemento React.
- optionalMessage: PropTypes.instanceOf(Message): Acepta instancias de un objeto, como aqui, por ejemplo 'message'.
- optionalEnum: PropTypes.oneOf(['News', 'Photos']): Se utliza para establecer que puede ser cualquiera de las dos propiedades indicadas que se pasan dentro del array.
- optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]): Establece que lo que se va a validar sea una propiedad de estos tipos, los cuales en este caso serian un string, number, o una instancia de un objeto.
- optionalArrayOf: PropTypes.arrayOf(PropTypes.number): Especifica que no solo va a ser un array, sino que debe ser de tipo numérico.
- optionalObjectOf: PropTypes.objectOf(PropTypes.number): Especifica que no solo va a ser un objeto, sino que debe ser de tipo numérico.
- optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }): Establece que se va a aceptar unos determinados tipos de objetos en los cuales se conoce que tienen unas determinadas propiedades, de manera que si dicho objeto posee estas propiedades podrá ser validado. En este, se deconoce el tipo de objeto, solo se conocen algunas de sus propiedades las cuales se exigen para poder validar dichos props.
  * En las validaciones con isRequired se pueden concatenar cualquiera de las validaciones explicadas anteriormente con la palabra isRequired, por lo que no solo va a validar que el tipo sea correcto, sino que también sea required (no lleguen valores nulos o undefined) dentro de esa propiedad.
- requiredFunc: PropTypes.func.isRequired
- requiredAny: PropTypes.any.isRequired: No importa el tipo, solo que la propiedad sea required.
- customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}; -> Se utiliza para hacer validaciones en las que se deba pasar una función con tres propiedades, y en base a esas propiedades se pueda hacer la validación. (Rara vez se utiliza este caso en especifico)
Ejemplo:
No hay muchos momentos en los cuales una validación tan específica tenga sentido ponerla como PropType, pero este podría ser un ejemplo, donde valida que el valor de la propiedad no tenga más de 140 caracteres:

  function tweetLength(props, propName, componentName) {   

    componentName = componentName|| 'ANONYMOUS';   

    if (props[propName]) {     
      let value = props[propName];     
      if (typeof value === 'string') {         
        return value.length <= 140 ?
          null :
          new Error(propName + ' in ' + componentName + " is longer than 140 characters");     
      }   
    }    //   
    return null;
  }  

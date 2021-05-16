# Prueba API REST

#### v-1.0.0

## Configuración y Despliegue.

Aspectos a considerar:

- Se describe el proceso de instalación y despliegue para la aplicación.
- Seguirlo paso a paso debería garantizar la correcta instalación y posterior despliegue o puesta en funcionamiento de los servicios. 

### 1. Prerrequisitos.

**Se deben tener configurados los siguientes entornos:**

- NodeJS

### 2.Instalación y configuración.

#### Instalación/ejecución
- Si el contenedor tiene acceso a git:
  1. Clonar el repositorio con `git`.
  2. Acceder a la carpeta donde se haya descargado todo el código fuente del servicio desde la consola de comando.
  4. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.
  5. Ejecutar `npm start` esto levantar la aplicacion.

#### Configuraciones
Editar el archivo `config.js` que se encuentran en la ruta `<<root>>/config`.

**`config.js`**

```bash
module.exports = {
    host: 'http://localhost:8000',
    param: '?wsdl'
}
```
**Importante: Solo alterar estos valores de ser necesario**
  - `host` es la direccion donde esta alojado el servidor del servicio SOAP **[servicio SOAP](http://localhost:2001)**.
  - `param` parametro requerido al realizar la conexión al servicio SOAP **(default: '?wsdl')**.

#### Recomendaciones
 - *(Se recomienda leer mas en la **[documentación del servicio en POSTMAN ](https://app.getpostman.com/join-team?invite_code=0905f3f26debaf83977364f53288495c&ws=7b47ca72-f18e-462c-ae8f-e99c7d80ce98)**.)*.
 - *(Se recomienda leer mas en EL README.md en el repositorio **[front-end](http://localhost:2001)**.)*.
 - *(Se recomienda leer mas en EL README.md en el repositorio **[servicio SOAP](http://localhost:2001)**.)*.


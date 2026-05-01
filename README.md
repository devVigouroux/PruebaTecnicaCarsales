# Prueba Técnica Carsales — Frontend Rick and Morty

Aplicación frontend desarrollada en Angular para consultar información desde la API pública de Rick and Morty. La funcionalidad principal del proyecto está centrada en la consulta de episodios, permitiendo listar episodios, filtrar por temporada, paginar resultados, visualizar estados de carga, manejar errores, mostrar un estado explícito de “sin resultados” y abrir un modal de detalle con información adicional del episodio seleccionado. Las secciones de personajes y ubicaciones se incluyen como funcionalidades complementarias, pero no reemplazan el flujo principal solicitado sobre episodios.

# Prerrequisitos

Antes de ejecutar el proyecto se debe contar con Node.js, npm y Angular CLI instalados.

Para verificar las versiones disponibles se pueden ejecutar los siguientes comandos:

node --version  
npm --version  
ng version  

# Tecnologías utilizadas

El proyecto utiliza Angular con componentes standalone, TypeScript, Angular Material para la interfaz visual, RxJS para manejo de flujos reactivos, HttpClient para consumo de servicios HTTP, Angular Router para navegación entre vistas, interceptores HTTP para manejo centralizado de errores, modelos tipados en TypeScript, pruebas unitarias utilizando Vitest y estilos CSS responsive adaptados para distintos tamaños de pantalla.

# Arquitectura del proyecto

La aplicación se organiza por responsabilidad funcional, manteniendo consistencia con los nombres reales del código. Dentro de la carpeta src/app se encuentra components, que contiene las vistas visuales como episodes, episode-detail-modal, characters, locations, sidebar, header y footer. Dentro de services se encuentra el archivo episodes.ts encargado de consumir la API de episodios. Dentro de models se encuentra episode.ts, donde se definen las interfaces Episode y EpisodeResponse utilizadas en la aplicación. Dentro de interceptor se encuentra error-interceptor.ts, que captura errores HTTP globales. Finalmente, dentro de environments se encuentra environment.ts, donde se define la URL base de la API evitando hardcodear URLs en distintos archivos.

# Configuración de API

La URL base de la API se encuentra centralizada en el archivo src/environments/environment.ts. Esto permite mantener una configuración única del endpoint base y evita repetir direcciones completas en distintos servicios. Un ejemplo de configuración es:

production: false  
apiUrl: https://rickandmortyapi.com/api  

Los servicios utilizan esta URL base para construir dinámicamente los endpoints específicos como /episode.

# Funcionalidad principal: Episodios

La vista principal de la aplicación gira alrededor de los episodios. Desde esta vista se cargan episodios desde la API, se muestran en tarjetas utilizando Angular Material, se permite filtrar por temporada mediante un selector visual, se habilita la paginación de resultados y se incluye un botón llamado "Ver episodio" que permite abrir un modal con información adicional del episodio seleccionado. Cada tarjeta muestra nombre del episodio, temporada y número de episodio, fecha de emisión, cantidad de personajes y acceso al detalle.

# Filtro por temporada

Se implementó un selector que permite filtrar episodios por temporada utilizando valores como ALL, S01, S02, S03, S04 y S05. Cuando se selecciona una temporada específica, el sistema consulta nuevamente la API utilizando el parámetro correspondiente y muestra únicamente los episodios asociados a esa temporada. Esta funcionalidad fortalece la navegación del usuario y mejora la evaluación funcional del sistema.

# Modal de detalle obligatorio

Al hacer clic en el botón "Ver episodio", se abre un modal que muestra información detallada del episodio seleccionado. Dentro del modal se visualizan el nombre del episodio, código del episodio, fecha de emisión, cantidad de personajes asociados, URL del recurso y otros datos disponibles entregados por la API. Este modal cumple con el requisito obligatorio solicitado en la consigna de la prueba técnica.

# Estados visuales implementados

La vista de episodios contempla distintos estados visuales que mejoran la experiencia de usuario.

Durante la carga de información se muestra un spinner con el mensaje "Cargando episodios...".

Si ocurre un error en el consumo del servicio HTTP, se muestra el mensaje "No se pudieron cargar los episodios".

Cuando no existen resultados disponibles, se muestra un estado explícito con el mensaje "No se encontraron episodios", evitando dejar una grilla vacía sin explicación.

Cuando existen resultados, se muestran las tarjetas de episodios junto con el paginador correspondiente.

# Endpoint utilizado

La aplicación consume principalmente el endpoint público de episodios de la API Rick and Morty.

https://rickandmortyapi.com/api/episode

Ejemplos de uso incluyen:

/episode?page=1  
/episode?page=1&episode=S01  

Las respuestas se tipan utilizando interfaces definidas en el archivo src/app/models/episode.ts.

# Tipado y modelos

Las interfaces TypeScript utilizadas por la aplicación se encuentran centralizadas en la carpeta models, específicamente en el archivo episode.ts. Esto evita duplicación de tipos entre servicios y componentes, mejora la mantenibilidad del código y permite reducir el uso innecesario del tipo any.

# Ejecución del proyecto

Para instalar dependencias y ejecutar la aplicación en ambiente local se deben ejecutar los siguientes comandos desde la raíz del proyecto:

npm install  
ng serve  

Luego abrir en el navegador:

http://localhost:4200

# Ejecución de pruebas

El proyecto incluye pruebas que validan comportamiento real del sistema, no solamente la creación de componentes.

Para ejecutar las pruebas:

npm test  

Las pruebas implementadas cubren carga correcta de episodios, manejo de errores cuando falla el servicio, apertura y cierre del modal de detalle, validación del estado sin resultados, creación de componentes principales y funcionamiento del interceptor HTTP.

# Funcionalidades implementadas

Consulta de episodios desde la API Rick and Morty.  
Vista principal centrada en episodios.  
Filtro por temporada.  
Modal de detalle obligatorio.  
Estado de carga con spinner.  
Manejo de errores HTTP.  
Estado explícito de “sin resultados”.  
Paginación de episodios.  
Modelos TypeScript centralizados.  
Servicios tipados sin uso innecesario de any.  
URL base centralizada en environment.  
Interceptor para manejo de errores HTTP.  
Secciones adicionales para personajes y ubicaciones.  
Pruebas unitarias y de comportamiento.

# Autor

Simón Pereira Vigouroux
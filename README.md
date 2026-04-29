# Rick and Morty Dashboard — Frontend

Aplicación desarrollada en Angular que consume la API pública de Rick and Morty para visualizar información de personajes, episodios y ubicaciones mediante una interfaz moderna y organizada.

---

#  Tecnologías Utilizadas

- Angular
- TypeScript
- Angular Material
- RxJS
- HttpClient
- CSS Grid / Flexbox
- Rick and Morty API

---

#  Arquitectura del Proyecto

El proyecto sigue una separación clara de responsabilidades:

- Components → Componentes reutilizables
- Services → Consumo de API
- Models → Interfaces TypeScript
- Pages → Páginas principales
- Layout → Header, Sidebar y Footer
- Routing → Configuración de navegación

---

#  Estructura del Proyecto

src/

 └── app/

     ├── components/

     │     ├── characters/

     │     ├── episodes/

     │     ├── locations/

     │

     ├── pages/

     │     └── home/

     │

     ├── services/

     │     ├── character.service.ts

     │     ├── episodes.service.ts

     │     ├── locations.service.ts

     │

     ├── models/

     │     ├── character.model.ts

     │     ├── episode.model.ts

     │     ├── location.model.ts

     │

     ├── layout/

     │     ├── header/

     │     ├── sidebar/

     │     ├── footer/

     │

     ├── app.routes.ts

     ├── app.config.ts

---

#  API Utilizada

Rick and Morty API

https://rickandmortyapi.com/api

Endpoints utilizados:

/character  
/episode  
/location  

---

#  Funcionalidades Implementadas

✔ Listado de personajes  
✔ Listado de episodios  
✔ Listado de ubicaciones  
✔ Navegación lateral (Sidebar)  
✔ Página de inicio (Home Dashboard)  
✔ Paginación local  
✔ Diseño con Angular Material  
✔ Layout profesional (Header + Sidebar + Footer)  
✔ Tipado fuerte con TypeScript  
✔ Manejo de Observables con RxJS  
✔ Separación clara de responsabilidades  

---

#  UI / UX

La interfaz fue diseñada utilizando Angular Material para mantener consistencia visual y mejorar la experiencia de usuario.

Componentes utilizados:

- MatCard
- MatPaginator
- MatButton
- Sidebar navegación
- Layout con Header y Footer
- Dashboard inicial

---

#  Manejo de Estado

El estado de la aplicación se maneja mediante:

- Services Angular
- Observables (RxJS)
- Variables locales por componente

No se utilizó NgRx debido a que el volumen de estado es reducido y puede manejarse correctamente mediante servicios y observables.

---

#  Instalación y Ejecución

## 1️ Instalar dependencias

npm install

---

## 2️ Ejecutar proyecto

ng serve

---

## 3️ Abrir en navegador

http://localhost:4200

---

#  Paginación

Cada módulo implementa paginación local.

La API retorna:

20 registros por request

El frontend divide esos registros en:

8 registros por página

Aplicado en:

- Characters
- Episodes
- Locations

---

#  Testing (Deseable)

Se recomienda agregar:

- 1 test unitario para un Service
- Validación de respuesta API

Ejemplo sugerido:

character.service.spec.ts

---

#  Bonus Implementados

✔ Standalone Components  
✔ Angular Material  
✔ Layout modular  
✔ Routing centralizado  
✔ UI moderna  
✔ Paginación con Angular Material  

---

#  Bonus Recomendados (Pendiente)

- Loading Spinner
- Manejo global de errores (Interceptor)
- Lazy Loading
- Cache de datos
- Responsive avanzado
- Animaciones Angular

---

#  Decisiones Técnicas

Se utilizaron Standalone Components para simplificar la modularización del proyecto.

Angular Material fue seleccionado para acelerar el desarrollo UI y mantener consistencia visual.

La paginación se implementó de manera local debido a que la API retorna 20 registros por solicitud.

Se priorizó una arquitectura limpia y mantenible siguiendo buenas prácticas Angular.

---

#  Autor

Simón Pereira Vigouroux

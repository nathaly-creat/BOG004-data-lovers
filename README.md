# Data Lovers Studio Ghibli.
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646183243/samples/studio_ghibli_d2dpbo.jpg)


## DEFINICION DE PRODUCTO 

Nuestro proyecto es una fans page de Studio Ghibli que va a facilitar que los nuevos usuarios y los fieles seguidores de las películas, puedan conocer el repertorio de películas, hacer sus investigación por cada película, conocer la sipnosis y sus personajes de cada una de ellas, ordenar por orden alfabetico de A-Z y viceversa, además que cuenta con una sección dedicada especialmente a los datos estadísticos del record score de cada pelicula y su media. 

## OBJETIVOS DEL PROYECTO.

Crear una fans page agradable en tonos oscuros, adaptable a todas las pantallas responsives de facil usabilidad y manejo, todo enfocado a nuevos fans y usuarios recurrentes de Studio Ghibli que desean conocer mas de las películas y detalles de sus personajes.

## HISTORIA DE USUARIOS.

- [x] HISTORIA DE USUARIO 1: Yo como nuevo usuario y fan de Studio Ghibli, quiero visualizar en una sola página todas las peliculas y cuando me posiciono sobre una de ellas esta se active y acceder a detalles para conocer a profundidad sobre su descripción y sus personajes.
- [x] HISTORIA DE USUARIO 2: Yo como nuevo usuario o fan de Studio Ghibli, me gustaría acceder a una sección en donde se filtre las 10 películas más vistas por su record score. 
- [x] HISTORIA DE USUARIO 3: Yo como nuevo usuario y fan de Studio Ghibli quiero poder ordenar alfabeticamente las películas para contar con una busqueda organizada. 


## PROTOTIPOS DE BAJA, ALTA FIDELIDAD Y PAGINA WEB TERMINADA.

### PROTOTIPO DE BAJA FIDELIDAD.
- *Seccion Película.*
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646192655/samples/Seccion_Peliculas_DL_1_efholm.jpg)

- *Seccion Detalles Películas.*
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646192655/samples/Seccion_peliculas_detalles_ae6ggi.jpg)

- *Seccion top10 películas.*
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646192655/samples/seccion_top10_eesste.jpg)

### PROTOTIPO DE ALTA FIDELIDAD. 
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646189711/samples/prototipo_Alta_fidelidad__dL_yf16s9.png)


### PAGINA WEB TERMINADA. 

- Versión Escritorio.
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646182839/DATA_LOVER_PAGINA_yily5x.png)


- Versión Móvil.
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646190608/samples/movil_DL_hufrmb.png)

## DISEÑO DE EXPERIENCIA DE USUARIO.

* Investigación con usuarios / entrevistas.

Considerando los resultados de la encuesta de usuario realizada a potenciales usuarios, se obtuvo la siguiente metricas, lo cual permitió definir el prototipado y desarrollo del diseño y funcionalidad.

![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646189346/samples/Encuesta_UX_Data_Lovers_tnjeau.png)

## TEST DE USABILIDAD.

*Primer acercarmiento a la página.* 

Cuando un usuario decide buscar en la web información sobre Studio Ghibli desde su celular o portatil, encuentra una página en donde puede encontrar información resumida de las películas, conocer sus personajes, filtrar las peliculas más vistas, para así poder disfrutar de los datos más relevantes de cada una.

*Cómo el usuario interactua con la página encuentra:*

1. El usuario ingresa a la página de Studio Ghibli.
2. La primera sesión de la página con la que interactua es la de Peliculas, donde se muestran las películas de orden A-Z y puede escoger una de su elección.
3. El usuario puede acceder a detalles de cada película con el enlace de Detalles en cada tarjeta.
4. Al ingresar en detalles, se encuentra con información sobre cada película que abarca datos de producción, descripción, personajes al detalle de genero, nombre, edad, especie y su imagen respectivamente.
5. Lo siguiente es que el usuario puede acceder a las top 10 peliculas, en donde se puede detallar las mas vistas, para mayor detalle puede interactuar a la seccion pelicula y buscar información sobre ellas.
6. Al final de la sección de Películas el usuario podra encontrar la seccion de métricas de rating de cada película con el objetivo de comparar el exito de cada una entre los gustos de los usuarios. 
7. En la parte de footer, el usuario tiene disponible los iconos de las redes sociales, correo de contacto con su respectivo links para navegar.

*Visualización de la Data.*
1. El usuario al acceder a la página encuentra por defecto todas las películas.
2. El usuario visualiza las tarjetas con la información de la misma y cuando el cursor se posiciona sobre alguna de ellas está se activa y el usuario puede ingresar a detalles de la películas.
3. La historia de esta sección cambia cuando el usuario decide acceder a la sección de Top 10. 

*Filtrar Data.*
1. El usuario seleccion Top 10 en el Menú de la Página, esta se despliega mostrando las mas vistas con el Rating Score más alto.
2. La página muestra las tarjetas con el nombre de la película y su score. 
3. La historia termina cuando el usuario decide acceder a Películas.

*Ordenar Data.*
1. En la sección películas el usuario selecciona entre las opciones de orden de A-Z o de Z-A.
2. La página muestra las películas cambiando su posición sin alterar su funcionalidad de detalles.


*Enlace para ejecutar la página.*

- El usuario puede ingresar a traves de este enlace: [Links](https://nathaly-creat.github.io/BOG004-data-lovers/src/index.html)

## PRUEBAS UNITARIAS

El código arroja los siguientes resultados asociados a las pruebas unitarias. 

[![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646190774/samples/test_DL_wpbhsd.png)](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646190774/samples/test_DL_wpbhsd.png ""Resultados del npm test para los casos de filter y sort"")

## HACKER EDITION.

Features/características realizado:

* Se agregó en la interfaz de usuario una sesión de visualizaciones graficas para el conocimiento de los rating score de las películas, empleando para ellos la librería Chart.js. 

_Sección de Estadística sobre Rating Score._ 
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646186356/samples/estad%C3%ADstica_xgm0in.png)



## OBJETIVOS DE APRENDIZAJE CUBIERTOS.

### HTML

- [x] **Uso de HTML semántico**
- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**
- [x] **Uso de flexbox en CSS**

### Web APIs

- [x] **Uso de selectores del DOM**
- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [x] **Manipulación dinámica del DOM**

### JavaScript

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [x] **Arrays (arreglos)**
- [x] **Objetos (key, value)**
- [x] **Variables (declaración, asignación, ámbito)**
- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [ ] **Uso de bucles/ciclos (while, for, for..of)**
- [x] **Funciones (params, args, return)**
- [x] **Pruebas unitarias (unit tests)**
- [x] **Módulos de ECMAScript (ES Modules)**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)
- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [x] **GitHub: Despliegue con GitHub Pages**
![](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646188369/samples/Despliegue_github_pages_sq40je.png)
- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity
- [x] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [x] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### research

- [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**





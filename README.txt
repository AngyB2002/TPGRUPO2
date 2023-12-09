1.Título del Proyecto: Tienda Online de Juguetes para Bebés: JUKA.
2.Descripción del proyecto
	Propósito:
		La esencia de este proyecto reside en capitalizar la creciente demanda de juguetes ecológicos y duraderos en el mercado. Nuestra meta principal es contribuir a la promoción de un estilo de vida sostenible, brindando a los clientes la opción consciente de elegir juguetes que no solo proporcionen diversión, sino que también reflejen un compromiso tangible con la responsabilidad ambiental.

	Funcionalidad:
		La elección específica de juguetes de madera como núcleo de nuestra tienda en línea subraya nuestra dedicación a la sostenibilidad y calidad. La funcionalidad principal del proyecto se centra en ofrecer a los clientes una amplia variedad de juguetes de madera, cuidadosamente seleccionados por su durabilidad y origen sostenible. La plataforma facilitará la experiencia de compra, permitiendo a los usuarios explorar y adquirir productos que no solo cumplen con sus expectativas de entretenimiento, sino que también alinean con sus valores ambientales.
3.Requisitos Previos
	Antes de comenzar a trabajar con Juka, asegúrese de tener instalados los siguientes requisitos previos:
		-Node.js: Descargar Node.js
		-GitHub y GitBash: Descargar Git
		-Visual Studio Code: Descargar Visual Studio Code
4.Instrucciones de instalación
	Pasos detallados sobre cómo configurar y preparar el entorno de desarrollo, incluyendo la instalación de dependencias:
		-Explorar la ubicación en tu computadora donde deseas que se cree la carpeta clonada.
		-Presionar clic derecho.
		-Presionar Git Bash Here para acceder a la consola.
		-Después de acceder a la consola, procede con los pasos indicados utilizando los siguientes comandos: 
			-git clone https://github.com/AngyB2002/TPGRUPO2.git: Clona el repositorio desde GitHub.
			-cd TPGRUPO2: Ingresa al directorio del proyecto.
			-git checkout –b dev: creamos una rama desde main.
			-git status: verificar qué cambios tenemos para agregar (no debería haber nada).
			-Ir a la carpeta clonada, hacer clic derecho en un espacio en blanco dentro de la carpeta, selecciona "Nuevo" y luego "Documento de texto (txt), renombra el nuevo archivo a README.txt.
			-git status: verificamos que aparezca para agregar el README.
			-git add . : agregamos el README.
			-git commit –m “Primer commit”: confirmamos los cambios realizados.
			-git push origin dev: hacemos un push para compartir las confirmaciones con el repositorio remoto.
		-Ingresar a Visual Studio Code – Terminal – Git Bash y utilizar los siguientes comandos: 
			-npx create-react-app jugueteria-juka: Instalar Create React App.
			-cd jugueteria-juka: Ingresar al Directorio de la Aplicación.
			-Instala las dependencias: 
				I.npm install: "npm" es el administrador de paquetes de Node.js (Node Package Manager). Cuando ejecutas npm install en el directorio de tu proyecto, npm lee el archivo package.json de tu proyecto para determinar qué dependencias (bibliotecas o módulos) necesita tu aplicación.
				II.npm install react-router-dom: se utiliza para instalar la biblioteca react-router-dom en un proyecto de React. La biblioteca react-router-dom es una parte esencial de la gestión de rutas (routing) en aplicaciones web construidas con React.
				III.npm install react-scripts - -save: se utiliza para instalar el paquete react-scripts en un proyecto de React y, al mismo tiempo, agregarlo como una dependencia al archivo package.json.
				IV.npm install slick-carousel: La biblioteca slick-carousel es un popular carrousel (o slider) de imágenes para sitios web. Proporciona una manera fácil de implementar sliders atractivos y responsivos con características como desplazamiento automático, navegación, y diseño adaptable.
				V.npm install --save @fortawesome/fontawesome-free: Después de ejecutar este comando, podrás utilizar los iconos proporcionados por Font Awesome en tu proyecto. Puedes importar los iconos específicos que necesitas y agregarlos a tu interfaz de usuario. En este caso los utilizamos para la página específica “Login”.
				VI.npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons: Utilizamos esta dependencia que contiene iconos específicos de redes sociales como Facebook, Twitter e Instagram.
5.Instrucciones de Ejecución
	Después de completar la instalación, sigue estos pasos para ejecutar el proyecto en un Entorno de Desarrollo:
		-Inicia el servidor de desarrollo con “npm start”.
		-Abre tu navegador y accede a “http://localhost:3000” para ver la aplicación en desarrollo.
6.Uso del Proyecto
	Al utilizar la aplicación "Juka", los usuarios pueden disfrutar de las siguientes funcionalidades y procesos:
		1)Inicio de la Aplicación: Al abrir la aplicación, se accede a la pantalla principal que muestra novedades, destacando productos nuevos, promociones especiales o cualquier información relevante que pueda ser de interés para los usuarios.
		2)Exploración de Productos: Los usuarios pueden explorar la variedad de productos ofrecidos en la juguetería, clasificados por edades y categorías, para encontrar productos específicos de interés.
		3)Menú: A través del menú, se puede acceder a secciones adicionales como la opción de filtro que permite a los usuarios seleccionar y explorar productos específicos según diferentes criterios, como edad y desarrollo. "Contáctanos", que proporciona información de contacto para comunicarse con la juguetería, y "Nosotros", una sección que brinda información sobre la historia y valores de la juguetería.
		4)Inicio de Sesión: Al iniciar sesión, se desbloquean funcionalidades avanzadas, incluyendo la capacidad de realizar un ABM (Alta, Baja y Modificación) de productos en el inventario de la juguetería.
		5)ABM de Productos: Una vez autenticado, el usuario (solo los desarrolladores de esta App) tiene la posibilidad de administrar el inventario, agregando nuevos productos, eliminando aquellos que ya no están disponibles, o modificando la información de los productos existentes.
		6)Acciones rápidas: en la parte del Footer van a poder acceder a acciones rápidas como el QR que te dirige a contactarte a través de WhatsApp con la juguetería, link de redes sociales y un mapa con la ubicación de nuestro local.

7.Informe de Presentación
	El presente informe tiene como objetivo ofrecer una visión concisa del proyecto llevado a cabo por nuestro equipo, que consiste en el desarrollo y lanzamiento de una tienda en línea especializada en la venta de juguetes de madera.

	Equipo de Desarrollo:
		Este proyecto ha sido posible gracias al esfuerzo conjunto de un equipo compuesto por cuatro individuos altamente motivados. La diversidad de habilidades y experiencias de nuestro equipo ha sido fundamental para abordar cada aspecto del desarrollo de la tienda en línea.

	Objetivos Establecidos:
		-Lanzamiento de la Tienda Online: Implementar una plataforma web intuitiva y atractiva que facilite la navegación y la compra de juguetes de madera de manera eficiente.
		-Variedad y Calidad de Productos: Ofrecer una amplia gama de juguetes de madera de alta calidad, seleccionados cuidadosamente para satisfacer las preferencias y estándares de nuestros clientes.
		-Sostenibilidad: Promover la conciencia ambiental al priorizar proveedores sostenibles y opciones de embalaje ecológicas.
		-Experiencia del Cliente: Garantizar una experiencia de compra en línea excepcional, desde la selección de productos hasta la entrega, con un servicio al cliente receptivo.
	Resultados Esperados:
		Se anticipa que la implementación exitosa de este proyecto resultará en un aumento significativo de la presencia en línea, así como en la creación de una base sólida de clientes leales. Además, se espera contribuir al impulso de la conciencia ambiental al ofrecer una alternativa sostenible en la industria de juguetes.

	Este informe sirve como introducción a nuestra iniciativa y establece las bases para futuras evaluaciones y desarrollos. Estamos entusiasmados con el potencial de este proyecto y comprometidos con su éxito continuo.
8.Conclusiones del Proyecto
	Durante el desarrollo del proyecto Juka, se adquirió una valiosa experiencia en la aplicación de metodologías ágiles como Scrum a través de las Sprint, así como buenas prácticas de programación. La utilización de Trello y las Dailies para la gestión de tareas resultó fundamental en la organización y seguimiento del progreso del proyecto. La implementación de estas herramientas y prácticas fue crucial para el éxito y la eficiencia en el desarrollo del software.
9.API’S Utilizadas en el Proyecto
	•Utilización de MockApi para almacenar los pares de usuario/contraseña válidos: https://655e9843879575426b43aa94.mockapi.io/api/v1/usuarios
	•Utilización de MockApi para almacenar los productos: https://65577ba4bd4bcef8b612bc04.mockapi.io/producto


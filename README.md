Delta Cargo - Sitio Web de Logística y EnvíosPlataforma web desarrollada para Delta Cargo, una empresa dedicada al transporte, distribución y soluciones logísticas.
El sitio permite a los usuarios conocer la historia de la compañía, explorar los servicios de envío, consultar la flota de vehículos disponible y calcular presupuestos personalizados en tiempo real.

👥 Creadores: Sebastián Radici,  Brian Garcia,  Dante Giacchi

🚀 Características Principales 
*Inicio e Historia: Presentación de la empresa, trayectoria corporativa y catálogo dinámico con los 8 servicios logísticos (mensajería, express, motomensajería, envíos nacionales, estándar, e-commerce, logística y carga pesada).
*Calculadora de Cotizaciones Interactiva: Herramienta integrada mediante modales interactivos (SweetAlert2) que evalúa el tipo de destino (Local/Nacional), el peso de la carga en kg y el recargo por envío express para calcular el costo total.
*Catálogo de Flota: Sección dedicada a mostrar los vehículos disponibles (motos, furgones/utilitarios y camiones de carga pesada) junto a sus especificaciones técnicas y un video institucional en bucle.
*Formulario de Contacto: Interfaz para consultas de clientes con selección de vehículo, tipo de carga, canales de comunicación directa y enlaces a redes sociales.
*Diseño Visual Dinámico: Estilos personalizados con degradados en tonos oscuros y naranjas, tarjetas expansibles al pasar el cursor (hover), animación de iconos en el menú de navegación y diseño adaptable.

🛠️ Tecnologías Utilizadas 
HTML5: Estructuración semántica de las páginas (index.html, flota.html, contacto.html).
CSS3: Estilos avanzados, animaciones, flexbox, degradados y efectos de transición (index.css, flota.css, contacto.css).
JavaScript (ES6+): Lógica interactiva asíncrona (async/await) para la captura y validación de datos en el cotizador (index.js). 
SweetAlert2: Librería externa para la generación de modales y alertas interactivas estéticas.

Carpetas enlazadas

├── index.html        # Página principal: Servicios, Historia y Cotizador]

├── flota.html        # Presentación de la flota de vehículos y video

├── contacto.html     # Formulario de contacto e información de la empresa

├── index.css         # Estilos para la página de inicio y componentes del cotizador

├── flota.css         # Estilos para las tarjetas de vehículos y reproducción de video

├── contacto.css      # Estilos del formulario de contacto y enlaces a redes sociales

├── index.js          # Lógica de la calculadora de envíos con SweetAlert2

└── multimedia/       # Recursos gráficos, logotipos, íconos y archivos de video

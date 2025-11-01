# Visualizador de Productos React  
Aplicación en React que analiza datos de productos desde una API y visualiza los productos más vendidos mediante tablas y gráficos interactivos.

## Descripción  
Esta aplicación permite consumir una API de productos para extraer datos (por ejemplo, ventas, categorías, precios) y visualizarlos de forma interactiva en el frontend. A través de tablas y gráficos, el usuario puede ver cuáles son los productos más vendidos, realizar filtros, ordenamientos y obtener insights visuales de los datos.

## Características principales  
- Consumo de una API REST para obtener los datos de productos.  
- Visualización en tabla interactiva (orden, paginación, búsqueda).  
- Gráficos (por ejemplo, barras, pastel) para mostrar tendencias o distribución de ventas.  
- Diseño responsivo.  
- Configuración basada en Vite (según carpeta `vite.config.js`).  
- Buenas prácticas de linting con configuración (`eslint.config.js`).

## Tecnologías usadas  
- ✅ React (biblioteca principal para UI)  
- ✅ Vite (herramienta de construcción / bundler)  
- ✅ JavaScript / CSS / HTML  
- ✅ Eslint para calidad de código  
- ✅ Librería de gráficos (por ejemplo, Recharts, Chart.js u otra)  
- ✅ API REST (backend externo)  

## Instalación y ejecución  
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/UrbanoTrejoOrlando/Visualizador_Productos_React.git
   cd Visualizador_Productos_React
   ```  
2. Instalar dependencias:  
   ```bash
   npm install
   ```  
3. Configurar la URL de la API (si aplica):  
   - Edita el archivo de configuración o la constante donde defines el endpoint de productos.  
4. Iniciar la aplicación en modo desarrollo:  
   ```bash
   npm run dev
   ```  
5. Acceder desde el navegador en `http://localhost:5173`.  
6. Para generar la versión de producción:  
   ```bash
   npm run build
   ```  
   Luego servirla con un servidor estático (por ejemplo `npm run preview`).  

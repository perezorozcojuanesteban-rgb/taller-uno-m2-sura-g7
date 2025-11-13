/*  ### Ejercicio 1: Lista del Súpermercado

Inicias con la siguiente lista:
`let compras = ["Manzanas"];`

**Tareas:**
1.  Añade "Leche" y "Pan" al **FINAL** de la lista.
2.  Añade "Huevos" al **INICIO** de la lista.
3.  Vendiste las "Manzanas" (el segundo elemento). Elimínalo.
   */

let compras = ["Manzanas"];
//1 Añadir leche y pan al final
compras.push("Leche", "Pan");

console.log(compras);

//2  Añadir huevos al principio

compras.unshift("Huevos");

console.log(compras);

// 3 Eliinar manzanas

compras.splice(1, 1);

console.log(compras);



/*   ### Ejercicio 2: Pila de Tareas Pendientes (LIFO)

Inicias con la siguiente pila de tareas:
`let tareas = ["Revisar emails"];`

**Tareas:**
1.  Llega una tarea nueva: "Llamar al cliente". Ponla **ENCIMA** de la pila (al inicio).
2.  Llega otra tarea: "Preparar reporte". Ponla **ENCIMA** de la pila (al inicio).
3.  Completaste la última tarea que entró ("Preparar reporte"). Retírala de la pila.
4.  Completaste la siguiente tarea ("Llamar al cliente"). Retírala.
    */

let tareas = ["Revisar emails"];

// Nueva tarea "Llamar cliente" al inicio de la pila

tareas.unshift("Llamar al cliente");

// Nueva tarea "Preparar reporte" al inicio de la pila

tareas.unshift("Preparar reporte");

// Retirar tarea compleatada "Preparar reporte"

tareas.shift();

// Retirar tarea compleatada "Llamar cliente"

tareas.shift();

console.log(tareas);
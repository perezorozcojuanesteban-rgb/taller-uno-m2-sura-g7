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
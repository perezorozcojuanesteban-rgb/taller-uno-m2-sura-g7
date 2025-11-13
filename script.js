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




/*   ### Ejercicio 3: Pila de Historial (LIFO)

Inicias con el historial:
`let historial = ["google.com", "youtube.com", "facebook.com"];`

**Tareas:**
1.  Se requiere deshacer la última acción. Elimina el **ÚLTIMO** elemento del historial.
2.  Se requiere deshacer la acción anterior. Elimina el **ÚLTIMO** elemento restante.

---

*/

let historial = ["google.com", "youtube.com", "facebook.com"];

// Eliminar la ultima accion "facebook.com"

historial.pop();

// Eliminar el ultimo elemento restante "youtube.com"

historial.pop();

console.log(historial);


/*  
### Ejercicio 4: Cola de Impresión (FIFO)

Inicias con los siguientes trabajos en cola:
`let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];`

**Tareas:**
1.  Se imprimió el primer documento. Retíralo de la cola.
2.  Llega un nuevo trabajo: "doc4.txt". Añádelo al **FINAL** de la cola.
3.  Se imprimió el siguiente documento. Retíralo de la cola.

---
   */

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

// Retiar de la cola el primer documento

colaImpresion.shift();

// Llega nuevo trabajo añadir al final de la cola

colaImpresion.push("doc4.txt");

// Se imprimio siguiente documento retirarlo

colaImpresion.shift();

console.log(colaImpresion);


/*  ### Ejercicio 5: Fila del Banco (Splice)

Inicias con la siguiente fila:
`let fila = ["Ana", "Luis", "Carlos", "Maria"];`

**Tareas:**
1.  "Luis" (posición 1) se cansa y se va. Elimínalo.
2.  "Jorge" se cuela en la fila y se pone justo después de "Ana" (en la nueva posición 1). Insértalo sin eliminar a nadie.

---
   */

let fila = ["Ana", "Luis", "Carlos", "Maria"];

// Eliminar a luis

fila.splice(1, 1);

// Insertar a Jorge en la nueva posicion uno 

fila.splice(1, 0, "Jorge")


console.log(fila);



/*  ### Ejercicio 6: Mazo de Cartas

Inicias con un pequeño mazo:
`let mazo = ["As", "Rey", "Reina", "Jota"];`

**Tareas:**
1.  Barajas el mazo invirtiendo el orden de las cartas.
2.  Sacas la carta de arriba (el primer elemento).

---
   */

let mazo = ["As", "Rey", "Reina", "Jota"];

// Invertir el orden de la lista

mazo.reverse()

// Sacar primer elemento

mazo.shift()

console.log(mazo);


/*  ### Ejercicio 7: Gestión de Asientos de Cine

Inicias con el estado de una fila de asientos:
`let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];`

**Tareas:**
1.  Las tres personas en los asientos "Libre" (posiciones 1, 2 y 3) deben moverse. Cambia esos tres asientos a "Reservado".
    (Pista: `fill` puede usar un índice de inicio y fin).

---
   */

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

// Cambiar asientos libres a reservados

asientos.fill("Reservado", 1, 4)

console.log(asientos);
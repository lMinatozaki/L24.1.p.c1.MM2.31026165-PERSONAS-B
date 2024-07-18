/**
 * PERSONAS-B
 * Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
''' Edad promedio: 18.50
Edad mayor entre las mujeres: 19 '''
 */

import CL_Persona from "./CL_Persona.js";

let salida = document.getElementById("salida");
let persona = new CL_Persona();

let persona1 = new CL_Persona("Luis", 15, "M");
let persona2 = new CL_Persona("Ana", 19, "F");
let persona3 = new CL_Persona("José", 21, "M");
let persona4 = new CL_Persona("Carmen", 17, "F");
let persona5 = new CL_Persona("Rosa", 18, "F");
let persona6 = new CL_Persona("José", 22, "M");
let persona7 = new CL_Persona("María", 17, "F");
let persona8 = new CL_Persona("Luz", 19, "F");
let persona9 = new CL_Persona("Rafael", 23, "M");
let persona10 = new CL_Persona("Liz", 15, "F");
let persona11 = new CL_Persona("Marcos", 20, "M");
let persona12 = new CL_Persona("Leo", 16, "M");

persona.procesarPersona(persona1);
persona.procesarPersona(persona2);
persona.procesarPersona(persona3);
persona.procesarPersona(persona4);
persona.procesarPersona(persona5);
persona.procesarPersona(persona6);
persona.procesarPersona(persona7);
persona.procesarPersona(persona8);
persona.procesarPersona(persona9);
persona.procesarPersona(persona10);
persona.procesarPersona(persona11);
persona.procesarPersona(persona12);

salida.innerHTML = `
Edad promedio: ${persona.calcularEdadPromedio()}%
<br>
Edad mayor entre las mujeres: ${persona.edadMayorMujer}
`;
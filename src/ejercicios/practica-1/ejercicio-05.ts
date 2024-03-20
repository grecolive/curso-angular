/**
Ejercicio 5: Import y Export
Objetivo: Familiarizarse con el sistema de módulos de TypeScript importando y exportando entre archivos.

En tu archivo 01-basic-types.ts, exporta alguna de las variables o todas.
Crea otro archivo en la misma carpeta llamado 02-imports-exports.ts.
Importa las variables exportadas del archivo 01-basic-types.ts y úsalas dentro del nuevo archivo.
 */

import { nombre, edad, estaActivo  } from "./ejercicio-01";


console.log("mi nombre es: ", nombre, "mi edad es: ", edad, "y estoy activo: ", estaActivo);
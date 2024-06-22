# Calcular el Coeficiente de Unidades de Mérito
# Sistema de Gestión de Materias y CUM

Este proyecto utiliza Vue.js para gestionar materias universitarias y calcular el Cumulative Grade Point Average (CUM).

## Funcionalidades

- Agregar nuevas materias especificando nombre, nota y unidades valorativas (UV).
- Eliminar materias individualmente o todas a la vez.
- Calcular el CUM considerando solo las materias con una nota de 5.7 o superior.

## Uso

1. **Agregar Materias**: 
   - Ingresa el nombre de la materia, la nota obtenida y las unidades valorativas correspondientes.
   - Presiona el botón "Agregar Materia" para registrarla en la lista.

2. **Eliminar Materias**:
   - Para eliminar una materia específica, haz clic en el botón de eliminar junto a la materia deseada.
   - Para eliminar todas las materias, utiliza el botón "Eliminar Todas".

3. **Calcular CUM**:
   - El CUM se calcula automáticamente considerando solo las materias con una nota igual o superior a 5.7.

## Ejemplo de Implementación

```javascript
new Vue({
    el: '#app',
    data: {
        nuevaMateria: {
            nombre: '',
            nota: null,
            uv: null
        },
        materias: [],
        cum: null
    },
    methods: {
        agregarMateria() {
            // Implementación del método agregarMateria...
        },
        eliminarMateria(index) {
            // Implementación del método eliminarMateria...
        },
        eliminarTodasMaterias() {
            // Implementación del método eliminarTodasMaterias...
        },
        calcularCUM() {
            // Implementación del método calcularCUM...
        }
    }
});

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
            if (this.nuevaMateria.nombre && !isNaN(this.nuevaMateria.nota) && !isNaN(this.nuevaMateria.uv)) {
                // Convertir nota y UV a números antes de agregarlos a la lista
                this.materias.push({
                    nombre: this.nuevaMateria.nombre,
                    nota: parseFloat(this.nuevaMateria.nota),
                    uv: parseInt(this.nuevaMateria.uv)
                });
                this.nuevaMateria.nombre = '';
                this.nuevaMateria.nota = null;
                this.nuevaMateria.uv = null;
            }
        },
        eliminarMateria(index) {
            this.materias.splice(index, 1);
        },
        eliminarTodasMaterias() {
            this.materias = [];
        },
        calcularCUM() {
            let totalUV = 0;
            let totalUnidadesMerito = 0;

            this.materias.forEach(materia => {
                if (materia.nota >= 5.7) {  // Considerar solo materias con nota mayor o igual a 5.7
                    totalUV += materia.uv;
                    totalUnidadesMerito += materia.nota * materia.uv;
                }
            });

            this.cum = totalUV > 0 ? totalUnidadesMerito / totalUV : 0;
        }
    }
});

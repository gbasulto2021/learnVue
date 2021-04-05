const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Hola mundo desde Vue',
        frutas: [
            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:0},
            {nombre: 'Platano', cantidad:11}
            
        ],
        personas: [
            {nombre: 'George', edad: 40},
            {nombre: 'Luis', edad: 68},
            {nombre: 'Bry', edad: 11},
            {nombre: 'Luis Manuel', edad: 12}
        ],
        nuevaFruta: '',
        cantidadFrutas: '',
        nuevaPersona:'',
        edadPersona:'',
        total: 0
    },
    methods:{
      agregarFruta (){
          this.frutas.push(
              {nombre: this.nuevaFruta, cantidad: this.cantidadFrutas}
              
              );
          this.nuevaFruta= ''
          this.cantidadFrutas=''
      },

      agregarPersona (){
          this.personas.push(
              {nombre: this.nuevaPersona, edad:this.edadPersona}
          );
          this.nuevaPersona = ''
          this.edadPersona = ''

      }
    },
    computed:{
      sumarFrutas (){
          this.total = 0;
          for (fruta of this.frutas){
              this.total = this.total + fruta.cantidad;
          } 
          return this.total;
      }
    }
});

const app2 = new Vue({
    el: '#app2',
    data: {
      fondo: 'bg-warning',
      color:true
    },
    methods:{

    }
});

const app3 = new Vue({
    el: '#app3',
    data:{
        titulo: "GYM con Vue",
        tareas: [],
        nuevaTarea: ''

    },
    methods: {
       agregarTarea (){
           this.tareas.push({
              nombre:  this.nuevaTarea,
              estado: false
           });
           this.nuevaTarea = '';
           localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
       },
       editarTarea (index){
           this.tareas[index].estado = true;
           localStorage.setItem('gym-vue', JSON.stringify(this.tareas));

       },
       eliminarTarea (index){
        this.tareas.splice(index,1);
        localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
       }
    },
    created: function(){
        let datosDb = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDb === null){
            this.tareas = [];
        } else{
            this.tareas = datosDb;
        }
    }
});
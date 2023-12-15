<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ 
  msg: string 
}>()

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

</script>

<template>
  <div class="container">
    
    <div class="card card-body">
      <div class="container text-center">
        <a >
          <img src="/vite.svg" class="mx-4" alt="Vite logo" width="100"/>
        </a>
        <a >
          <img src="../assets/vue.svg" class="mx-4" alt="Vue logo" width="100" />
        </a>
      </div>
      <h1 class="text-center">{{ msg }}</h1>

      <div class="d-flex justify-content-around">
        <button type="button" class="btn btn-success mx-2" @click="decrement" >RESTAR</button>
        <p>count is {{ count }}</p>
        <button type="button" class="btn btn-success mx-2"  @click="increment" >SUMAR</button>
      </div>
    
      <div class="alert bg-success-subtle text-center mt-2">
        Bienvenido a la aplicacion de almacen y ventas
      </div>
    </div>
  </div>
  
</template>

<style scoped>



</style>

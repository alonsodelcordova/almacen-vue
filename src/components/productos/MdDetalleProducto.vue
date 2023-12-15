<script setup lang="ts">
import { PropType , defineModel} from 'vue';
import {Producto} from '../../core/models/Producto';

defineModel('modalShow', {
  type: Boolean ,
});

defineProps(
  {
    producto: {
      type: Object as PropType<Producto>,
      required: true
    },
    modalShow: {
      type: Boolean as PropType<boolean>,
      required: true,
    }
  }
)

defineEmits(['onModalShow']);

</script>

<template>
  <b-modal  :modelValue="modalShow" @update:modelValue="$emit('onModalShow', $event)"  hide-footer hide-header>
    <div class="d-flex justify-content-between">
      <h4>PRODUCTOS</h4>
      <button @click="$emit('onModalShow', false)">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <hr>
    <div class="d-block text-center">
      <div class="card card-body">
        <h4>{{ producto.nombre }}</h4>
        <p>{{ producto.descripcion }}</p>
        <p>Categoria: {{ producto.categoria_nombre }}</p>
        <p>Precio: {{ producto.precio }}</p>
        <p>Stock: {{ producto.stock }}</p>
      </div>
    </div>

    <div class="d-flex justify-content-end">
      <b-button class="mt-3" block @click="$emit('onModalShow', false)">
        Cerrar
      </b-button>
    </div>
  </b-modal>
    
</template>

<style scoped>

</style>

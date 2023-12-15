<script setup lang="ts">
import { ref } from 'vue';
import {ProductoService} from '../../core/services/ProductoService';
import {Producto} from '../../core/models/Producto';
import MdDetalleProducto from './MdDetalleProducto.vue';
const productos = ref([] as Producto[]);
const modalOn = ref(false);

ProductoService.getData().then((res) => {
  productos.value = res.data;
});

const selectProducto = (producto: Producto) => {
    productoSelected.value = producto;
    modalOn.value = true;
}


const productoSelected = ref({} as Producto);

</script>

<template>
    <MdDetalleProducto v-if="productoSelected"   
        v-bind:modalShow="modalOn"   
        :producto=productoSelected 
        @onModalShow="modalOn = $event"
    />
    <div class="card card-body">
        <h3 class="text-center">Listado de Productos</h3>
        <div class="mt-3">
            <div class="row">
            <div class="col-12">
                <table class="table table-striped table-borderless table-hover">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto in productos" :key="producto.id">
                        <td>{{producto.nombre}}</td>
                        <td>{{producto.descripcion}}</td>
                        <td>{{producto.categoria_nombre}}</td>
                        <td>{{producto.precio}}</td>
                        <td>{{producto.stock}}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-danger mx-1">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button class="btn btn-warning mx-1">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <b-button class="btn btn-secondary mx-1" @click="selectProducto(producto)">
                                    <i class="fas fa-eye"></i>
                                </b-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    
    </div>

   




</template>

<style scoped>

</style>

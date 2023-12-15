<script setup lang="ts">
import { ref } from 'vue';
import {UsuarioService} from '../../core/services/UsuarioService';
import {Usuario} from '../../core/models/Usuario';
const usuarios = ref([] as Usuario[]);
const modalOn = ref(false);

UsuarioService.getData().then((res) => {
  usuarios.value = res.data;
});

const selectUsuario = (usuario: Usuario) => {
    productoSelected.value = usuario;
    modalOn.value = true;
}


const productoSelected = ref({} as Usuario);

</script>

<template>
    
    <div class="card card-body">
        <h3 class="text-center">Listado de Usuarios</h3>
        <div class="mt-3">
            <div class="row">
            <div class="col-12">
                <table class="table table-striped table-borderless table-hover">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Perfil</th>
                    <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in usuarios" :key="user.id">
                        <td>{{user.nombre}}</td>
                        <td>{{user.perfil}}</td>
                        <td>{{user.usuario}}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-danger mx-1">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button class="btn btn-warning mx-1">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <b-button class="btn btn-secondary mx-1" @click="selectUsuario(user)">
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

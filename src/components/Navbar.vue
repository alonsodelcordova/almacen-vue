<script setup lang="ts">



</script>

<template>
    <!-- use navbar from boostrap -->
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/" >ALMACEN</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" >Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/products" >Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/usuarios" >Usuarios</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped>

</style>
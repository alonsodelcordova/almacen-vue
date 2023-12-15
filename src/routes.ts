import { createRouter, createWebHistory } from 'vue-router'
import ProductoPage from './pages/ProductoPage.vue';
import InicioPage from './pages/InicioPage.vue';
import UsuarioPage from './pages/UsuarioPage.vue';

export const Routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: InicioPage },
        { path: '/products', component: ProductoPage },
        { path: '/usuarios', component: UsuarioPage }
    ]
});

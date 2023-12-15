import axios from 'axios';
import { Producto } from '../models/Producto';
import { Generico } from '../models/Generico';


export class ProductoService {


    public static getData(): Promise<Generico<Producto>>{
        return axios.get('http://localhost/api-almacen/productos')
            .then(response => response.data as Generico<Producto>);
    }

}
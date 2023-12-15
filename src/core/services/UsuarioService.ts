import axios from 'axios';
import { Usuario } from '../models/Usuario';
import { Generico } from '../models/Generico';


export class UsuarioService {


    public static getData(): Promise<Generico<Usuario>>{
        return axios.get('http://localhost/api-almacen/usuarios')
            .then(response => response.data as Generico<Usuario>);
    }

}
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
 
const schema = yup.object().shape({
    password: yup
        .string("La contraseña debe ser un texto")
        .required("Debes escribir una contraseña")
        .min(6, "La contrseña debe tener como minimo 6 caracteres"),
})

export default yupResolver(schema)
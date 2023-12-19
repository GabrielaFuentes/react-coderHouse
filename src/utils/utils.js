
import {MOCK_DATA} from "../mock/data"

export const obtenerDatos = () => {

    return new Promise((res) => {
        setTimeout(() => {
            res(MOCK_DATA)
        }, 500)
    })
}



import axios from 'axios';

const getPokemonsImage = async (endpoint: any) => {
    try {
        const res = await axios.get(endpoint);
        return await res.data.sprites.back_default;

    } catch (error) {
        console.log(error);

    }
}

export {
    getPokemonsImage
}
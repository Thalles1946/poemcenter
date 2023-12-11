import axios from "axios";

async function fetchLike(poemId) {
    try {
        await axios.post(`http://localhost:3001/likepoem/${poemId}`)
    } catch (error) {
        console.error('Erro na requisição:', error.message);
    }
}

export {fetchLike}
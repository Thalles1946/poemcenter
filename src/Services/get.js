import axios from "axios";

async function fetchPreviewPoems(setState) {
  try {
    const response = await axios.get("http://localhost:3001/previewpoems");
    setState(response.data);
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
}

async function fetchPoem(props) {
  try {
    const response = await axios.get(
      `http://localhost:3001/poem/${props.poemId}`
    );
    props.setPoem(response.data);
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
}

export { fetchPreviewPoems, fetchPoem };

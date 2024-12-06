import axios from "axios";

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error("API'den veri çekilirken bir hata oluştu.");
  }
};

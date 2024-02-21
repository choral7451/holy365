import axios from "axios";

export const getBibleTitleList = async () => {
  const response = await axios.get(`http://localhost:8080/bible/titles`)
  return response.data
}

export const getVerseList = async (title: String, chapter: Number ) => {
  const response = await axios.get(`http://localhost:8080/bible/${title}/${chapter}/verses`)
  return response.data
}

export const countChapters = async (title: String) => {
  try {
    const response = await axios.get(`http://localhost:8080/bible/${title}/count`)
    return response.data;
  } catch (e) {
    console.log(e)
  }
}
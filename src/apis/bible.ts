import axios from "axios";

export const getBibleTitleList = async () => {
  const response = await axios.get(`http://localhost:8080/bible/titles`)
  return response.data
}

export const getVerseList = async (title: String, chapter: Number ) => {
  const response = await axios.get(`http://localhost:8080/bible/${title}/${chapter}/verses`,{
    headers:{
      Authorization : `Bearer ${process.env["NEXT_PUBLIC_TEMP_ACCESS_KEY"]}`
    }
  })
  return response.data
}

export const getChapterList = async (title: String) => {
  try {
    const response = await axios.get(`http://localhost:8080/bible/${title}/chapters`,{
      headers:{
        Authorization : `Bearer ${process.env["NEXT_PUBLIC_TEMP_ACCESS_KEY"]}`
      }
    })
    return response.data;
  } catch (e) {
    console.log(e)
  }
}

export const completeVerse = async (title: String, chapter: Number, verse: Number) => {
  try {
    const response = await axios.post(`http://localhost:8080/bible/${title}/${chapter}/${verse}/completion`,{},{
      headers:{
        Authorization : `Bearer ${process.env["NEXT_PUBLIC_TEMP_ACCESS_KEY"]}`
      }
    })
  } catch (e) {
    console.log(e)
  }
}
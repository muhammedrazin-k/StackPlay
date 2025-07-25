import commonAPi from "./commonAPI";
import base_url from "./serverUrl";


// APi call for add video 

export const addVideo= async (reqbody)=>{
  return await  commonAPi('Post',`${base_url}/allVideos`,reqbody)
}

export const getAllvideosAPI=async()=>{
    return await commonAPi('GET',`${base_url}/allVideos`,"")
}

export const deletevideoAPI=async(videoId)=>{
  return await commonAPi('DELETE',`${base_url}/allVideos/${videoId}`,"")
}

//api for save  History


export const SaveHistoryApi=async(reqbody)=>{
  return await commonAPi('POST',`${base_url}/history`,reqbody)
}

export const getAllHistory=async()=>{
  return await commonAPi('GET',`${base_url}/history`,"")
}

export const DeleteHistoryAPI=async(historyId)=>{
  return await commonAPi('DELETE',`${base_url}/history/${historyId}`,"")
}

export const addCategoryApi=async(CategoryName)=>{
  return await commonAPi('POST',`${base_url}/category`,CategoryName)
}

export const getCategoryAPI=async()=>{
  return await commonAPi('GET',`${base_url}/category`,"")
}

export const deleteCategoryAPI=async(categoryId)=>{
  return commonAPi('DELETE',`${base_url}/category/${categoryId}`,"")
}

export const upadateCategoryAPI=async(id,updatedData)=>{
  return commonAPi('PUT',`${base_url}/category/${id}`,updatedData)
}
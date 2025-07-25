import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import { VideoCard } from './VideoCard'
import { addVideo, getAllvideosAPI, upadateCategoryAPI } from '../services/allAPI'



export const View = ({addvideoresponse,deleteRespose,setcatdeleteResponse}) => {

  const [deleteVideoResponse,setdeleteVideoResponse]=useState({})
  const [allcard,setallcard]=useState([])

  useEffect(()=>{
    getAllvideocard()
  },[addvideoresponse,deleteVideoResponse,deleteRespose])

  const getAllvideocard=async()=>{
    try {
       const result=await getAllvideosAPI()
      //  console.log(result)
       if(result.status>=200 &&result.status<=300){
        setallcard(result.data)
        
       }
       else{
        console.log('something went wrong')
       }
    } catch (err) {
      console.log(err)
    }
  }
  const videoDroped=async(e)=>{
    const {categorydata,videoData}=JSON.parse(e.dataTransfer.getData('catvideo'))
    categorydata.videos=categorydata.videos.filter((val)=>val.id!==videoData.id)
    try {
      const result= await upadateCategoryAPI(categorydata.id,categorydata)
      if(result.status>=200 && result.status<300){
       const result= await addVideo(videoData)
       if(result.status>=200 && result.status<300){
        getAllvideocard()
        setcatdeleteResponse(result)
       }
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div onDrop={(e)=>videoDroped(e)} onDragOver={(e)=>e.preventDefault()} className='min-h-100  border-2 rounded mb-10 mx-2' >
      {/* react row */}
    
      <Row className='flex '>

        { allcard.length> 0 ?

          allcard.map(project=>(
          <Col lg={4} md={6} sm={12} key={project.id}>
        <VideoCard displayData={project} setdeleteVideoResponse={setdeleteVideoResponse} />
        </Col>
          ))
        :
        <div className='text-red-600  text-center'>No video added yet..</div>
        }
        
      </Row>
    </div>
  )
}

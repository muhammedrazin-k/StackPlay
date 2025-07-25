import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from "react-toastify";
import { addCategoryApi, deleteCategoryAPI, deletevideoAPI, getCategoryAPI, upadateCategoryAPI } from "../services/allAPI";
import { VideoCard } from "./VideoCard";
import { Row,Col } from "react-bootstrap";


export const Catagory= ({setDeleteresponse,catdeleteResponse}) => {

  const [show,setshow]=useState(false)
  const [categoryname,setcategoryName]=useState('')
  const [allCategory,setallCategory]=useState([])



  const handleShow=()=>setshow(true)
  const handleClose=()=>setshow(false)

  const addcategory=async()=>{
    if(categoryname){
      try {
      const result=await addCategoryApi({name:categoryname,videos:[]})
     

      if(result.status>=200 && result.status<=300){
        toast.success(`${result.data.name} category added your playlist`)
        handleClose()
        getallCategory()
      }
      else{
        console.log(err)
      }
      } catch (err) {
        console.log(err)
      }
    }
    else{
      toast.error('enter a catogory Name')
    }
  }

  useEffect(()=>{
    getallCategory()
  },[catdeleteResponse])

  const getallCategory=async()=>{
    try {
      const result=await getCategoryAPI()
      if(result.status>=200 && result.status<300){
        setallCategory(result.data)
      }
    } catch (err) {
      console.log(err)
      
    }

  }

  const handleDelete=async(categoryId)=>{
    try {
      const result=await deleteCategoryAPI(categoryId)
      if(result.status>=200 && result.status<300){
        getallCategory()
        toast.error('category deleted successfully')
      }
      
      
    } catch (err) {
      console.log(err)
      
    }
  }

const videodroped=async(e,categorydetails)=>{
  const video=JSON.parse(e.dataTransfer.getData('video'))
 categorydetails.videos.push(video)

  try {
    const result=await upadateCategoryAPI(categorydetails?.id,categorydetails)
    if(result.status>=200 && result.status<300){
      getallCategory()
      toast.info(` video successfully added to ${categorydetails.name} category`)
      const result=await deletevideoAPI(video?.id)
      setDeleteresponse(result)
    }
  } catch (err) {
    console.log(err)
    
  }

}

const dragStarted=(e,categorydata,videoData)=>{
  e.dataTransfer.setData('catvideo',JSON.stringify({categorydata,videoData}))
}
  return (
    <div className="" >
      <div className="CategoryHeader flex justify-between p-1 ">
        <p className="text-gray-200 text-lg md:text-2xl font-[satisfy] ">
          All Categories
        </p>
        <button
          className="bg-amber-400 rounded-full w-8 md:w-10 h-8 md:h-10 font-bold text-gray-600 hover:bg-amber-500 hover:scale-95 transition-all duration-[800ms]"
         onClick={handleShow}
        >
          +
        </button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <div className='bg-gray-200'>
        <Modal.Header closeButton className='px-5'>
          <Modal.Title style={{color:'orangered'}}>CATEGORY DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border-2 w-full p-4'>
            <input type="text" className='w-full rounded-lg p-2 my-2' placeholder='CategoryName' onChange={(e)=>setcategoryName(e.target.value)}/>
            
          </div>
        </Modal.Body>
        <Modal.Footer className='px-5'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addcategory} >Add</Button>
        </Modal.Footer>
        </div>
      </Modal>

      </div>

      <div className="categoryVideos ">
        {allCategory.map(eachcategory=>(
          
          <div onDrop={(e)=>videodroped(e,eachcategory)} onDragOver={(e)=>e.preventDefault()} key={eachcategory.id}>
          <div className="categoryCard p-3 shadow-2xl mt-2 hover:bg-gray-950 hover:scale-95 transition-all duration-1000 flex justify-between bg-gray-800 rounded text-gray-200 items-center" >
          <p className="my-auto">{eachcategory.name}</p>
          <button onClick={()=>handleDelete(eachcategory.id)}>
                <i className="fa-solid fa-trash" ></i>
                </button>
           </div>

           <div>
            <Row>
              {
                eachcategory.videos?.length>0 && eachcategory.videos.map(video=>(
                  <Col  md={6} sm={12} key={video.id} draggable={true} onDragStart={(e)=>dragStarted(e,eachcategory,video)}>
                    <VideoCard displayData={video} insideCategory={true}/>
                  </Col>
                ))
              }
            </Row>
           </div>
        </div>
        
        

        ))
        
        }
      </div>
    </div>
  );
};

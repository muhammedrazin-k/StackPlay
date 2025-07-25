import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { deletevideoAPI, SaveHistoryApi } from "../services/allAPI";
import { toast } from "react-toastify";


function MyVerticallyCenteredModal(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Spidey
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <iframe
                className="w-full h-[400px] "
                src={props.displaydata?.youtubeUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export const VideoCard = ({displayData,setdeleteVideoResponse,insideCategory}) => {
  
  const [modalShow, setModalShow] =useState(false);

  const handleButton=async()=>{
    const {id,caption,youtubeUrl}=displayData
    const localdate=new Date().toLocaleString()
    const historydetails={id,caption,youtubeUrl,localdate}
    try {
      const result=await SaveHistoryApi(historydetails)
      console.log(result)
      
    } catch (error) {
      console.log(error)
    }
  }
  const deletevideo=async(videoId)=>{
    try {
      const result=await deletevideoAPI(videoId)
      setdeleteVideoResponse(result)
      toast.error('successfully deleted video')
      
    } catch (error) {
      console.log(error)
    }
  }
 
  const dragStarted=(e,videoDetails)=>{
    // console.log(videoDetails)
    e.dataTransfer.setData('video',JSON.stringify(videoDetails))

  }
  return (
    <div>
      <div className="cards px-3 md:px-1 p-2  mb-5" draggable={true} onDragStart={(e)=>dragStarted(e,displayData)}>
        <div
          className="bg-gray-200 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:bg-gray-400 hover:rotate-1 cursor-pointer transition-all duration-[700ms]"
          onClick={() =>{ 
            setModalShow(true)
            handleButton()
          }}
        >
          
          <Card style={{ backgroundColor: "transparent", width: "100%" }}>
            <Card.Img
              variant="top"
              src={displayData.imageUrl}
              className="h-[300px] sm:h-[280px] rounded-t-lg p-2  object-cover"
            />
            <Card.Body className="flex justify-between ">
              <Card.Title className=" flex items-center w-full" style={{fontSize:'13px'}}>
                {displayData?.caption}
              </Card.Title>

              {!insideCategory && <Button
              
                style={{
                  color: "darkred",
                  backgroundColor:'transparent',
                  padding: "3%",
                  cursor:"pointer"
                }}
                onClick={(e)=>{
                  e.stopPropagation()
                  deletevideo(displayData.id)

                }}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>}
            </Card.Body>
          </Card>
        </div>
        <MyVerticallyCenteredModal displaydata={displayData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </div>
  );
};

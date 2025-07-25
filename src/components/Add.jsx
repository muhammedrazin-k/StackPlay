import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import base_url from '../services/serverUrl';
import { addVideo } from '../services/allAPI';




export const Add = ({setaddvideoresponse}) => {
  const [show, setShow] = useState(false);
  const [videodetails,setVideoDetails]=useState({caption:'',imageUrl:'',youtubeUrl:''})
  const [isinvalid, setisinvalid]=useState(false)
  const handleClose = () => {
    setShow(false)
    setVideoDetails({caption:'',imageUrl:'',youtubeUrl:''})
    setisinvalid(false)
  }
  const handleShow = () => setShow(true);

  const handleupload=async()=>{
    const {caption,imageUrl,youtubeUrl}=videodetails

    if(caption&&imageUrl&&youtubeUrl){
      //api
      try {
        const result=await addVideo(videodetails)
      if(result.status>=200 && result.status<=300){
        toast.success(`${result.data.caption} is successfully Added..`)
        handleClose()
        setaddvideoresponse(result)
      }
      else{
        console.log('something went wrong')
      }
      } catch (error) {
        console.log(error)
      }
    }else{
      toast.warning('Enter the field completly')
    }
  }

  const getEmbededUrl=(url)=>{
    
    if(url.includes('v=')){
      let videoId= url.split('v=')[1].slice(0,11)
      setVideoDetails({...videodetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}?autoplay=1`})
      setisinvalid(false)
    }else{
      setVideoDetails({...videodetails,youtubeUrl:''})
      setisinvalid(true)
    }


  }

  return (
    <div>
      <div className="addButton flex gap-1  ">
        <p className=' my-auto text-gray-300 font-sans font-medium text-[12px] md:text-lg'>Upload New Video </p>
        <div className="roundbutton " >
        <button className='bg-amber-400 rounded-full w-8 md:w-10 h-8 md:h-10 font-bold text-gray-600 hover:bg-amber-500 hover:scale-95 transition-all duration-[800ms]' onClick={handleShow}>+</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <div className='bg-gray-200'>
        <Modal.Header closeButton className='px-5'>
          <Modal.Title style={{color:'orangered'}}>URL HERE...!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border-2 w-full p-4'>
            <input type="text" className='w-full rounded-lg p-2 my-2' placeholder='Video caption' onChange={(e)=>setVideoDetails({...videodetails,caption:e.target.value})} />
            <input type="text" className='w-full rounded-lg p-2 my-2' placeholder='image Url' onChange={(e)=>setVideoDetails({...videodetails,imageUrl:e.target.value})} />
            <input type="text" className='w-full rounded-lg p-2 my-2' placeholder='youtube url' onChange={(e)=>getEmbededUrl(e.target.value)}/>
            {isinvalid && <div className='text-red-500'>
              <p>invalid youtube url</p>
            </div>}
          </div>
        </Modal.Body>
        <Modal.Footer className='px-5'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupload}>Add</Button>
        </Modal.Footer>
        </div>
      </Modal>
        </div>
      </div>
    </div>
  )
}

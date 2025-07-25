import React, { useState } from 'react'
import { Add } from '../components/Add'
import { Link } from 'react-router-dom'
import { View } from '../components/View'
import { Catagory } from '../components/Catagory'


export const Home = () => {
  const [addvideoresponse,setaddvideoresponse]=useState({})
  const [deleteRespose,setDeleteresponse]=useState({})
  const [catdeleteResponse,setcatdeleteResponse]=useState({})
  
  return (
    <div style={{minHeight:'100vh'}}>

      <div className="homeContents flex p-[4%]">
        <div className='addvideo w-50'>
        <Add setaddvideoresponse={setaddvideoresponse}/>
        </div>
        <div className='Watchhistory w-50 flex justify-end '> 
      <Link to={'/history'} className='text-gray-300 no-underline font-sans font-medium text-[12px] md:text-lg'>Watch History</Link>
        </div>
      </div>

      <div className="viewCatagory flex p-[4%] flex-col lg:flex-row items-center md:items-start ">
        <div className='w-[60%] '>
          <div className="textHead text-center text-gray-200 text-lg md:text-2xl font-[satisfy]  ">
          <p>View Playlist</p>
        </div>
          <View addvideoresponse={addvideoresponse} deleteRespose={deleteRespose} setcatdeleteResponse={setcatdeleteResponse}/>
        </div>
        <div className='w-[40%] '>
          <Catagory setDeleteresponse={setDeleteresponse} catdeleteResponse={catdeleteResponse}/>
        </div>
      </div>
    
    </div>
  )
}

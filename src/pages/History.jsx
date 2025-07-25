import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import { DeleteHistoryAPI, getAllHistory } from '../services/allAPI'
import { toast } from 'react-toastify'

export const History = () => {

  const [allHistory,setallHistory]=useState([])
  useEffect(()=>{
    gethistory()
  },[])
  const gethistory=async()=>{
    try {
      const result=await getAllHistory()
      console.log(result)
      if(result.status>=200 && result.status<=300){
        setallHistory(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete=async(historyId)=>{
    try {
      const result=await DeleteHistoryAPI(historyId)

      if(result.status>=200 && result.status<=300){
        gethistory()
        toast.success('video history deleted successfully')
      }
    } catch (err) {
      console.log(err)
      
    }

  }

  return (
    <div style={{minHeight:'100vh'}}>

      <div className="historyhead">
        <p className='text-center text-gray-300 text-xl md:text-2xl font-sans font-normal;'>Watch History</p>
      </div>

      <div className="homeicon flex justify-end px-4  ">
          <Link to={'/home'} className='no-underline text-gray-300 font-sans text-sm'><i className="fa-solid fa-house text-gray-300 " ></i> Home
          </Link>
      </div>

      <div className="tablediv  p-4 ">
      {allHistory.length>0 ? 

      allHistory.map(datas=>(
<div className=' overflow-x-auto shadow-[0_0_20px_rgba(0,0,0,0.9)] p-4 rounded-xl hover:scale-95 transition-all duration-1000 ease-in-out mb-3' key={datas.id}>
           <table className='  min-w-[300px] sm:w-full md:w-full text-center mx-auto '>
            <thead>
            <tr className='  px-3 text-gray-200  h-6 border-b-2'>
            <th className='text-[10px] md:text-[12px] lg:text-[16px]'>slno:</th>
            <th  className='text-[10px] md:text-[12px] lg:text-[16px]'>Name</th>
            <th className='text-[10px] md:text-[12px] lg:text-[16px]'>Url</th>
            <th className='text-[10px] md:text-[12px] lg:text-[16px]'>Date</th>
            <th className='text-[10px] md:text-[12px] lg:text-[16px]'>option</th>
            </tr>
            </thead>
            <tbody>
            <tr className='text-red-200 h-20'>
              <td  className='text-[10px] md:text-[12px] lg:text-[16px] px-1'>{datas.id}</td>
              <td className='text-[10px] md:text-[12px] lg:text-[16px] px-1'>{datas.caption}</td>
              <td className='text-[10px] md:text-[12px] lg:text-[16px] px-1'>{datas.youtubeUrl}</td>
              <td className='text-[10px] md:text-[12px] lg:text-[16px] px-1'>{datas.localdate}</td>
              <td className='text-center'>
                <button onClick={()=>handleDelete(datas.id)}>
                <i className="fa-solid fa-trash" ></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      ))
        
          :
          <div className='text-red-500 text-center'> There is no history yet..!</div>
          }
      </div>
    </div>
  )
}

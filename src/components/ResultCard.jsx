import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addedtoast, addtocollection } from '../Redux/Features/collectionSlice';
const ResultCard = ({item}) => {
    const dispatch = useDispatch();
    const addToCollection = (item) => {
       dispatch(addtocollection(item));
       dispatch(addedtoast());
    }
  return (
    <div className='w-[17vw] h-70 relative  rounded overflow-auto'>
        <a href={item.url} target='_blank' className='h-full'>
            {item.type == 'photo'? <img className='h-full w-full object-cover object-center' src={item.src}/> : ''}
            {item.type == 'video'? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}/> : ''}
            {item.type == 'GIFs'? <img className='h-full w-full object-cover object-center' src={item.src}/> : ''}
        </a>
      <div id='bottom' className='absolute bottom-0 text-white w-full h-[25%] px-5 flex justify-between'>
        <h2 className='text-xl font-semibold capitalize w-[75%]'>{item.title}</h2>
        <button onClick={()=> {addToCollection(item)}} className={`hover:bg-emerald-800 transition text-white p-1 rounded w-[25%] h-fit uppercase bg-emerald-600 active:scale-95 cursor-pointer absolute bottom-2 right-3`}>Save</button>
    </div>
    </div>
  )
}

export default ResultCard

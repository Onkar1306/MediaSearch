import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { setActiveTab } from '../Redux/Features/searchSlice';
const Tabs = () => {
    const tabs = ['photos','videos','GIF']; 
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='p-8 flex pl-12 pr-12 gap-20 '>
      {tabs.map(function(elem,idx){
        return <button onClick={()=>{dispatch(setActiveTab(elem))}} className={` ${(activeTab==elem?'bg-gray-700 hover:bg-gray-800':'bg-emerald-500')} transition text-white p-4 rounded w-25 uppercase hover:bg-emerald-600 active:scale-95 cursor-pointer`} key={idx}>{elem}</button>
      })}
    </div>
  )
}

export default Tabs

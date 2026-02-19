import React from 'react'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import {useDispatch} from 'react-redux'
import { setQuery } from '../Redux/Features/searchSlice'


const Search = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    }
  return (
    <div className='bg-gray-900' onSubmit={(e)=>{submitHandler(e)}}>
      <form className='p-8 flex pl-12 pr-12'>
        <input required type="text" placeholder='search anything here..' value={text} onChange={(e) => setText(e.target.value)} className= 'text-white flex-1 p-2 border-white border-2 rounded outline-none'/>
        <button  className= 'ml-5 active:scale-95 cursor-pointer p-2 h-12 w-12 bg-white border-2 border-white rounded-full'><i className="ri-search-ai-2-fill"></i></button>
      </form>
    </div>
  )
}

export default Search

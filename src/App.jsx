import React from 'react'
import { fetchGifs, fetchPhotos, fetchVideos } from './api/mediaApi'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-950'>

      


      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>

      
      <ToastContainer/>







    {/* <button onClick={async() => {
      const data = await fetchPhotos('cat')
      console.log(data.results)
    }} className='p-4 text-amber-500 bg-amber-50 m-4 rounded cursor-pointer'>Get Photos</button>
    <button onClick={async() => {
      const data = await fetchVideos('nature')
      console.log(data.videos)
    }} className='p-4 text-amber-500 bg-amber-50 m-4 rounded cursor-pointer'>Get Videos</button>
    <button onClick={async() => {
      const data = await fetchGifs('nature')
      console.log(data.data)
    }} className='p-4 text-amber-500 bg-amber-50 m-4 rounded cursor-pointer'>Get Gifs</button> */}
    </div>
    
  )
}

export default App

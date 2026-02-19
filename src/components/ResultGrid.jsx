import React from 'react'
import {fetchGifs,fetchPhotos,fetchVideos} from '../api/mediaApi'
import {setActiveTab,setError,setLoading,setQuery,setResults} from '../Redux/Features/searchSlice'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { act } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const {query,activeTab,results,loading,error} =useSelector((store) => store.search)
    const dispatch = useDispatch();
   useEffect(function(){
        if(!query) return
        const getData = async() => {
            try {
                dispatch(setLoading())
                let data=[],response
                
                if(activeTab == 'photos'){
                    response = await fetchPhotos(query)
                    data = response.results.map((item)=>({
                        id:item.id,
                        type:'photo',
                        title:item.description,
                        thumbnail:item.urls.small,
                        src:item.urls.full,
                        url:item.links.html
                    }))
                }
                if(activeTab == 'videos'){
                    response = await fetchVideos(query)
                    data = response.videos.map((item)=>({
                        id : item.id,
                        type:'video',
                        title:item.user.name || query,
                        thumbnail:item.image,
                        src:item.video_files[0].link,
                        url:item.url
                    }))
                    
                }
                if(activeTab == 'GIF'){
                    response = await fetchGifs(query)
                    data = response.data.map((item)=>({
                        id : item.id,
                        type:'GIFs',
                        title:item.title || query,
                        thumbnail:item.images.preview_gif.url,
                        src:item.images.preview_gif.url,
                        url:item.bitly_gif_url
                    }))
        
                }
                console.log(data)
                
                dispatch(setResults(data))
            } catch (error) {
                dispatch(setError(error.message))
            }
        }
        getData()
   },[query,activeTab,dispatch])
   if(error) return <h1>error</h1>
   if(loading) return <h1>Loading...</h1>
  return (
    <div className='flex  w-full flex-wrap gap-5 overflow-auto px-12 py-6' >
      {results.map((item,idx)=>{
        return (
                <div key={idx}>
                    <ResultCard item={item}/>
                </div>
            )
      })}
    </div>
  )
}

export default ResultGrid

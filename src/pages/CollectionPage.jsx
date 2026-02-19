import React from 'react'
import NavBar from '../components/NavBar'
import {useDispatch,useSelector} from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearcollection, cleartoast } from '../Redux/Features/collectionSlice'

const CollectionPage = () => {
    const dispatch = useDispatch()
    const collection = useSelector(state => state.collection.items)
    const clearCollection = () => {
        dispatch(clearcollection());
        dispatch(cleartoast());
    }
  return (
    <div>
      <NavBar/>
      <div className=' px-12 flex justify-end'>
        <h2 onClick={() => clearCollection()} className='px-2 py-4 bg-red-700 text-white w-40 text-center rounded hover:bg-red-800 active:scale-95 cursor-pointer'>Clear Collection</h2>
      </div>
        <div className='flex  w-full flex-wrap gap-5 overflow-auto px-12 py-6'>
            {collection.map((item,idx)=>{
                return <div key={idx} >
                    <CollectionCard item={item} />
                </div>
            })}
        </div>
    </div>
  )
}

export default CollectionPage

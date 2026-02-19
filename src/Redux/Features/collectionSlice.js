import {createSlice} from '@reduxjs/toolkit'
import {Bounce, Slide, toast } from 'react-toastify';
  

const initialState= {
    items : JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addtocollection:(state,action) =>{
            const alreadyExist = state.items.find(
                item => item.id == action.payload.id
            )
            if(!alreadyExist){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
            }
        },
        removefromcollection:(state,action) => {
            state.items =state.items.filter(
                item => item.id != action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearcollection : (state) =>{
            state.items = []
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        addedtoast:()=>{
            toast.success('Added to collection', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
                });
                            
        },
        removetoast : ()=>{
            toast.error('Removed from collection', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
                });
        },
        cleartoast : ()=>{
            toast.info('Collection is empty', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
    }
})

export const {removetoast,clearcollection,removefromcollection,addtocollection,addedtoast,cleartoast} = collectionSlice.actions

export default collectionSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
import ChatbotSlice from './Slices/ChatbotSlice'

export const store=configureStore({
  reducer:{
   chatbot:ChatbotSlice,  
  }
})
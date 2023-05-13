import { Route, Routes } from "react-router-dom"

import JoinScreen from "./Components/JoinScreen/JoinScreen"
import ChatScreen from "./Components/ChatScreen/ChatScreen"

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/join" element={<JoinScreen/>} />
      <Route path="/chat" element={<ChatScreen />} />
    </Routes>
  )
}
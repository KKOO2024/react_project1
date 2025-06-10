import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../Component/Layout'
import RegisterItem from '../pages/RegisterItem'
import Vote from '../pages/Vote'
import VoteResult from '../pages/VoteResult'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/registerItem' element={<RegisterItem/>}/>
            <Route path='/vote' element={<Vote/>}/>
            <Route path='/voteResult' element={<VoteResult/>}/>
        </Route>
    </Routes>
  )
}

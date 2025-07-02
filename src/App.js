import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


// import sampleData from '../sample.json'; // Assuming you're importing the JSON locally

// import NewsItem from './Components/NewsItem';

const App =()=> {

  const pageSize=5;
  const apikey = process.env.REACT_APP_NEWS_API;
  // state ={
  //   progress:0
  // }

  const [progress , setProgress] = useState(0);
  // setProgress=(progress)=>{

  //   setState({progress:progress})
  // }
  

    return (
      <Router>
      <div>
        {/* <Navbar/> */}
        
        <Navbar />
        <LoadingBar
        color="#f11946"
        progress={progress}
        />
        <Routes>
            <Route exact path="/general" element={<News setProgress = {setProgress} apikey = {apikey}  pageSize={pageSize}  key = "general" country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize} country="us"  key = "business" category="business" />} />
            <Route exact path="/entertainment"  element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize}  key = "entertainment" country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize} country="us" key = "health" category="health" />} />
            <Route exact path="/sports"  element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize} country="us" key = "sports" category="sports" />} />
            <Route exact path="/technology"  element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize} country="us" key = "technology" category="technology" />} />
            <Route exact path="/science" element={<News setProgress = {setProgress} apikey = {apikey} pageSize={pageSize}  key = "science" country="us" category="science" />} />

        </Routes>

        
      </div>
      </Router>
    )
  }
export default App

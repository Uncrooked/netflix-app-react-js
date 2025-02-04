//react
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components & templates
import Header from "./commons/views/templates/header/Header";
import Home from "./routes/home/Home";
import MyList from "./routes/my-list/MyList";
import New from "./routes/new/New";
import Footer from "./commons/views/templates/footer/Footer";

//functions
import {getData} from "./commons/functions/requests";

//css
import "./main.css";


function App(){

  //dropdown selected
  const [contentTypeSelected,setContentTypeSelected] = useState("movie");
  const [genreSelected,setGenreSelected] = useState(10751);
  const [isFiltered,setIsFiltered] = useState(false);

  //data fetched
  const [currentDataFetched,setCurrentDataFetched] = useState([]);

  useEffect(() => {

    let isContentTypeSelected = contentTypeSelected == "false" ? false : contentTypeSelected;
    let isGenreSelected = genreSelected == "false" ? false : genreSelected;
    if(isContentTypeSelected || isGenreSelected){
      const args = {
        contentType:{current:contentTypeSelected},
        genre:{current:genreSelected},
        pages:{
          multiple:true,
          number:7
        }
      }

      getData(args,setCurrentDataFetched);
    }

  },[contentTypeSelected,genreSelected]);

  return(
    <BrowserRouter>
      <Header 
        functionsSet={[setContentTypeSelected,setGenreSelected]}
        valuesDropDownSelected={[contentTypeSelected,genreSelected]} 
        setIsFiltered={setIsFiltered}
      />
      <Routes>
        <Route path="/"  element={<Home allData={currentDataFetched} contentTypeSelected={contentTypeSelected} isFiltered={isFiltered} />} end/>
        <Route path="/new" element={<New setGenre={setGenreSelected} setContentType={setContentTypeSelected} selected={[contentTypeSelected,genreSelected]}/>}/>
        <Route path="/my-list" element={<MyList />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

//render from root
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <App />
);
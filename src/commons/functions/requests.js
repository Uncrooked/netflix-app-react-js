async function fetchData(url){//good

  try{
    //request
    const response = await fetch(url,{
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRkY2NjNTRmZDEyMDZhNTA5MGYwOTYxMTQ2OGE5NiIsIm5iZiI6MTczNDM0ODE4NS4wNzYsInN1YiI6IjY3NjAwZDk5ZjU0ZGJlYjZiMjliNzc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BeDElzVDugJL9WAXPIHFhSTjFKCxfx4vx8wi6stc_2Y"
      }
    })

    const data = await response.json();
    
    return data;

  }catch(error){
    console.error(error);
  }
}

async function pageMultiple(args,contentTypeParam,genreParam,max){
  if(args.pages.multiple){
    let pagesTemp = [];

    if(args.pages.number && args.pages.number != undefined){
      for(let i = 1; i <= args.pages.number ; i++){
        let url = `https://api.themoviedb.org/3/discover/${contentTypeParam}?page=${i}&with_genres=${genreParam}`;
        pagesTemp.push(fetchData(url));
      }
    }else{
      for(let page of args.pages.values){
        let url = `https://api.themoviedb.org/3/discover/${contentTypeParam}?page=${page}&with_genres=${genreParam}`;
        pagesTemp.push(fetchData(url));
      }
    }

    let results = await Promise.all(pagesTemp);
    results = results.map(data => max ? data.results.slice(max) : data.results);
    return results;
  }else{
    let url = `https://api.themoviedb.org/3/discover/${contentTypeParam}?page=${args.pages.current}&with_genres=${genreParam}`;
    let dataResult = await fetchData(url);
    dataResult = max ? dataResult.results.slice(max) : dataResult.results;
    return dataResult;
  }
}

async function genreMultiple(args,contentTypeParam,max){

  if(args.genre.multiple){
    let genreTemp = [];

    for(let genreValue of args.genre.values){
      let pagesTemp = await pageMultiple(args,contentTypeParam,genreValue,max);
      genreTemp.push(pagesTemp);
    }
    return genreTemp;
  }else{
    let pagesTemp = await pageMultiple(args,contentTypeParam,args.genre.current,max);
    return pagesTemp;
  }
}

async function contentTypeMultiple(args,max){
  if(args.contentType.multiple){
    let contentTypeTemp = [];

    for(let contentTypeValue of args.contentType.values){
      let genreTemp = await genreMultiple(args,contentTypeValue,max);
      contentTypeTemp.push(genreTemp);
    }

    return contentTypeTemp;
  }else{
    let genreTemp = await genreMultiple(args,args.contentType.current,max);
    return genreTemp;
  }
}

/*—————————————————————————————————EXPORT FUNCTIONS—————————————————————————————————————*/


//get Data
export async function getData(args,setDataFunction = false, max = false){//good
  let allData = await contentTypeMultiple(args,max);

  if(setDataFunction){
    setDataFunction(allData);
  }else{
    return allData;
  }
}


//search data
export async function searchData(dataToSet,value,setNumberOfPages = false,currentPage = 1,isAlreadySearch = false){

  let url = "https://api.themoviedb.org/3/search/multi?page=" + currentPage + "&query=" + value;
  let searchData = await fetchData(url);

  if(searchData.total_pages > 1){
      if(isAlreadySearch){
          dataToSet(current => [...current,...searchData.results]);
          if(setNumberOfPages){
              setNumberOfPages(searchData.total_pages);
          }
      }else{
          dataToSet(searchData.results);
          if(setNumberOfPages){
              setNumberOfPages(searchData.total_pages);
          }
      }
  }else{
    dataToSet(searchData.results);
  }
  
}

/*—————————————————————————————————END EXPORT FUNCTIONS—————————————————————————————————————*/
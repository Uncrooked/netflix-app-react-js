/*--------------——————————---------------------------------------REQUESTS----------------------------------------------------------------------------------*/


/*----------MAIN----------*/

export async function getGenresData(contentType,functionToSetData = false){
  const response = await fetch("https://api.themoviedb.org/3/genre/" + contentType + "/list?language=fr",{
      headers:{Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRkY2NjNTRmZDEyMDZhNTA5MGYwOTYxMTQ2OGE5NiIsIm5iZiI6MTczNDM0ODE4NS4wNzYsInN1YiI6IjY3NjAwZDk5ZjU0ZGJlYjZiMjliNzc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BeDElzVDugJL9WAXPIHFhSTjFKCxfx4vx8wi6stc_2Y"}
  });

  const result = await response.json();

  if(functionToSetData){
    functionToSetData(result.genres);
  }else{
    return result.genres
  }
}

export async function getAllData(functionToSetData,functionToSetFirstData) {
  let allDataArray = [];
  const allMovies = {};
  const allSeries = {};
  const contentTypeArray = [
    { name: "movie", value: allMovies },
    { name: "tv", value: allSeries }
  ];

  for (let item of contentTypeArray) {
    let allGenres = await getGenresData(item.name);

    // Concurrently fetch data for each genre
    
    const genrePromises = allGenres.map(async (param,index) => {
      let dataToGet = await getData(item.name, param.id);
      item.value[param.name] = dataToGet; // Fixed typo here
        if(index == 1 && item.name == "movie"){
          functionToSetFirstData(dataToGet);
        }
    });

    // Wait for all promises to resolve
    await Promise.all(genrePromises);

    allDataArray.push(item.value);
  }

  // Call the provided function with the final data
  functionToSetData(allDataArray);
}

/*----------END MAIN----------*/

export async function getTopFilm(dataToSet){
  const response = await fetch("https://api.themoviedb.org/3/search/movie?query=Squid Game&language=fr-FR",{
      headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRkY2NjNTRmZDEyMDZhNTA5MGYwOTYxMTQ2OGE5NiIsIm5iZiI6MTczNDM0ODE4NS4wNzYsInN1YiI6IjY3NjAwZDk5ZjU0ZGJlYjZiMjliNzc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BeDElzVDugJL9WAXPIHFhSTjFKCxfx4vx8wi6stc_2Y"
      }
  })

  const result = await response.json();
  dataToSet(result.results[1]);
}

/*----------MAIN----------*/

/*--------------——————————--------------------------------------- END REQUESTS----------------------------------------------------------------------------------*/
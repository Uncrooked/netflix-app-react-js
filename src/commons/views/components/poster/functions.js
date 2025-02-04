export async function getSerieFirstEp(index,dataToSet){
    const response = await fetch("https://api.themoviedb.org/3/tv/" + index + "/season/1",{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRkY2NjNTRmZDEyMDZhNTA5MGYwOTYxMTQ2OGE5NiIsIm5iZiI6MTczNDM0ODE4NS4wNzYsInN1YiI6IjY3NjAwZDk5ZjU0ZGJlYjZiMjliNzc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BeDElzVDugJL9WAXPIHFhSTjFKCxfx4vx8wi6stc_2Y"
        }
    })

    const result = await response.json();

    dataToSet(result.episodes[0].name);
}
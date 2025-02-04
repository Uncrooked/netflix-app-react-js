import DropDown from "../../commons/views/components/inputs/DropDown";
import MyListContainer from "../../commons/views/templates/lists/my-list-grid/MyListContainer";
import Loading from "../../commons/views/components/loadings/Loading";

//react
import { useEffect,useState } from "react";

//values
import { myList } from "../../commons/data/data";

//functions
import { getData } from "../../commons/functions/requests";
import { onChangeDropdownList } from "./functions";

//css
import "./MyList.css";

export default function MyList(){


    const [myListData,setMyListData] = useState([]);
    const [myListRender,setMyListRender] = useState([]);

    useEffect(() => {
        const allGenres = myList.map(param => param.genre);
        const args = {
            contentType:{current:"movie"},
            genre:{
                multiple:true,
                values:[...allGenres]
            },
            pages:{current:1}
        }
        getData(args,setMyListData);
    },[]);

    useEffect(() => {
        if(myListData.length > 0){
            setMyListRender(myListData.map((param,index) => {
                if(param){
                    return <MyListContainer value={myList[index]} suggestionsData={param} key={index}/>
                }
            }))
        }
        console.log("myListData",myListData);
    },[myListData]);    
    
    return(
        <section id="my-list" className="responsive-spacing">
            <h1>MA LISTE</h1>
            {myListRender.length > 0 ? <DropDown name="all-lists" values={myList} onChangeEvent={onChangeDropdownList} /> : <Loading />}
            {myListRender}
        </section>
    )
}
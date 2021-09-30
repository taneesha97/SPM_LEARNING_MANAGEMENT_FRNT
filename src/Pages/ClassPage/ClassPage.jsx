import React, {useState} from 'react'
import ClassItems from "../../Component/Class/ClassPageInterfaces/ClassItems";
import Footer from "../../Component/Footer/Footer";
import ClassSearch from "../../Component/Class/ClassPageInterfaces/ClassSearch";
import './ClassPage.css'
import {useDispatch, useSelector} from "react-redux";
import {getClasses} from "../../Action/Class";
import ClassTile from "../../Component/Class/ClassTile/ClassTile";

function ClassPage() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const searchData = useSelector((state) => state.classes.classRecords.records);
    console.log('#######', searchTerm);
    React.useEffect(() => {
        dispatch(getClasses());
    }, []);
    return (
     
        <div style={{backgroundColor:'#D6D6D6'}}>
            <ClassSearch searchData={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="row">
                {searchData?.filter((val) => {
                        if(searchTerm == ""){
                            return val
                        }else if(val?.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if (val?.description.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    })
                    .map((row) => (
                        console.log('%%%%%%%%%%%%%%%%',row),
                            <div className="col-md-4">
                                <ClassTile rows = {row}/>
                            </div>
                    ))}
            </div>
            <Footer/>
        </div>
    )
}

export default ClassPage;

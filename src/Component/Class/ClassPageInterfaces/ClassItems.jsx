import React from 'react'
import ClassTile from "../ClassTile/ClassTile";
import './ClassItems.css'
import {useDispatch, useSelector} from "react-redux";
import {getClasses} from "../../../Action/Class";
function ClassItems() {

    const dispatch = useDispatch();
    //get all class data
    const classData = useSelector((state) => state.classes.classRecords.records);
    console.log('CLASS DETAIL', classData);

    React.useEffect(() => {
        // setIsLoading(dataLoading);
        dispatch(getClasses());
    }, []);

    const rows = [
        // {"title1": classData.name,"title2": 'name1', "image": ''},
        {classData}
    ];
    return (
        <React.Fragment>
            <div className="allclassitems">
                <div>
                    <div className="home-class-container-filter row">
                        <div className="all-class-section-row">
                            {rows.slice(0,50).map((row)=> (
                                <div className="col-md-4">
                                    <ClassTile rows={row}/>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ClassItems

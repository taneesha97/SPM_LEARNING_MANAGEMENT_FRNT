import React, {useState} from 'react'
import "./CourseMgntInt.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import CustomRow from "./CustomRow/CustomRow";
import {useDispatch} from "react-redux";
import {addCourse} from "../../../Action/Courses";

function CourseMgntInt({array4}) {

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        body: '',
        price: ''
    });

    const dispatch = useDispatch();

    const SubmitCourse = (e) => {
        e.preventDefault();
        dispatch(addCourse(postData));
    }

    return (
        <React.Fragment>
            <div className="course-component">
                <div className="input-form-container">
                    <form className="form" onSubmit={SubmitCourse}>
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Title</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"
                               value={postData.title}
                               onChange={(e) => setPostData({...postData, title: e.target.value})}
                        />

                        <label htmlFor="lname">Description</label>
                        <input type="text" id="lname" name="lastname" placeholder="Number of Chapters.."
                               className="form-input"
                               value={postData.description}
                               onChange={(e) => setPostData({...postData, description: e.target.value})}
                        />

                        <label htmlFor="lname">Body</label>
                        <input type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"
                               value={postData.body}
                               onChange={(e) => setPostData({...postData, body: e.target.value})}
                        />

                        <label htmlFor="lname">Price</label>
                        <input type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="dark-button" type="submit"> Submit </button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="course-table">
                    <div className="section-header dark-header"> Active Courses</div>
                    <div id="style-1" className="course-table-body-scrollable">
                        {array4?.map((item) => (
                            <CustomRow header={item.title} description={item.description} body={item.body}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseMgntInt

import React from 'react'
import "./FileAttachInt.css"
function FileAttachInt({array4}) {
    return (
        <div>
            <div className="file-component">
                <div className="input-form-container">
                    <form className="form">
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"/>

                        <label htmlFor="lname">Number of Chapters</label>
                        <input type="text" id="lname" name="lastname" placeholder="Number of Chapters.."
                               className="form-input"/>

                        <label htmlFor="lname">Price</label>
                        <input type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"/>

                        <label htmlFor="lname">Description</label>

                        <input type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="dark-button">Add</button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="file-table">
                    <div className="section-header dark-header"> Active Courses </div>
                    <div id="style-1" className="file-table-body-scrollable">
                        <table>
                        {array4.map((item) => (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FileAttachInt

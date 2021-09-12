import React, {useState} from 'react'
import './styles.css'
import CustomAlert from "../../CustomAlert/CustomAlert";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
function PopUpTeacherStatusComponent(props) {

    const [selectedStatus, setSelectedStatus] = useState(props.name2);
    const popupView = () => {
        props.setTrigger(false)
    }

    const popupView1 = () => {
        console.log('coll')
        props.setTrigger(false)
    }

    const SelectedStatus = (value) =>{
        setSelectedStatus(value)
        console.log(value)
    }

    return (props.trigger) ? (
            // <div className="Popupout">
            //     <div className="Popupin">
            //         <AiOutlineClose onClick={() => props.setTrigger(false)} className="closeIcone"/>
            //         {(props.setCard)?(<AddCardForm delivery={props.delivery} />):(<AddNoForm delivery={props.delivery}/>)}
            //     </div>
            // </div>
        <div className="modal-confirm-4">
            <div className="class-component-2">
                <div className="input-form-container">
                    {/*<div className="modal-content">*/}
                        <form className="form p-5">
                            <div className="success-main-2">
                                <h1 className="success-main-3 modal-title ">Teacher Status Update</h1>
                            </div>
                            <div className="pb-5">
                                <InputLabel id="label">Teacher Status</InputLabel>
                                <Select
                                    className="form-input"
                                    aria-label="Default select example"
                                    value={selectedStatus}
                                    onChange={ (e) => SelectedStatus(e.target.value)}
                                    >
                                    <MenuItem selected>Option 1</MenuItem>
                                    <MenuItem value="valid">Approve</MenuItem>
                                    <MenuItem  value="invalid">Reject</MenuItem>
                                    <MenuItem value="pending">Pending</MenuItem>
                                    {/*<option className="w-25" selected>Choose...</option>*/}
                                    {/*<option className="w-25" value="valid">Approve</option>*/}
                                    {/*<option className="w-25" value="invalid">Reject</option>*/}
                                    {/*<option className="w-25" value="pending">Pending</option>*/}
                                    {/*<option value="3">Three</option>*/}
                                </Select>
                            </div>


                            <div className="modal-footer-1">
                                <button className="btn btn-success btn-block w-100" onClick={popupView}>OK</button>
                            </div>
                            <br/>
                            <div className="modal-footer-1">
                                <button className="btn btn-danger btn-block w-100" onClick={popupView1}>Cancel</button>
                            </div>
                        </form>
                    {/*</div>*/}

                </div>
            </div>
        </div>
    ) : <div></div>;
}

export default PopUpTeacherStatusComponent

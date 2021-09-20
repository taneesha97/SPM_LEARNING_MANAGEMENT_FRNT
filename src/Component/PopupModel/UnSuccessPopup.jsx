import {useHistory} from "react-router";
import OK from "./Images/remove.png";
import './unsuccesspopupStyle.css'
import React from "react";


function UnSuccessPopup(props) {
    const history = useHistory();
    const popupView = () => {
        history.push(props.name2);
        props.setTrigger(false)

    }
// return (props.trigger) ? (
    return (props.trigger) ? (
        <div className="modal-confirm">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <div>
                            <img src={OK} className="icon-box"/>
                            {/*<i className="material-icons">&#xE876;</i>*/}
                        </div>
                        <div className="success-main-1">
                            <h1 className="success-main modal-title ">Unsuccessful!</h1>
                        </div>

                    </div>
                    <div className="modal-body">
                        <h5 className="text-center">{props.name1} </h5>
                    </div>
                    <div className="modal-footer">
                        <button className="btn p-3 mb-2 bg-danger text-white btn-block w-100" data-dismiss="modal"
                                onClick={popupView}>OK
                        </button>
                    </div>
                </div>
            </div>
        </div>

    ) : <div></div>;

}

export default UnSuccessPopup
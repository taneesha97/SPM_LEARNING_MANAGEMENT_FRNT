import React from 'react'




function ClassSearch() {
    return (
        <div className="row container-row row-cols-auto justify-content-center">
                <div className="">
                    <input className="input-field-updateemail-1"
                           placeholder="Enter....."
                           type="text"
                    />
                    <button type="submit" className="profileemailupdatebtn-1"> Update </button>
                </div>
                <div>
                    <select
                        className="form-input-classsearch"
                        aria-label="Default select example"
                    >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <select
                        className="form-input"
                        aria-label="Default select example"
                        className="form-input-classsearch"
                    >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            {/*</div>*/}
        </div>
    )
}

export default ClassSearch

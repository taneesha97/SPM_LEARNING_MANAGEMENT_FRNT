import React from 'react'
import './ClassSearch.css';

function ClassSearch() {
    return (
        <div className="search_back">
        <div class="container">
            <div className="search_wrap search_wrap_5">
                    <div className="search_box">
                        <input type="text" className="input" placeholder="search..."/>
                        <div className="btn">
                            <p className="btn_font">Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassSearch

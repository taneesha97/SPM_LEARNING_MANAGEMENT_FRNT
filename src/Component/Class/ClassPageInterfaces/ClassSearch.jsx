import React from 'react'
import './ClassSearch.css';
import {FormControl, InputLabel, MenuItem} from "@material-ui/core";
import Select from "react-select";

function ClassSearch() {
    return (
        <div className="search_back">
        <div class="container">
            {/*<div class="search_wrap search_wrap_1">*/}
            {/*    <div class="search_box">*/}
            {/*        <input type="text" class="input" placeholder="Search..."/>*/}
            {/*        <div class="btn btn_common">*/}
            {/*            <i class="fas fa-search"></i>*/}
            {/*        </div>*/}
            {/*    </div>*/}

                <div className="search_wrap search_wrap_5">
                    <div className="search_box">
                        <input type="text" className="input" placeholder="search..."/>
                        <div className="btn">
                            <p className="btn_font">Search</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*<FormControl variant="outlined">*/}
            {/*    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>*/}
            {/*    <Select*/}
            {/*        labelId="demo-simple-select-outlined-label"*/}
            {/*        id="demo-simple-select-outlined"*/}
            {/*        //value={age}*/}
            {/*        //onChange={handleChange}*/}
            {/*        label="Age"*/}
            {/*    >*/}
            {/*        <MenuItem value="">*/}
            {/*            <em>None</em>*/}
            {/*        </MenuItem>*/}
            {/*        <MenuItem value={10}>Ten</MenuItem>*/}
            {/*        <MenuItem value={20}>Twenty</MenuItem>*/}
            {/*        <MenuItem value={30}>Thirty</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}













        {/*// <div className="row container-row row-cols-auto justify-content-center">*/}
                {/*<div className="input-group w-25">*/}
                {/*    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"*/}
                {/*           aria-describedby="search-addon"/>*/}
                {/*    <button type="button" className="btn btn-outline-primary">search</button>*/}
                {/*</div>*/}
                {/*<div className="classSearch-container-2">*/}
                {/*    <select*/}
                {/*        className="form-input-classsearch"*/}
                {/*        aria-label="Default select example"*/}
                {/*    >*/}
                {/*        <option selected>Class name...</option>*/}
                {/*        <option value="1">One</option>*/}
                {/*        <option value="2">Two</option>*/}
                {/*        <option value="3">Three</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                {/*<div className="classSearch-container-3">*/}
                {/*    <select*/}
                {/*        className="form-input"*/}
                {/*        aria-label="Default select example"*/}
                {/*        className="form-input-classsearch"*/}
                {/*    >*/}
                {/*        <option selected>Tutor name...</option>*/}
                {/*        <option value="1">One</option>*/}
                {/*        <option value="2">Two</option>*/}
                {/*        <option value="3">Three</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default ClassSearch

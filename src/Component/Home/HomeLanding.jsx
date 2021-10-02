import React, {useEffect, useState} from 'react'
import "./HomeLanding.css"

import CustomizeSection from "./CustomizeSection/CustomizeSection";
import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import Footer from "../Footer/Footer";
import GetUpdates from "./GetUpdates/GetUpdates";
import TutorSection from "./TutorSection/TutorSection";

import SingleClassWelcomeHeader from "../WelcomeHeader-Course/SingleClassWelcomeHeader";

import PopupModel from "../PopupModel/PopupModel";
import CourseTile from "../Class/CourseTile/CourseTile";

import Booksontop from '../Class/CourseTile/Image/booksonTop.svg'
import Book2 from '../Class/CourseTile/Image/book2.svg'
import Book6 from '../Class/CourseTile/Image/books6.svg'
import {useDispatch, useSelector} from "react-redux";
import {getClasses, getClassesNew} from "../../Action/Class";
import axios from "axios";



function HomeLanding() {

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const fetchEventDetails = async () => {
        try {

            const response = await axios
                .get("http://localhost:8073/api/images")
                .catch((error) => {
                    console.log(error);
                });
            setData(response.data);
            console.log(response.data);

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchEventDetails();
    }, [])



    return (
        <div>
            <div className='ash-background'>
                <WelcomeHeader/>
                <CustomizeSection main_topic={'Top Courses'} sub_topic={'Latest and Best selling courses, Enroll now for the full life time access.'} textcolor={'#717171'}backgroundcl={'#D6D6D6'} btn_text={'View All'} btn_color={'#8340F4'}>
                    <CourseTile image={Booksontop}/>
                    <CourseTile image={Book2}/>
                    <CourseTile image={Book6}/>
                    <CourseTile image={Booksontop}/>
                    <CourseTile image={Book6}/>
                </CustomizeSection>
            </div>
            <div className='dark-ash-background'>
                <CustomizeSection main_topic={'Classes'} sub_topic={'Latest Classes, Enroll now for the full life time access.'} backgroundcl={'#ADA6CE'} btn_text={'View All'} btn_color={'#8340F4'} navigationPath={'class'}>
                    {data?.slice(0, 3)?.map((row) => (
                      <ClassTile rows = {row}/>
                ))}
                </CustomizeSection>
                <TutorSection/>
            </div>
            <GetUpdates/>
            <Footer/>
        </div>
    )
}

export default HomeLanding

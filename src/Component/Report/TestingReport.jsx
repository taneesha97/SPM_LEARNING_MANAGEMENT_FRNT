import React, {useState, Component, useEffect} from 'react'
import { jsPDF } from "jspdf";
import { FiDownload } from "react-icons/fi"
import {Chart} from "chart.js";
import {Line, Bar} from "react-chartjs-2";
import html2canvas from "html2canvas";






function TestingReport() {
    const pdfConverter = require("jspdf");
    const [chartData, setChartData] = useState({})

    const cData = {
        labels: ["L 1", "L 2", "L 3", "L 4", "L 5"],
        datasets: [
            {
                label: "Label",
                data: [100, 150, 123, 170, 162],
                backgroundColor: ["red", "green", "yellow", "blue", "orange", "red"]
            }
        ]
    };

    // useEffect(() => {
    //     setChartData({
    //         // labels: data.data.map((crypto) => crypto.name),
    //         datasets: [
    //             {
    //                 label: "Price in USD",
    //                 data: cData,
    //                 backgroundColor: [
    //                     "#ffbb11",
    //                     "#ecf0f1",
    //                     "#50AF95",
    //                     "#f3ba2f",
    //                     "#2a71d0"
    //                 ]
    //             }
    //         ]
    //     });
    // },[]);





    const getData = () => {
       // chartRef = React.createRef();
        const canvas = document?.querySelector('canvas'),
           ctx = canvas.getContext('2d');
        // new Chart(ctx).Line(cData);
        // new Chart(ctx,  {
        //     type: 'line',
        //     data: cData,
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         },
        //         title: {
        //             display: true,
        //             text: "Chart to PDF Demo",
        //             fontSize: 32
        //         },
        //         legend: {
        //             display: true,
        //             position: "right"
        //         }
        //     },
        //     height: 200
        //
        // });
       // const img = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            //doc.addImage(Logo, "png", 10, 10, 30, 5);
            pdf.setFontSize(20);
            pdf.text("Summary Report", 75, 15);
            pdf.setFontSize(5);
            pdf.text(
                    "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
                    10,
                    20
                );
            pdf.setFontSize(12);
            pdf.text("Total Packages: ", 10, 30);
            pdf.text("Total Customers: ", 10, 40);
            pdf.text("Total Feedbacks: ", 10, 50);
            // pdf.addImage(
            //     img,
            //     "png",
            //     10, 70, 280, 150
            // );
            //pdf.table(3,4,)
//         pdf.autoTable({ html: '#my-table' })
//
// // Or use javascript directly:
//         doc.autoTable({
//             head: [['Name', 'Email', 'Country']],
//             body: [
//                 ['David', 'david@example.com', 'Sweden'],
//                 ['Castille', 'castille@example.com', 'Spain'],
//                 // ...
//             ],
//         })
            pdf.save("chart.pdf");
    };



    return (
        <div>
            <h1>eeeee</h1>

            <div>
                <Chart chartData={chartData} />

                    {/*<Bar*/}
                    {/*   data={cData}*/}
                    {/*    options={{*/}
                    {/*        title: {*/}
                    {/*            display: true,*/}
                    {/*            text: "Chart to PDF Demo",*/}
                    {/*            fontSize: 32*/}
                    {/*        },*/}
                    {/*        legend: {*/}
                    {/*            display: true,*/}
                    {/*            position: "right"*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    height={200}*/}
                    {/*/>*/}
                <div>
                    <button onClick={getData}>Export 2 PDF</button>
                </div>
            </div>
        </div>
    )
}

export default TestingReport


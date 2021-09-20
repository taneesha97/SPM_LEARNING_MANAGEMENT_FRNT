import React, {useState} from 'react'
import { jsPDF } from "jspdf";
import { FiDownload } from "react-icons/fi"

function TestingReport() {
    document.title = "CLEANEX - Dashboard";
    const [totals, setTotals] = useState([]);
    const graphOneNames = ["Pending", "Processing", "Completed"];

    const calculateTotalBasedOnPackage = async () => {
        //const res = await axios.get("/order/orders");
        //console.log(res.data);
        // res.data.map((order) => {});
    };
    const generateReport = () => {
        const doc = new jsPDF();

        calculateTotalBasedOnPackage();
        //doc.addImage(Logo, "png", 10, 10, 30, 5);

        doc.setFontSize(20);
        doc.text("Summary Report", 75, 15);
        doc.setFontSize(5);
        doc.text(
            "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
            10,
            20
        );
        doc.setFontSize(12);
        doc.text("Total Packages: ", 10, 30);
        doc.text("Total Customers: ", 10, 40);
        doc.text("Total Feedbacks: ", 10, 50);
        // doc.text(totals[0].total.toString(), 100, 30);
        // doc.text(totals[1].total.toString(), 100, 40);
        // doc.text(totals[2].total.toString(), 100, 50);
        doc.save(`summary-report-${Date()}.pdf`);
    };
    return (
        <div>
            <h1>eeeee</h1>
            <button
                className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full flex justify-center items-center"
                onClick={generateReport}
            >
                <FiDownload className="text-2xl mr-2" />
                Download Summary
            </button>
        </div>
    )
}

export default TestingReport

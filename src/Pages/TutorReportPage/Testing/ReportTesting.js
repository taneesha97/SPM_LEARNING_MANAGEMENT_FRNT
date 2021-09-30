import {useRef} from 'react'
import './Report.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import {PDFExport, savePDF} from "@progress/kendo-react-pdf";

function App() {

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event) => {
        console.log("Clicked");
        pdfExportComponent.current.save();
    }

    return (
        <div className="app-content">
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <h1> Kendo React PDF Generator.</h1>
                <p> PDF generating tools for react.</p>
                <div className="button-area">
                    <Button primary={true} onClick={handleExportWithComponent}>Primary Button</Button>
                </div>
            </PDFExport>
        </div>
    );
}

export default App;

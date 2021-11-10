import "../page.styles.scss";

import Header from "../../Components/Header/Header.component";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CopyToClipboard from "../../Components/Toolbar/CopyToClipboard/CopyToClipboard";
import PrintPDF from "../../Components/Toolbar/Print PDF/printPDF";
import ResetCharacter from "../../Components/Toolbar/ResetCharacter/ResetCharacter";
import ComponentToPrint from "../../Display Results/ComponentToPrint";
import DisplaySelected from "../../Selected/DisplaySelected";

const GuestPage = () => {
 
    return (
        <div className="guest-page">
            <Header />
            <div className="user-interface-window">
                <h1 className="main-title"> G.C.C.M </h1>
                <div className="container">
                    <div className="toolbar-container">
                    
                        <ResetCharacter />
                        <CopyToClipboard />
                        <PrintPDF />
                    </div>
                    <div className="main-interface">
                        <SearchBar />
                        <DisplaySelected />
                    </div>
                </div>
            </div>
            <div className="results-window" id="results">
                <ComponentToPrint />
            </div>
        </div>
    );
}

export default GuestPage;
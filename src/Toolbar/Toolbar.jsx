import CopyToClipboard from "./CopyToClipboard/CopyToClipboard.jsx";
import DownloadPDF from "./DownloadPDF/DownloadPDF.jsx";

const Toolbar = () => {

    return (
        <div>
            <CopyToClipboard />
            <DownloadPDF />
        </div>
    );
}

export default Toolbar;
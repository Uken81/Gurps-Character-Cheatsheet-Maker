const CopyToClipboard = () => {
    //This works pretty much as intended but can get some strange results (eg. adding large amounts of white space between lines) 
    //in certain text editors like Google Docs. Is there a better way to do this?
    const copyToClipboard = () => {
        const sectionToCopy = document.getElementById('results');
        let currentRange;

        if (document.getSelection().rangeCount > 0) {
            currentRange = document.getSelection().getRangeAt(0);
            window.getSelection().removeRange(currentRange);
        } else {
            currentRange = false;
        }

        let copyRange = document.createRange();
        copyRange.selectNode(sectionToCopy);
        window.getSelection().addRange(copyRange);
        document.execCommand('copy');

        window.getSelection().removeRange(copyRange);

        if (currentRange) {
            window.getSelection().addRange(currentRange);
        }
        window.alert('Advantages and Disadvantages are copied to your clipboard. You can now paste in your prefered text editor');
    }

    return (
        <div className='button-container'>
            <button className='tool-button' onClick={copyToClipboard}>Copy To Clipboard</button>
        </div>

    )

}



export default CopyToClipboard
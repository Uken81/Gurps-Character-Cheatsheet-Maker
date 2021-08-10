const CopyToClipboard = () => {
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
        <button onClick={copyToClipboard}>Copy To Clipboard</button>
    )
   
}



export default CopyToClipboard
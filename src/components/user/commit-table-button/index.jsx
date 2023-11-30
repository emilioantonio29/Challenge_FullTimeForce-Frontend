import React, {useContext, useState} from 'react';

const CommitTableButtonComponent = (props) => {

    const [copySuccess, setCopySuccess] = useState('Copy to clipboard');

    const copyToClipboard = (sha) => {
        navigator.clipboard.writeText(sha)
        setCopySuccess("Copied")
        setTimeout(() => {
            setCopySuccess('Copy to clipboard');
        }, 4000);
    };

    return (
        <div className='d-flex justify-content-between'style={{width: "100%"}}>
            <div className='d-flex align-items-center'>
                <span style={{fontSize:"12px", fontWeight:"bold"}}>commit details:</span>
                <span 
                    className='bg-light'
                    style={{
                        fontSize:"12px", 
                        fontWeight:"bold", 
                        border: "1px solid black",
                        borderRadius: "7px",
                        marginLeft: "5px",
                        marginRight: "5px",
                    }}
                >
                    &nbsp;&nbsp;{props.sha}&nbsp;&nbsp;
                </span>
            </div>
            <div className='d-flex align-items-center'>
                <button 
                    onClick={()=>{copyToClipboard(props.sha)}} 
                    className="btn btn-primary btn-sm commit-button"
                    type="button">{copySuccess}
                </button>
            </div>
        </div>
    );
}

export default CommitTableButtonComponent;
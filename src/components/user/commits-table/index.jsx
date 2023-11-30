import React, {useContext, useState} from 'react';

const CommitsTableComponent = (props) => {

    const [copySuccess, setCopySuccess] = useState('Copy to clipboard');

    const copyToClipboard = (sha) => {
        navigator.clipboard.writeText(sha)
        setCopySuccess("Copied")
        setTimeout(() => {
            setCopySuccess('Copy to clipboard');
        }, 4000);
    };

    console.log("props", props.commits)
    return (
        <>
            {props.commits?
                <table className="">
                    <thead>
                        <tr>
                            <td scope="">
                                <h5 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Commits</h5>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {props.commits.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td scope="">
                                        {data.commit.message} 
                                        <br/> 
                                        <span className="input-group-text">JWT Id Token Generated:</span>
                                        <br/>
                                        <div style={{width:"100%"}}>
                                            <span style={{fontSize:"12px", fontWeight:"bold"}}>{data.commit.author.name}</span>
                                            <span style={{fontSize:"12px"}}> commited {data.commit.author.date.slice(0, 10)}</span>
                                        </div>
                                    </td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            :
            null}
        </>
    );
}

export default CommitsTableComponent;
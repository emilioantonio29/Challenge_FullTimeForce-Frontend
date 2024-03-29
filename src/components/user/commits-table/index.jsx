import React, {useContext, useState, useEffect} from 'react';
import CommitTableButtonComponent from '../commit-table-button';

const CommitsTableComponent = (props) => {

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
                                        <CommitTableButtonComponent sha={data.sha}/>
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
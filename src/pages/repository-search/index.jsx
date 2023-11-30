import React, {useContext, useEffect, useState} from 'react';
import CommonSpacer from '../../components/common/spacer';
import CommitsSearchContainer from '../../containers/commits-search';

const RepositorySearchPage = () => {

    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setSearchValue(inputValue)
        }
    };

    
    useEffect(() => {
        //Mount:

        setSearchValue("");

        return () => {
        //Unmount
        };
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "55vh", paddingTop: "50px"}} className='container'>
            <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px"}}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h6 className="display-6 color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Search Commits History</h6>
                    </div>
                    <CommonSpacer marginTop={"20px"}/>
                    <div style={{width: "100%", paddingBottom: "20px"}} className="d-flex justify-content-center">
                        <input
                            style={{width:"100%"}}
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Search by github repository, example: https://github.com/emilioantonio29/Challenge_FullTimeForce-Backend"
                        />
                        <button className='btn btn-primary' onClick={()=>{setSearchValue(inputValue)}}>Search</button>
                    </div>
                    <CommonSpacer marginTop={"20px"}/>
                    <CommitsSearchContainer url={searchValue}/>
                </div>
            </div>
        </div>
    );
}

export default RepositorySearchPage;
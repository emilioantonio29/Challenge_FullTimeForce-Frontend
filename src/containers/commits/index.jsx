import React, { useState, useEffect, useContext } from "react";
import CommonLoader from "../../components/common/loader";
import { getCommits } from "../../utils/hooks/general-axios";
import CommitsTableComponent from "../../components/user/commits-table";
import { UserGlobalContextMemorySpace } from "../../contexts/user-context";
import CommonSpacer from "../../components/common/spacer";

const CommitsContainer = () => {

    const error400 = process.env.REACT_APP_COMMITS_MESSAGE_400;
    const error404 = process.env.REACT_APP_COMMITS_MESSAGE_404;
    const error500 = process.env.REACT_APP_COMMITS_MESSAGE_500;

    const [loader, setLoader] = useState(false);
    const [commits, setCommits] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const searchCommits = async () => {
        
        setErrorMsg("");

        setLoader(true);

        let res = await getCommits();
        
        if (res?.status == 200 && res.data) {
            setCommits(res.data);
        } else if (res?.response?.status == 400) {
            setErrorMsg(res?.response?.data?.message || error400)
        } else if (res?.response?.status == 404) {
            setErrorMsg(res?.response?.data?.message || error404)
        }else {
            setErrorMsg(error500);
        }

        setLoader(false);
    };

    useEffect(() => {
        //Mount:
        searchCommits();

        return () => {
        //Unmount
        };
    }, []);

  return (
    <>
        {loader ? 
            <CommonLoader/>
            :
            <>
                {commits ?
                    <>
                        <CommitsTableComponent commits={commits}/>
                        <CommonSpacer marginBottom="3vh"/>
                    </>
                    :
                    <h6 style={{color: "white", textAlign: "center"}}>{errorMsg}</h6>
                }
            </>
        }
    </>
  );
};

export default CommitsContainer;

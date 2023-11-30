import axios from "axios";

let environment = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCALAPI : process.env.REACT_APP_API;

export const generalAxios = async (method, endpoint, headers, body) => {
    try {
        const { data } = await axios({
            method: method,
            url: environment+endpoint,
            headers: headers,
            data: body
        })
        return data
    } catch (err) {
        return err;
    }
};

export const login = async (email, password) => {

    let body = {
        "email": email,
        "password": password
    }

    try {
        const data = await axios({
            method: "POST",
            url: environment+process.env.REACT_APP_API_ENDPOINT_LOGIN,
            headers:{
                "Content-Type": "application/json"
            },
            data: body
        })
        return data
    } catch (err) {
        return err;
    }

}

export const getCommits = async () => {

    try {
        const data = await axios({
            method: "GET",
            url: `${environment}${process.env.REACT_APP_API_ENDPOINT_COMMITS}?url=${process.env.REACT_APP_REPOSITORY_URL}`,
            headers:{
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (err) {
        return err;
    }

}
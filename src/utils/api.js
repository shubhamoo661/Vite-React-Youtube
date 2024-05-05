import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '4073a8e85amsh5c474f7a9623827p19597djsn0d729c2a2e81',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data);
    return data
}

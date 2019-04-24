import axios from 'axios';

const baseUrl = 'http://localhost:3000/words/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.log(error);
    });

    export const api ={
        getWord: handleError(async id => {
            const res = await axios.get(baseUrl + id);
            return res.data;
        }),
        getWords: handleError(async () => {
            const res = await axios.get(baseUrl);
            return res.data;
        }),
        deleteWord: handleError(async id => {
            const res = await axios.delete(baseUrl + id);
            return res.data;
        }),
        createWord: handleError(async payload => {
            const res = await axios.post(baseUrl, payload);
            return res.data;
        }),
        updateWord: handleError(async payload => {
            const res = await axios.put(baseUrl + payload._id, paylad);
            return res.data;
        }),
        
    }

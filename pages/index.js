import React, {useEffect, useState} from 'react';
import Head from 'next/head'

//component
import {Form} from '../components/form/form.js'

//Executing a request to the server
async function getData(url) {
    const data = await fetch(url);
    return data.json()
    //We received the data and returned it as a function.
}

function Index() {
    //De-structuring the array.
    const [data, setData] = useState(null);


    useEffect(() => {
        //In effect, we initialize an asynchronous function to get data to the state.
        async function promiseDate() { 
            const fetchDate = await getData('https://raw.githubusercontent.com/Binatik/SearchForm/main/data.json');
            //Getting data in state
            setData(fetchDate);
        }
        promiseDate().then(r => r);
    },[]);

    return (
        <React.Fragment>
            <Head>
                <title>Form</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Form data={data}/>
        </React.Fragment>
    )
}

export default Index
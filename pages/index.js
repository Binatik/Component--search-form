import React, {useEffect, useState} from 'react';
import Head from 'next/head'

//component
import {Form} from '../components/form/form.js'

async function getData(url) {
    const data = await fetch(url);
    return data.json()
}

function Index() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function promiseDate() { 
            const fetchDate = await getData('https://raw.githubusercontent.com/Binatik/SearchForm/main/data.json');
            setData(fetchDate);
        }
        promiseDate().then(r => r);
    },[]);
    //setData(async(prev) => prev + await getData('https://raw.githubusercontent.com/Binatik/SearchForm/main/data.json'));

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
import React, {useState} from 'react';
import Head from 'next/head'

//component
import {Form} from '../components/form/form.js'


function Index() {

    async function getData(url) {
        const data = await fetch(url);
        return data.json()
    }

    let [ data, setData ] = useState()
    setData(prev => {
        return await getData('https://raw.githubusercontent.com/Binatik/SearchForm/main/data.json');
    })
    console.log(data);

    return (
        <React.Fragment>
            <Head>
                <title>Form</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            {data}
            <Form data={data}/>
        </React.Fragment>
    )
}

export default Index
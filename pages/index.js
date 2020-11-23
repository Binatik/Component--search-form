import React, { useState } from 'react';
import Head from 'next/head'

async function main(){

    async function getData(url) {
        const data = await fetch(url);
        return data.json()
    }


    function Index() {
        const data = getData('');
        return (
            <React.Fragment>
                <Head>
                    <title>Form</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <form data = {}></form>
            </React.Fragment>
        )
    }
    export default Index
}

main();
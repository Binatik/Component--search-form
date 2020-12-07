import React from 'react';
export function LoaderFormError({sleep}) {

    async function reloadPage(host, time) {
        await sleep(time);
        location.replace(host);
    }
    reloadPage('http://localhost:3000', 3000);

    return (
        <React.Fragment>
            <h2>Ошибка. Страница будет перезагружена.</h2>
        </React.Fragment>

    )
}
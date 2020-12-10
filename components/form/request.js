import React from 'react';

export function Request({value}) {
    const { id, name, index } = value
    //Список: Элемент 1 (id# 104000134)
    return(
        <React.Fragment>

            <p>Список: {name} (id# {id})</p>
        </React.Fragment>
    )
}
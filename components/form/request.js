import React from 'react';
import formSty from "../../styles/SearchForm.module.scss";

export function Request({value}) {
    const { id, name, index } = value

    //Список: Элемент 1 (id# 104000134)
    return(
        <React.Fragment>
            {value ? <p>Список: {name} (id# {id})</p> : null}
        </React.Fragment>
    )
}
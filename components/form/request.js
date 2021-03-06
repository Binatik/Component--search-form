import React from 'react';
import requestSty from "../../styles/Request.module.scss";

export function Request({value, query}) {
    const { id, name } = value
    const { setObject, setData } = query;

    function changeQuery(){
        setData(null)
        setObject(null);
    }

    //Список: Элемент 1 (id# 104000134)
    return(
        <React.Fragment>
            {value ? <p>Список: {name} (id# {id})</p> : null}
            <button
                className={`${requestSty.btn_request} btn`}
                type={"button"}
                onClick={changeQuery}>Изменить запрос
            </button>
        </React.Fragment>
    )
}
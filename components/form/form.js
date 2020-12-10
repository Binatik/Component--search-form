import React, {useContext, useState} from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'
import {LoaderFormError} from "./LoaderFormError";
import {Request} from "./request";

//Provider
import {MainContext} from "../../pages";


export function Form({ loading }) {
    const { promiseDate, data, setData } = useContext(MainContext);
    const { isLoading, isError } = loading;
    const [ object, setObject ] = useState(null);

     function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getComponentSelect(){
        if (isLoading === false && isError !== true && data !== null){
          return <Selector dataList={ {data, setObject} }/>
        }
        else if (isLoading && isError !== true) {
            console.log('Загрузка данных');
        }
        else if (isError === true) {
            console.log('Ошибка');
            return <LoaderFormError sleep={sleep}/>
        }
        return null;
    }

    function sendText(error){
        return object !== null ? 'Критерии поиска' : `Критерии поиска ${error}`;
    }

    return (
        <React.Fragment>
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={formSty.title}>{ sendText('не установлены') }</h2>
                    { object !== null ? <Request value={object} query={ {setObject, setData} }/> : null }
                    <button
                        className={`${formSty.btn_form} btn`}
                        type={"button"}
                        onClick={promiseDate}>Заполнить форму
                    </button>
                    { getComponentSelect() }
                </div>
            </form>
        </React.Fragment>
    )
}





import React, {useContext} from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'
import {LoaderFormError} from "./LoaderFormError";

//Provider
import {MainContext} from "../../pages";


export function Form({ loading }) {
    const { promiseDate, data } = useContext(MainContext);
    const { isLoading, isError } = loading;

     function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getComponentSelect(){
        if (isLoading === false && isError !== true){
          return <Selector data={data}/>
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

    return (
        <React.Fragment>
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={formSty.title}>Критерии поиска: не установлены</h2>
                    <button
                        className={formSty.btn}
                        type={"button"}
                        onClick={promiseDate}>Заполнить форму
                    </button>
                    { getComponentSelect() }
                </div>
            </form>
        </React.Fragment>
    )
}





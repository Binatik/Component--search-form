import React from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'
import {LoaderFormError} from "./LoaderFormError";

export function Form({data, promiseDate, loadings}) {
    const [loading, error] = loadings

     function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getComponentSelect(){
        if (loading === false && error !== true){
          return <Selector/>
        }
        else if (loading && error !== true) {
            console.log('Загрузка данных');
        }

        else if (error === true) {
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

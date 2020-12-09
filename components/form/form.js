import React, {useContext} from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'
import {LoaderFormError} from "./LoaderFormError";
import {MainContext} from "../../pages";

export function Form({data, loadings}) {
    const promiseDate = useContext(MainContext);
    const [loading, error] = loadings

     function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getComponentSelect(){
        if (loading === false && error !== true){
          return <Selector data={data}/>
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





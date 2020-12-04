import React from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'

export function Form({data, promiseDate, loading}) {

    return (
        <React.Fragment>
            {console.log(loading)}
            {console.log(data)}
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={formSty.title}>Критерии поиска: не установлены</h2>
                    <button
                        className={formSty.btn}
                        type={"button"}
                        onClick={promiseDate}>Заполнить форму</button>
                    { loading ? <Selector/> : console.log('Загрузка компонента.') }
                </div>
            </form>
        </React.Fragment>
    )
}
import React from 'react';

import formSty from '../../styles/SearchForm.module.scss'

//component
import {Selector} from './selector.js'

export function Form({data, promiseDate}) {

    return (
        <React.Fragment>
            {console.log(data)}
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={formSty.title}>Критерии поиска: не установлены</h2>
                    <button
                        className={formSty.btn}
                        type={"button"}
                        onClick={promiseDate}>Заполнить форму</button>
                    <Selector/>
                </div>
            </form>
        </React.Fragment>
    )
}
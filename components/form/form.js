import React, { useState } from 'react';

import styles from '../../styles/SearchForm.module.scss'

export function Form({data}) {
    return (
        <React.Fragment>
            {console.log(data)}
            <form className="center-items forms">
                <div className="forms__body wrapper">
                    <h2 className={styles.title}>Критерии поиска: не установлены</h2>
                    <button className={styles.btn} type={"button"}>Заполнить форму</button>
                </div>
            </form>
        </React.Fragment>
    )
}
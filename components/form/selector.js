import React, { useState } from 'react';
import selectorSty from "../../styles/Selector.module.scss";

export function Selector({data}) {

    return (
        <React.Fragment>
            <select className={selectorSty.body}>
                <option>Пункт 1</option>
                <option>Пункт 2</option>
            </select>
        </React.Fragment>
    )
}
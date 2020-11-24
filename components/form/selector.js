import React, { useState } from 'react';
import selectorSty from "../../styles/Selector.module.scss";

export function Selector({data}) {

    return (
        <React.Fragment>
            <label form='Select' className={selectorSty.custom}/>
            <select id="Select" name="Select" className={selectorSty.select}>
                <option value="1" >Пункт 1</option>
                <option value="2" >Пункт 2</option>
            </select>
        </React.Fragment>
    )
}
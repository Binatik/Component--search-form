import React from 'react';
import selectorSty from "../../styles/Selector.module.scss";

export function Selector({data}) {

    return (
        <React.Fragment>
            <label form='Select' className={selectorSty.custom}/>
            <select id="Select" name="Select" className={selectorSty.select}>
                {data?.items.map(({ name, id }, index) =>
                    <option
                        key={id}
                        className={selectorSty.option}
                        value={index} > {name}
                    </option>
                )}
            </select>
        </React.Fragment>
    )
}
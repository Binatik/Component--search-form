import React, {useRef} from 'react';
import selectorSty from "../../styles/Selector.module.scss";

export function Selector({dataList}) {
    const selectRef = useRef(null)
    const { data, setObject } = dataList;

    function saveData(){
        const id = +selectRef.current[selectRef.current.selectedIndex].value
        setObject(getObject(id));
    }

    function getObject(value){
        for(let i = 0; i<data.items.length; i++){
            if(i === value){
                console.log('test');
                return data?.items[i];
            }
        }
    }

    return (
        <React.Fragment>
            <label form='Select' className={selectorSty.custom}/>
            <select  ref={selectRef} id="Select" name="Select" className={selectorSty.select}>
                {data?.items.map(({ name, id }, index) =>
                    <option
                        key={id}
                        className={selectorSty.option}
                        value={index} > {name}
                    </option>
                )}
            </select>
            <button
                className={ `${selectorSty.btn_send} btn`}
                type={"button"}
                onClick={saveData}
            >Отправить
            </button>
        </React.Fragment>
    )
}
import React, { useEffect, useRef, useState } from "react";
import style from "./modalShowTasks.module.scss";

const ModalShowTasks = ({ filterTask, dateCell, setShowMore, coordCell }) => {
    const ref = useRef();

    const [marginLeft, setMarginLeft] = useState(0);
    const [marginTop, setMarginTop] = useState(0);
    useEffect(() => {
        const rigthLeft = (ref.current.clientWidth - coordCell.width)/2;
        const topBottom = (ref.current.clientHeight - coordCell.height)/2;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const left = coordCell.x - rigthLeft;
        const top = coordCell.y - topBottom;
        if (coordCell.x + ref.current.clientWidth < clientWidth) {
            setMarginLeft(left)
        } else {
            setMarginLeft(clientWidth - ref.current.clientWidth - rigthLeft)
        }
        if (coordCell.y + ref.current.clientHeight < clientHeight) {
            setMarginTop(top)
        } else {
            setMarginTop(clientHeight - ref.current.clientHeight - 15)
        }
    }, [])

    return (
        <div className={style.wrp} onClick={() => {setShowMore(false)}}>
            <div ref={ref} className={style.modal} style={{ marginLeft: marginLeft + 'px', marginTop: marginTop + 'px' }}>
                <button className={style.modal_btn_close} onClick={() => setShowMore(false)}>+</button>
                <p className={style.modal_p}>{dateCell.format('ddd')}</p>
                <p className={style.modal_p + ' ' + style.modal_p_date}>{dateCell.format('D')}</p>
                <ul className={style.modal_list}>
                    {filterTask && filterTask.map(task => {
                        return (<li className={style.modal_list_item}>
                            <button className={style.modal_list_btn}>{task.nameTask}</button>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ModalShowTasks;
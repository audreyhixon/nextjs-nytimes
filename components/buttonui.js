import Image from 'next/image'

import classNames from 'classnames/bind'

import styles from './buttonui.module.scss'

let cx = classNames.bind(styles);

export default function ButtonUI({ icon, clickHandler }) {

    let btnClasses = cx({
        btnui : true,
        close : icon === "close",
        menu : icon === "menu"
    });

    return (
        <button 
            className={btnClasses}
            onClick={clickHandler}
        >
            <Image
                src={`/images/icon-${icon}.svg`}
                alt={`${icon} icon`}
                width={50}
                height={50}
            />
        </button>
    )
}
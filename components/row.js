import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row( {children, justifyContentSpaceBetween}) {

    //class = row
    const rowClasses = cx({
        row : true,
        ['justify-content-space-between'] :justifyContentSpaceBetween,

    });


    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}
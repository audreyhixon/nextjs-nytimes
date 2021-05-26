import styles from './heading.module.scss'

export default function Heading ({children, type}) {
    switch(type){
        case 'h1':
            return <h1 className= {styles.heading1}> {children} </h1>
            break
        case 'h2':
            return <h2 className= {styles.heading2}> {children} </h2>
            break
        case 'h3':
            return <h3 className= {styles.heading3}> {children} </h3>
            break

            case 'h4':
                return <h4 className= {styles.heading4}> {children} </h4>
                break

                case 'h5':
            return <h5 className= {styles.heading5}> {children} </h5>
            break

            case 'h6':
            return <h6 className= {styles.heading6}> {children} </h6>
            break

    }
}


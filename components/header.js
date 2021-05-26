//hooks
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'
import Container from './container'
import Row from './row'

import NavOverlay from './navoverlay'
import ButtonUI from './buttonui'  

export default function Header() {
   
    //variable,function
    const [ isMenuVisible, setMenuVisible] = useState(false)

    return(
        <header className={styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
            <Link href="/">
                <a>
                    <Image 
                        src="/images/logo-nytimes.svg"
                        width={184}
                        height={25}
                        alt="The New York Times logo"
                    />
                </a>
            </Link>
            <ButtonUI  icon="menu" clickHandler={() => {
                setMenuVisible(true)
            }} />
            {
                isMenuVisible &&
                <NavOverlay closeHandler={() => {
                    setMenuVisible(false)
                }} />
            }
            </Row>
          </Container>  
        </header>
    )
}


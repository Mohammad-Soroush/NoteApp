import React from 'react'
import Headersort from './Headersort'

function Header() {
    return (
        <>
            <header class="header">
                <h1 class="header-title">My Notes (1)</h1>
                <Headersort />
            </header>
            <div class="header-line"></div>
        </>
    )
}

export default Header
import React from 'react'
import styled from 'styled-components'

export default function NavBar({children}) {
    return (
        <Nav>
            {children}
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 80px;
    width: 100vw;
    padding: 0 2vw;
    justify-content: space-between;
    position: fixed;

    & a {
        margin: 0 1.5em;
        font-size: 1.25em;
        border-bottom: 3px transparent solid;
        transition: border-bottom 200ms ease;
    }

    & a:hover {
        border-bottom: 3px var(--primary) solid;
    }
`
import React from 'react'
import styled from "styled-components"

export default function ScrollIndicator() {
    return (
        <Line/>
    )
}

const Line = styled.div`
    background: var(--primary);
    width: 3%;
    height: 4px;
    position: fixed;
    top: 0;
    left: 0;
`

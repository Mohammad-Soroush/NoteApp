import React from 'react'

function Headersort() {
    return (
        <>
            <select name="" id="" class="header-sort">
                <option value="latest" class="header-sort_item">Sort based on latest notes</option>
                <option value="earliest" class="header-sort_item">Sort based on earliest notes</option>
                <option value="completed" class="header-sort_item">Sort based on completed notes</option>
            </select>
        </>
    )
}

export default Headersort
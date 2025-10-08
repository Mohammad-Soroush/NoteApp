import React from 'react'

function NoteSystemContent() {
    return (
        <>
            <section class="note-system_content">
                <ul class="note-system_status-list">
                    <li class="note-system_status-item">All <span class="note-system_status-badge">1</span></li>
                    <li class="note-system_status-item">Completed <span class="note-system_status-badge">0</span></li>
                    <li class="note-system_status-item">Open <span class="note-system_status-badge">1</span></li>
                </ul>
                <section class="notes-list">
                    <div class="note-list_item">
                        <h3 class="note-list_item-title">Hello</h3>
                        <div class="note-list_item-info">
                            <p class="note-list_item-description">Hello Hojjat</p>
                            <div class="note-list_item-features">
                                <span class="note-list_item-delete">❌</span>
                                <input type="checkbox" class="note-list_item-check" />
                            </div>
                        </div>
                        <div class="note-list_item-date">March 16, 2025</div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default NoteSystemContent
import React from 'react'

function NotesystemAdd() {
  return (
    <>
     <section class="note-system_add">
            <h2 class="note-system_add-title">Add New Note</h2>
            <form action="#" class="note-system_form">
                <input type="text" class="note-system_form-title" placeholder="Note title"/>
                <input type="text" class="note-system_form-description" placeholder="Note description"/>
                <input type="submit" class="note-system_form-submit" value="Add New Note"/>
            </form>
        </section>
    </>
  )
}

export default NotesystemAdd
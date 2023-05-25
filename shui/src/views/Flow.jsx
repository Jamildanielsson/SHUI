import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Flow() {

    const posts = useSelector((state) => { return state.order })
    console.log(posts)
    const navigate = useNavigate();

    function HandleClick(){
        navigate('/write')
    }
    const postComponent = posts.map((post) => {
        return (
            <section className='flowBox'>
            <p data-id='NoteText'>{post.note}</p>
            <p>--- {post.username}</p>

            </section>
        )
    })

    return (
    <>
    { postComponent }
    <button data-id="NewNote" onClick={HandleClick}>Skriv nytt</button>
    </>

  )
}

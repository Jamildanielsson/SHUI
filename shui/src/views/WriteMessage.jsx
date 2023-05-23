import React from 'react'
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import {addNote, addUsername} from '../action/action'
import { useNavigate } from 'react-router-dom'

export default function WriteMessage(props) {

    const [note, setNote] = useState(``)
    const [username, setUsername] = useState(``)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(){ 
        const post = {
            note : note,
            username : username
        }

        dispatch(addNote(post))
        //dispatch(addUsername(username))

        console.log(post)
        navigate('/', {state: { post: post }})
        
    }





  return (

    <article className='write__article'>

    <input className='textInput' type="text" data-id="Text" onChange={ (event) => setNote(event.target.value) } />

    <input className='userInput' type="text" data-id="Username" placeholder='Användarnamn' onChange={ (event) => setUsername(event.target.value) }/>

    <button onClick={handleClick} className='publishButton' data-id="Publish">Publicera</button>

    </article>

  )
}

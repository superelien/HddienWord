import React from 'react'

import './Keyboard.css'

const Keyboard = ({ alphabet, event }) => {
    return(
        <div>
            {
                alphabet.map(
                  (letter, key) => {
                        return <button 
                        key={ "letter_"+ key }
                        onClick={ () => event(letter) }
                        
                        >{letter} </button>
                  }
                )
            }
        </div>
    )
}

export default Keyboard
import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'
import Keyboard from './Keyboard.js'

const SIDE = 1
const HIDDENWORDS = ["foofigthers", "nadasurf", "beatles", "batman", "avengers", "tarantino"]
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


class App extends Component {
  state = {
    hiddenWords: HIDDENWORDS,
    onPlayWord: [],
    Letters: this.generateKeyboards(),
    HidWord: this.generateWords(),
    alphabet: ALPHABET.split('')
  }

  clickLetter = (letter) => {
    console.log(letter)

  }

  generateKeyboards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = ALPHABET
    while (result.length < size) {
      const keyboard = candidates
      result.push(keyboard, keyboard)
    }
    return (result)
  }

  generateWords() {
    const result = []
    const size = SIDE * SIDE
    const wordz = shuffle(HIDDENWORDS)
    while (result.length < size) {
      const word = wordz.pop()
      result.push(word, word)
    }
    return shuffle(result)
  }


  render() {
    const wordz = shuffle(HIDDENWORDS)
    return (
     <div className="game">
      <h1> Devine la pop Culture</h1>
      <div>
        {wordz.slice(3, 4)}
      </div>
      <div>
        <Keyboard
        alphabet={this.state.alphabet}
        event={this.clickLetter}
        />
      </div>
     </div>
   )
  }
}

export default App

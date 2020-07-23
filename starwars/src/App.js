import React, { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL } from './constants'
import { Container } from 'reactstrap'
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([])
  const [ loading, setLoading ] = useState(true)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    const getData = () =>{
    axios.get(`${BASE_URL}/people/`)
      .then(response => {
        let characterList = response.data.results
        setCharacters(characterList)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        debugger
      })
    }

    getData()
  },[])//End of useEffect


  if (loading) return <p>Requesting Data. Please wait.</p>

  return (
    <Container className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => {
        return (<Character person={character}/>)
      })
      }
    </Container>
  );
}

export default App;

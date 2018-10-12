import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Character extends React.Component {

    state = {
        characters: []
    }


    componentDidMount= () => {
        const {characters} = this.state
        axios.get('https://api.got.show/api/characters/paths')

            .then( res => {
              for (let j =0; j<res.data.length; j++) {
                 console.log(res.data[j])
                characters.push(res.data[j])


              }
            })

    }

// getCharacters = () => {  
//     axios.get('https://api.got.show/api/characters/paths')
//                 .then( res => {
//                     this.setState({characters: res.data.entries})
//                         for (let i = 0; i < this.state.characters.length; i++ )
//                          {
//                         console.log(this.state.beers[i].id)
//                          }

//     }) : null
// }



    render () {

        return (
            <div>
            <Button> Get Characters </Button>
                
             
            </div>
        )
    }   
}

export default Character
import './Home.css';
import logo from '../HomeFiles/pokemon.svg';
import {getPokemonsImage} from '/Users/pixnabi/Desktop/react/pokemon-app/src/settings/consumeApi'

const url = 'pokemon/ditto'


 function HomeContainer (){
    getPokemonsImage(url)
    return(
        <div>
            <section className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Esta es una paguina web para lo que es simular una wiki de pokemon
            </p>
            </section>
        </div>
    )
}

export default HomeContainer
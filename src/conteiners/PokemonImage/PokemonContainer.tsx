import { getPokemonsImage } from '/Users/pixnabi/Desktop/react/pokemon-app/src/settings/consumeApi'
import { useEffect, useState } from 'react';
import './PokemonImage.css';



export default function PokemonImage(pokemon:string) {
    const url = `pokemon/${pokemon}`
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState("");

    const timeout = async (ms: number) => new Promise((resolve) =>
        setTimeout(resolve, ms))

    useEffect(() => {
        let isCancelled = false;
        const action = async () => {
            const pokemonSprites: any = await getPokemonsImage(url)
            await timeout(3000);

            if (!isCancelled) {
                setImage(pokemonSprites);
                setIsLoading(false);
            }
        }

        action();

        return () => {
            isCancelled = true;
        }
    }, [image]);

    return (
        <div className="PokemonImage">
            <h1>Pokemon Sprites</h1>
            <section className="App-header">
                <div>
                    {isLoading ? <div>Cargando...</div> :
                        <img src={image} className="App-logo" alt="logo" />
                    }
                </div>
            </section>
        </div>
    );


}



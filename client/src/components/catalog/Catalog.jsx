import { useEffect, useState } from 'react';
import * as dogsAPI from '../../api/dogsAPI'
import Card from './Card';

export default function Catalog() {
    const [dogs, setDogs] = useState([])
    
    useEffect(() => {
        dogsAPI.getAll()
            .then(result => setDogs(result))
    }, [])

    return (
        <>
            <div className="catalog">

                {dogs.map(dog => <Card {...dog} key={dog._id}/>)}
                

            </div>
        </>
    );
}
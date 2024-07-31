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

                {dogs.length > 0
                    ? dogs.map(dog => <Card {...dog} key={dog._id} />)
                    : <h3 className='not-available'>All puppies have home yay!</h3>
                }
                
            </div>
        </>
    );
}
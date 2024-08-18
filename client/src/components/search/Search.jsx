import Card from '../catalog/Card';
import { useGetAllDogs } from '../../../hooks/useDogs';
import { useState } from 'react';

export default function Search() {

    const [dogs,] = useGetAllDogs(); 
    const [query, setQuery] = useState('');
   
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

   
    const filteredDogs = dogs.filter(dog =>
        dog.breed.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="search-box">
                <h1>Search your preferred breed</h1>
                <br />
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="search"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search here..."
                    />
                </form>
            </div>

            <div className="catalog">

                {filteredDogs.length > 0 ? (
                    filteredDogs.map((dog) => (
                        <Card {...dog} key={dog._id} />
                    ))
                ) : (
                    <p>No results found for {query}.</p>
                )}

            </div>

        </>
    );
}
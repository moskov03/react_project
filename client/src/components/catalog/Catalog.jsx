
import  { useState } from 'react';
import Card from './Card';
import { useGetAllDogs } from '../../../hooks/useDogs';
import Pagination from './Pagination';  
export default function Catalog() {
    const [dogs] = useGetAllDogs();
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 6;

    
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

   
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="catalog">
                {currentDogs.length > 0
                    ? currentDogs.map(dog => <Card {...dog} key={dog._id} />)
                    : <h3 className='not-available'>All puppies have home yay!</h3>
                }
            </div>
            <Pagination
                itemsPerPage={dogsPerPage}
                totalItems={dogs.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
}
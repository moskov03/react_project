// import Card from './Card';
// import { useGetAllDogs } from '../../../hooks/useDogs';
// // setDogs
// export default function Catalog() {
//     const [dogs, ] = useGetAllDogs()
//     return (
//         <>
//             <div className="catalog">

//                 {dogs.length > 0
//                     ? dogs.map(dog => <Card {...dog} key={dog._id} />)
//                     : <h3 className='not-available'>All puppies have home yay!</h3>
//                 }

//             </div>
//         </>
//     );
// }


import  { useState } from 'react';
import Card from './Card';
import { useGetAllDogs } from '../../../hooks/useDogs';
import Pagination from './Pagination';  // You will create this component

export default function Catalog() {
    const [dogs] = useGetAllDogs();
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 6;

    // Calculate the indexes of the first and last dogs on the current page
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    // Slice the dogs array to get only the dogs for the current page
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

    // Function to change the page
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
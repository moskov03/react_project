import Card from './Card';
import { useGetAllDogs } from '../../../hooks/useDogs';
// setDogs
export default function Catalog() {
    const [dogs, ] = useGetAllDogs()
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
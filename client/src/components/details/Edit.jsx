import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useGetOneDogs } from "../../../hooks/useDogs";
import dogAPI from "../../api/dogsAPI";


const initialValues = {
    name: '',
    breed: '',
    age: '',
    imageUrl: '',
    description: '',
}


export default function EditPost() {
    const { dogId } = useParams()
    const [dog, setDog] = useGetOneDogs(dogId)
    const navigate = useNavigate()

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, dog), async (values) => {
        const isConfirmed = confirm('Are you sure you want to apply the changes')

        if (isConfirmed) {
            await dogAPI.update(dogId, values)
            navigate(`/catalog/${dogId}/details`)
        }

    })



    return (
        <>
            <section id="create-container">
                <div className="create-container-info">
                    <h1>Edit post</h1>
                    <form action="#" onSubmit={submitHandler} method="">
                        <label>Name:</label>
                        <input type="text" id="name" value={values.name} onChange={changeHandler} name="name" placeholder="..." />
                        <label>Breed:</label>
                        <input type="text" id="breed" value={values.breed} onChange={changeHandler} name="breed" placeholder="..." />
                        <label>Age:</label>
                        <input type="number" id="age" value={values.age} onChange={changeHandler} name="age" placeholder="..." />

                        <label>Image:</label>
                        <input type="text" id="image" value={values.imageUrl} onChange={changeHandler} name="imageUrl" placeholder="http://..." />

                        <label>Description:</label>
                        <textarea id="description" value={values.description} onChange={changeHandler} name="description" placeholder="..."></textarea>
                        <input type="submit" id="btn" value="Submit"></input>
                    </form>
                </div>
            </section>
        </>
    );
}
import { useNavigate } from "react-router-dom";
import { useCreateDog } from "../../../hooks/useDogs";
import { useForm } from "../../../hooks/useForm";


const initialValues = {
  name: '',
  breed: '',
  age: '',
  imageUrl: '',
  description: '',
}


export default function PostDog() {
  const navigate = useNavigate()
  const createDog = useCreateDog()

  const createHandler = async (values) => {
    console.log(values);
    
    try {
      const { _id: dogId } = await createDog(values);
      navigate(`/catalog/${dogId}/details`)
    } catch (err) {
      console.log(err.message);

    }

  }

  const { changeHandler, values, submitHandler } = useForm(initialValues, createHandler)


  return (
    <>
      <section id="create-container">
        <div className="create-container-info">
          <h1>Edit your puppy</h1>
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
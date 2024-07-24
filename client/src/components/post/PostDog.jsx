export default function PostDog() {



  return (
    <>
      <section id="create-container">
        <div className="create-container-info">
          <h1>Post a dog for adoption</h1>
          <form action="#" method="">
            <label>Name:</label>
            <input type="text" id="name" name="" placeholder="..." />
            <label>Breed:</label>
            <input type="text" id="breed" name="" placeholder="..." />
            <label>Age:</label>
            <input type="number" id="age" name="" placeholder="..." />

            <label>Image:</label>
            <input type="text" id="image" name="" placeholder="http://..." />

            <label>Description:</label>
            <textarea id="description" name="" placeholder="..."></textarea>
            <input type="submit" id="btn" value="Submit"></input>
          </form>
        </div>
      </section>
    </>
  );
}
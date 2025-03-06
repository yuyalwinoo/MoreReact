const About = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center">
            <img src="https://cms.jilster.app/uploads/make_cook_book_2cf2824229.webp" alt="about" className="w-5/6 object-cover" />
        </div>
        <div>
            <h2 className="font-bold text-2xl">Cook by me &hearts;</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum itaque, enim reprehenderit, neque repellat officiis necessitatibus exercitationem officia, iste saepe omnis eius numquam nemo consequatur odio cumque optio minima aspernatur?</p>
        </div>
    </article>
  )
}

export default About
import ListPosts from "../components/ListPosts";
import ListCategories from "../components/ListsCategories";

const Publicaciones = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet Posts</h2>
      </div>
      <ListCategories />
      <ListPosts url={"/posts"} />
    </main>
  )
}

export default Publicaciones;

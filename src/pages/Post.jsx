import { useState, useEffect } from "react";
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";
import ListCategories from "../components/ListsCategories";

const Post = ({ url }) => {

    const [post, setPost] = useState({})

    const { id } = useParams()
    //console.log(id)

    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id])

    return (
        <main className="container flex flex--center container-uevo" >
            <h2 className="title-id">{`${post.title}`}</h2>
            <article className="card post">
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post;
import { useEffect, useState } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import ListCategories from "../components/ListsCategories";
import ListPosts from "../components/ListPosts";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import Subcategoria from "./Subcategorias";

const Category = () => {

    const [subcategorias, setSubcategorias] = useState([])
    const { id } = useParams()
    const url = useResolvedPath('').pathname

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (reponse) => {
            //console.log(reponse[0].subcategorias)
            setSubcategorias(reponse[0].subcategorias)
        })
    }, [id])

    const [currentClassname, setCurrentClassname] = useState('');

    function getCurrentPath() {
        const path = window.location.pathname;
        const segments = path.split('/');
        return segments[3];
    }
    const updatecolor = getCurrentPath();

    useEffect(() => {
        switch (updatecolor) {
            case "entrenamiento":
                setCurrentClassname(`subcategory--active`)
                break
            case "educacion":
                setCurrentClassname(`subcategory--active`)
                break
            case "higiene":
                setCurrentClassname(`subcategory--active`)
                break
            case "salud":
                setCurrentClassname(`subcategory--active`)
                break
            default:
                setCurrentClassname(``)
        }
    }, [updatecolor]);
    // console.log(updatecolor)

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet News</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id} ${subcategoria === updatecolor ? currentClassname : ''}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`} />
                } />
                <Route path="/:subcategoria" element={<Subcategoria />} />
            </Routes>
        </>
    )
}

export default Category;
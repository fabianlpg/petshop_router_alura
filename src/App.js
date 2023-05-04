import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Publicaciones from './pages/Publicaciones';
import Home from './pages/Home';
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import New4042 from './pages/page2404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Post from './pages/Post';
import Category from './pages/Category';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Publicaciones />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/posts/post/:id' element={<Post />} />
          <Route path='/categoria/:id/*' element={<Category />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
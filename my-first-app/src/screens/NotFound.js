import { React } from 'react';
import './NotFound.css'
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
       <div>
        <Link to="/">Voltar ao Inicio</Link>
        <img url="https://www.seedprod.com/wp-content/uploads/2020/10/slack-404-page-example.jpg" alt="404" className='NF'/>
       </div>
    )
}

export default NotFound;
import '../Componentes/css/style.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
         <footer>
            <ul className='rsocial'>
                <li>
                    <FaFacebook/>
                </li>

                <li>
                    <FaInstagram/>
                </li>

                <li>
                    <FaLinkedin/>
                </li>
            </ul>
        </footer>

    )
}
export default Footer
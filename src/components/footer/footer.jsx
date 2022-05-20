import './footer.css'
import {BsMouse} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {TiSocialGithub} from 'react-icons/ti'

function Footer (){
    return(
        <div className="container footer-container">
            <h1>
                That´s right!
                <a href='#home'>
                    <h2>
                        <BsMouse /> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href='#'>
                    <BsInstagram className='social' />
                </a>
                <a href='#'>
                    <TiSocialGithub className='social' />
                </a>
            </div>

        </div>

    );
}
export default Footer;
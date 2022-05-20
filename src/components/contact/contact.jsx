import './contact.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

function Contact(){
    return(
     <div className="container contact-container">
        <h1>contact me</h1>
        <div className="contact-links">
            <a href='' className='contact whatsup'>
                <AiOutlineWhatsApp className='icon' />
                <h2>WhatsUp<br /><span></span>+54 91157098362</h2>
            </a>
            <a href='' className='contact instagram'>
                <AiOutlineInstagram className='icon' />
                <h2>Instagram <br /><span>Improve day by day</span></h2>
            </a>
            <a href='https://github.com/sanchezdamianj/' className='contact github'>
                <AiOutlineGithub className='icon' />
                <h2>github <br /><span>My Repositories</span></h2>
            </a>
        </div>
     </div>
    
    )
}

export default Contact;
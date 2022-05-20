import './home.css';
import img from '../../assets/img2.jpg';
import Buttons from '../button/button'
import {BsMouse} from 'react-icons/bs'

function Home (){
    return(
    <div id='home' className="container home-container">
        <div className='logo'>
            <div className='hover-show'>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
            </div>
            
            <img src={img} alt='' />
        </div>
        <a href='#footer' className='scroll-down'>
            <hr />
            <h5>scroll down</h5>
            <BsMouse className='scroll' />
        </a>
        <h2><span>About me</span><br />
        <p>A simple System Engineer working as Fron-End resource, looking new challenges in the IT´s World</p>
        </h2>

        <Buttons />
    </div>
    );
}

const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
});

export default Home;
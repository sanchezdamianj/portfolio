import './members.css'

const Members = () => {
    return(
        <div id='members' className="container members-container">
            <h1 className='member-txt'>Members</h1>
            <div className="member member-1">
                <div className="member-img"></div>    
                <div className="member-info">
                    <h1 className='name'>Damian</h1>
                    <h3 className="position">Front-End Dev</h3>
                    <h4 className="aboutme">I am learning skills to be a full stack web developer, changing the course of my career. Currently I work as SAP Senior SD Consultant, and I am an information systems engineer UTN
                    🌍  I'm based in Argentina - CABA
                    ✉️  You can contact me at sanchezdamianj@gmail.com
                    🧠  I'm learning HTML5, CCS3, Bootstrap, JavaScript. REACT JS, Node JS, BBDD, etc### Skills
                    Javascript HTML5 React CSS3 Sass Bootstrap Material UI NodeJS PostgreSQL MySQL MongoDB Sketch
                    </h4>
                    <a href='#contact' className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>            
        </div>
    )
}

export default Members;
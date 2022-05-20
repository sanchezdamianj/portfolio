import './skills.css';

const Skills = () => {
    return(
        <div>
            <span className="skills-text">My Skills</span>
            <div className="skills-container">
                <div className="skill">
                    <div className="content html">
                    <h1>html</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content css">
                    <h1>css, sass</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content sass">
                    <h1>sass</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content bootstrap">
                    <h1>bootstrap</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content javascript">
                    <h1>javascript</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content reactjs">
                    <h1>react js</h1>
                    </div>
                </div>
                <div className="skill">
                    <div className="content nodejs">
                    <h1>node js</h1>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Skills;
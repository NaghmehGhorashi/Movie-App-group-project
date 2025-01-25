import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Wrapper from '../../components/container/container'
import style from "./aboutus.module.css"
import hannaImage from '../../assets/hanna.jpeg'
import naghmehImage from '../../assets/naghmeh.jpeg'
import raanaImage from '../../assets/raana.jpeg'
import sixtenImage from '../../assets/sixten.jpeg'
function Aboutus() {
    
    return (
        <div>
            <Wrapper>
                <div>
                    <Navbar />
                    <h1>About Us</h1>
                    {/* Profile Section */}
                    <section className={style.profileSection}>
                        <div className={style.profile}>
                            <img src = {hannaImage} alt="Profile 1"/>
                            <p>Hanna</p>
                        </div>
                        
                            <div className={style.profile}>
                            <img src={naghmehImage} alt="Profile 2"/>
                            <p>Naghmeh</p>
                        </div>

                        <div className={style.profile}>
                            <img src={raanaImage} alt="Profile 3"/>
                            <p>Raana</p>
                        </div>
                        <div className={style.profile}>
                            <img src={sixtenImage} alt="Profile 4"/> 
                            <p>Sixten</p>
                        </div>
                    </section>
                    <div className={style.about}>

                    </div>


                </div>
            </Wrapper>
        </div>
    )
}

export default Aboutus

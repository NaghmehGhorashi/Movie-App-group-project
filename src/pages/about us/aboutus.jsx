import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Wrapper from '../../components/container/container'
import style from "./aboutus.module.css"
import hannaImage from '../../assets/hanna.jpeg'
import naghmehImage from '../../assets/naghmeh.jpeg'
function Aboutus() {
    
    return (
        <div>
            <Wrapper>
                <div>
                    <Navbar />
                    <h1>About</h1>
                    {/* Profile Section */}
                    <section class="profile-section">
                        <div class="profile">
                            <img src = {hannaImage} alt="Profile 1"/>
                            <p>Hanna</p>
                        </div>
                        
                            <div class="profile">
                            <img src={naghmehImage} alt="Profile 2"/>
                            <p>Nghmeh</p>
                        </div>

                        <div class="profile">
                            <img src="https://via.placeholder.com/100" alt="Profile 3"/>
                            <p>Profile 3</p>
                        </div>
                        <div class="profile">
                            {/* <img src="https://via.placeholder.com/100" alt="Profile 4"> */}
                            <p>Profile 4</p>
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

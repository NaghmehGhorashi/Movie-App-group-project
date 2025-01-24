import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Wrapper from '../../components/container/container'
import style from "./aboutus.module.css"
import naghmeh from "../../assets/naghmeh.jpeg"

function Aboutus() {
    return (
        <div>
            <Wrapper>
                <div>
                    <Navbar />
                    <h1>about</h1>
                    {/* write ur code here */}
                    <div className={style.about}>

                    </div>


                </div>
            </Wrapper>
        </div>
    )
}

export default Aboutus

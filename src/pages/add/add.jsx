import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Wrapper from '../../components/container/container'
import style from "./add.module.css"

function Add() {
    return (

        <div>
            <Wrapper>
                <div className={style.add}>
                    <Navbar />
                    add
                    {/* write ur code here */}
                    {/* When you want to create the submit button, use : <<aria-label="Add">> and <<tabIndex="0" >> */}

                </div>
            </Wrapper>
        </div>

    )
}

export default Add

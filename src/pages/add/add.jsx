import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Wrapper from '../../components/container/container'
import style from "./add.module.css"

function Add() {


    {/* write ur code here */ }
    return (

        <div>
            <Wrapper>
                <div className={style.add}>
                    <Navbar />
                    add
                    {/* write ur code here */}



                </div>
            </Wrapper>
        </div>

    )
}

export default Add



{/* When you want to create the submit button, use : <<aria-label="Add">> and <<tabIndex="0" >> */ }
// Since we are using useContext,
//  you should define the addhandle function inside the context.
//   Then, you can call it from your component using the context. 
//   This approach helps centralize logic, makes the code cleaner, 
//   and avoids passing props unnecessarily. 
//  

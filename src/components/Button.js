import { Link } from "react-router-dom"
import React from 'react'
import ArrowRightWhite from "../assets/images/Pijl_Rechts_Wit.svg"

const Button = ({ text, width, arrow, href, margin }) => {
    return (
        <button className={`w-${width ? width : "fit"} ${margin ? margin : "mt-10"} p-0 rounded-lg bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
            <Link to={href} className="w-full p-3 flex justify-center items-center">
                <span className="sr-only">{text}</span>
                {text}
                {arrow && <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8 ml-auto"></img>}
            </Link>
        </button>
    )
}

export default Button
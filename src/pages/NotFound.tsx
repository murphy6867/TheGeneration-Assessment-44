import React from "react"
import { Link } from "react-router-dom"
import './NotFound.css'

export default function NotFound() {
    return (
        <main className="w-[100%] h-[86.14vh] text-white bg-slate-300 flex flex-col items-center justify-center" id="NotFoundMain">
            <h1 className="text-xl">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="py-2 px-5 bg-slate-500 rounded-xl mt-5">Return to Home</Link>
        </main>
    )
}

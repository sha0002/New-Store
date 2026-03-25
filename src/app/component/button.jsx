"use client"
import React, { useState } from 'react'

const Button_alert = () => {

    const [data, setData] = useState([])
    const [show, setShow] = useState(false)


    const handleclick = async () => {
        try {
            if (data.length === 0) {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const data = await res.json()
                console.log(data)
                setData(data)
            }
            setShow(!show)
        } catch (error) {
            console.log("Error :", error)
        }

    }
    return (
        <div>
            <button onClick={handleclick} >{show ? "hide post" : "show post"}</button>

            {
                show && data.map((element) => {
                    const { id, title, body } = element;
                    return (
                        <ul key={id} className="post" style={{
                            display: "grid",
                            gridTemplateColumns: "80px 200px 1fr",
                            gap: "15px",
                            listStyle: "none",
                            padding: "15px",
                            margin: "10px 0",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e5e5",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            alignItems: "center"
                        }}>
                            <li>{id}</li>
                            <li>{title}</li>
                            <li>{body}</li>
                        </ul>
                    )


                })
            }

        </div >
    )
}

export default Button_alert
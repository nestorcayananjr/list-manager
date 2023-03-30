import React from "react"

const getSampleData = async () => {
    try {
        const req = await fetch('/sampleData')
        const data = await req.json();
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}

const Button = () => {
    return (
        <button onClick={() => getSampleData()}>
            Click me for data!
        </button>
    )
}

export default Button
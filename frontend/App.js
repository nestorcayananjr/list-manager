import React from "react";

const getSampleData = async () => {
    try {
        const req = await fetch('/sampleData')
        const data = await req.json();
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}

const App = () => {
    return (
        <div>
        <h1>
            Wow, I'm usineact!
        </h1>
        <button onClick={() => getSampleData()}>Click stuff</button>
        </div>
    )
}

export default App
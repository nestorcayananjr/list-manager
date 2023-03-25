//App component, will most likely be the top-most component
import React from "react";
import ListContainer from "./ListContainer.js"



const App = () => {
    return (
        <div>
            <h1>
                Welcome 'user'. Here are your lists
            </h1>
            <ListContainer />
            {/* <ListContainer />
            <ListContainer /> */}

        </div>
    )
}

export default App
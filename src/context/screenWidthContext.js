import React, {createContext, useEffect, useState} from "react";

export const ScreenWidthContext = createContext({});

const ScreenWidthContextProvider = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [])

    const data = {
        screenWidth: screenWidth,
    }

    return (
        <ScreenWidthContext.Provider value={data}>
            {children}
        </ScreenWidthContext.Provider>
    );
}

export default ScreenWidthContextProvider;
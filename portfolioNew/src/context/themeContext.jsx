import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    // 0 -> Light / 1 -> Dark
    const [theme, setTheme] = useState(1);
    
    const toggleTheme = () => {
        setTheme(prev => !prev);
    }

    //console.log('Theme >> ', theme);

    const value = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useProjectModal must be used within a ProjectModalProvider");
    }
    return context;
}

import { createContext, type Context } from "react";


export interface Theme {
    theme: string,
    setTheme: (theme: string) => void
}

const ThemeContext: Context<Theme> = createContext<Theme>({theme: "light", setTheme: (theme: string) => {} });

export default ThemeContext;
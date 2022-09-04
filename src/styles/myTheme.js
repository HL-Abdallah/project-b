import { createTheme } from "@mui/material"
import "@fontsource/roboto"

const lightTheme = createTheme({
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: "Roboto , serif , sans-serif"
    }
});

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    },
    typography: {
        fontFamily: "Roboto , serif , sans-serif"
    }
});

export { lightTheme, darkTheme };
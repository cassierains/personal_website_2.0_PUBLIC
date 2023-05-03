import { Paper } from "@mui/material"

export const Redirecting = () => {
    return(
        <Paper
        square
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "center",
            color: "white",
            background: "gray",
            backgroundAttachment: "absolute",
            height: "100vh",
            fontSize: 25,
            fontFamily: "sans-serif"
        }}>
        Redirecting...
    </Paper>
    )
}
import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { Event } from "../types"

const KaPkaEquation = () => {
    const[pKa, setPKa] = useState<string>("") //sets pka type to string
    const[Ka, setKa] = useState<string>("") //sets ka type to string
    const[output, setOutput] = useState<string>("") //sets the display of the output to string

    //declare the mathematical functions
    const KaToPka = (Ka: string) => {
        if(parseFloat(Ka) > 0) {
            let pKaOutput:number = -Math.log10(parseFloat(Ka))
            return(String(pKaOutput))
        } else {
            return("Invalid Ka. Ka must be greater than 0.")
        }
    }
    const pKaToKa = (pKa: string) => {
        let KaOutput:number = Math.pow(10, -parseFloat(pKa))
        return(String(KaOutput))
    }

    const handleSubmit = (pKa:string, Ka:string) => {
        if (pKa !== "" && Ka === "") { //get Ka
            setOutput(pKaToKa(pKa))
        } 
        else if (pKa === "" && Ka !== "") { //get pKa
            setOutput(KaToPka(Ka))
        } 
        else {
            setOutput("Invalid input(s)")
        }
    }

    return(
        <Grid
            container 
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid item xs={6}>
                <TextField 
                    label="pKa"
                    onChange={(e: Event) => setPKa(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Ka"
                    onChange={(e: Event) => setKa(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <Button
                    onClick={(e) => handleSubmit(pKa, Ka)}
                >Submit</Button>
            </Grid>
            <Grid item xs={6}>{output}</Grid>
        </Grid>
    )
}

export default KaPkaEquation
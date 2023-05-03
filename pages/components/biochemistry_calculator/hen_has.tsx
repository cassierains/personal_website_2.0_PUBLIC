import { Button, TextField, Grid } from "@mui/material"
import { useState } from "react"
import { Event } from "../types"

const HenHasEquation = () => {
    const[pKa, setPKa] = useState<string>("") //sets pka type to string
    const[pH, setPH] = useState<string>("") //sets pH type to string
    const[ratio, setRatio] = useState<string>("") //sets ratio type to string
    const[output, setOutput] = useState<string>("") //sets the display of the output to string

    //declare the mathematical functions
    const henHasPh = (pKa: string, ratio: string) => {
        let pH:number = parseFloat(pKa) + Math.log10(parseFloat(ratio))
        return(String(pH))
    }

    const pHError = "Invalid pH. pH cannot be less than 0 or greater than 14." //error message for pH

    const henHasPka = (pH:string, ratio:string) => {
        if (parseFloat(pH) >= 0 && parseFloat(pH) <= 14) {
            let pKa:number = parseFloat(pH) - Math.log10(parseFloat(ratio))
            return(String(pKa))
        } else {
            return(pHError)
        }
    }
    const henHasRatio = (pH: string, pKa:string) => {
        if (parseFloat(pH) >= 0 && parseFloat(pH) <= 14) {
            let ratio:number =  10**(parseFloat(pH)-parseFloat(pKa))
            return(String(ratio))
        } else {
            return(pHError)
        }
    }

    const handleSubmit = (pKa:string, pH:string, ratio:string) => {
        if (pKa!=="" && pH==="" && ratio!=="") { //get pH
            let henHasPhOutput = henHasPh(pKa, ratio)
            setOutput(henHasPhOutput)
        } 
        else if (pKa==="" && pH!=="" && ratio!=="") { //get pKa
            let henHasPkaOutput = henHasPka(pH, ratio)
            setOutput(henHasPkaOutput)
        } 
        else if (pKa!=="" && pH!=="" && ratio==="") { //get ratio
            let henHasRatioOutput = henHasRatio(pH, pKa)
            setOutput(henHasRatioOutput)
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
                    label="pH"
                    onChange={(e: Event) => setPH(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    label="pKa"
                    onChange={(e: Event) => setPKa(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    label="Ratio"
                    onChange={(e: Event) => setRatio(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <Button
                    onClick={(e) => handleSubmit(pKa, pH, ratio)}
                >Submit</Button>
            </Grid>
            <Grid item xs={6}>{output}</Grid>
        </Grid>
    )
}

export default HenHasEquation
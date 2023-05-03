import { Grid, Button, TextField } from "@mui/material"
import { useState } from "react"
import { Event } from "../types"

const GibbsEnergy = () => {
    const[gibbs, setGibbs] = useState<string>("")
    const[enthalpy, setEnthalpy] = useState<string>("")
    const[entropy, setEntropy] = useState<string>("")
    const[kelvin, setKelvin] = useState<string>("")
    const[output, setOutput] = useState<string>("")

    const gibbsGibbs = (enthalpy:string, entropy:string, kelvin:string) => {
        let gibbs:number = (
            parseFloat(enthalpy) - parseFloat(kelvin) * parseFloat(entropy)
        )
        return(String(gibbs))
    }

    const gibbsEnthalpy = (gibbs:string, kelvin:string, entropy:string) => {
        let enthalpy:number = (
            parseFloat(gibbs) + parseFloat(kelvin) + parseFloat(entropy)
        )
        return(String(enthalpy))
    }

    const gibbsEntropy = (enthalpy:string, gibbs:string, kelvin:string) => {
        let entropy:number = (
            (parseFloat(enthalpy) - parseFloat(gibbs)) / parseFloat(kelvin)
        )
        return(String(entropy))
    }

    const gibbsKelvin = (enthalpy:string, gibbs:string, entropy:string) => {
        let kelvinOut:number = (
            (parseFloat(enthalpy) - parseFloat(gibbs)) / parseFloat(entropy)
        )
        return(String(kelvinOut))
    }

    const handleSubmit = (
        gibbs:string, entropy:string, enthalpy:string, kelvin:string) => {
        if (gibbs === "" && entropy !== "" && enthalpy !== "" && kelvin !== "") {
            let gibbsOutput = gibbsGibbs(enthalpy, entropy, kelvin)
            if (parseFloat(gibbsOutput) < 0) {
                setOutput("Gibbs free energy is " + gibbsOutput + ". Reaction proceeds as input.")
            } 
            else if (parseFloat(gibbsOutput) === 0) {
                setOutput("Gibbs free energy is " + gibbsOutput + ". Reaction is in equalibrium. Proceeds in either direction.")
            } 
            else if (parseFloat(gibbsOutput) > 0) {
                setOutput("Gibbs free energy is " + gibbsOutput + ". Reaction proceeds in reverse.")
            }
        } 
        else if (gibbs !== "" && entropy === "" && enthalpy !== "" && kelvin !== "") {
            let entropyOutput = gibbsEntropy(enthalpy, gibbs, kelvin)
            setOutput("Entropy is " + entropyOutput + ".")
        } 
        else if (gibbs !== "" && entropy !== "" && enthalpy === "" && kelvin !== "") {
            let enthalpyOutput = gibbsEnthalpy(gibbs, entropy, kelvin)
            setOutput("Enthalpy is " + enthalpyOutput + ".")
        } 
        else if (gibbs !== "" && entropy !== "" && enthalpy !== "" && kelvin === "") {
            let kelvinOutput = gibbsKelvin(enthalpy, entropy, gibbs)
            setOutput("Temperature in Kelvin is " + kelvinOutput + ".")
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
                    label="Gibbs Free Energy"
                    onChange={(e: Event) => setGibbs(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Enthalpy"
                    onChange={(e: Event) => setEnthalpy(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Entropy"
                    onChange={(e: Event) => setEntropy(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Temperature in Kelvin"
                    onChange={(e: Event) => setKelvin(e.target.value)}
                />
            </Grid>
                <Grid item xs={6}><Button
                    onClick={(e) => 
                        handleSubmit(gibbs, entropy, enthalpy, kelvin)}
                >Submit</Button>
            </Grid>
            <Grid item xs={6}>{output}</Grid>
        </Grid>
    )
}

export default GibbsEnergy
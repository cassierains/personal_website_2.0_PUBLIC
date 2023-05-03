/** @jsxImportSource @emotion/react */
import { Grid, InputLabel, MenuItem, Select } from "@mui/material"
import React, { useEffect, useState } from "react"
import HenHasEquation from "./hen_has"
import KaPkaEquation from "./ka_pka"
import { SelectChangeEvent } from "@mui/material"
import GibbsEnergy from "./gibbs"
import { biochemStyles } from "./styles"

const BiochemCalc = () => {
    const PlaceHolder = () => {
        return(<div />)
    }
    
    const[math, setMath] = useState<React.ReactElement>(<PlaceHolder />)
    const[value,setValue] = useState<String>()

    useEffect(() => {
        if (value === "10") {
            setMath(<KaPkaEquation />)
        } 
        if ( value === "20") {
            setMath(<HenHasEquation />)
        }
        if ( value === "30") {
            setMath(<GibbsEnergy />)
        }
    }, [value])

    const handleChange = (e: SelectChangeEvent, child: React.ReactNode) => {
        setValue(e.target.value)
    }
    
    return(
        <Grid container css={biochemStyles}>
            <Grid item xs={12}>
                <InputLabel>
                    What calculations do you need done?
                </InputLabel>
            </Grid>
            <Grid item xs={12}>
                <Select 
                    onChange={(handleChange)}
                    value=""
                >
                    <MenuItem value={"10"}>
                        Pka/Ka
                    </MenuItem>
                    <MenuItem value={"20"}>
                        Henderson-Hasselbalch Equation
                    </MenuItem>
                    <MenuItem value={"30"}>
                        Gibbs Free Energy
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12}>{math}</Grid>
        </Grid>
    )
}

export default BiochemCalc
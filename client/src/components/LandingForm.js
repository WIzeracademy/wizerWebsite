import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
    
    formText:{
        margin:"10px 0"
    },
    formButton:{
        margin:"10px 0",
        color:"primary"
    }
    
}))

function LandingForm() {
    const classes = useStyles();
    return (
        <div>
             <TextField 
             id="outlined-basic" 
             color="secondary"  
             fullWidth 
             label="Name" 
             size="small"
             variant="outlined"
             className={classes.formText}
              />
                <TextField 
             id="outlined-basic" 
             color="secondary"  
             fullWidth 
             label="Phone No." 
             size="small"
             variant="outlined"
             className={classes.formText}
              />
                <TextField 
             id="outlined-basic" 
             color="secondary"  
             fullWidth 
             label="Email ID" 
             size="small"
             variant="outlined"
             className={classes.formText}
              />
            <Button 
             variant="contained" 
             fullWidth 
             color="secondary"
             size="large"
             className={classes.formButton}
            >
                 <Typography color="primary" variant="body1">Book a Schedule</Typography>
            </Button>

        </div>
    )
}

export default LandingForm

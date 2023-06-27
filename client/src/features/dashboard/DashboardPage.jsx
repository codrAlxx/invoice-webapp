import React from 'react'
import {Box, Typography } from "@mui/material"



const DashboardPage = () => {
  return (
        <Box sx={{display: "flex", marginLeft: "250px", mt:10}}>
            <Typography variant="h3">
                This DashboardPage is only allowed to looged in User
            </Typography>
        </Box>
  )
}

export default DashboardPage
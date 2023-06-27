import React from 'react'
import {Box, Typography } from "@mui/material"

const UsersListPage = () => {
  return (
    <Box sx={{display: "flex", marginLeft: "250px", mt:10}}>
    <Typography variant="h3">
        This admin page can only be viewed by admin users
    </Typography>
    </Box>
  )
}

export default UsersListPage
import React from 'react'
import { styled } from '@mui/material'

const StyledGridItem = styled(Grid)(({theme}) => ({
    position: "relative",
    display: "flex",
    height: "280px",
}));

export const ProjectCard = () => {
  return (
    <>
        <StyledGridItem item xs={12} sm={6}>
            
        </StyledGridItem>
    </>
  )
}

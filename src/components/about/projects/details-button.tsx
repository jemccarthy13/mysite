import React from "react"
import { Button, SxProps, Theme } from "../../../utils/muiadapter"

export type DetailsButtonProps = {
  onClick?: React.MouseEventHandler
  sx?: SxProps<Theme>
}

export const DetailsButton = () => {
  return (
    <Button
      type="button"
      sx={{
        color: "grey",
        borderRadius: "25px",
        border: "2px solid lightblue",
        margin: "auto",
      }}
    >
      Details
    </Button>
  )
}

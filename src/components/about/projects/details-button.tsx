import React from "react"
import { Button } from "../../../utils/muiadapter"

export type DetailsButtonProps = {
  onClick?: React.MouseEventHandler
}

const detailsSx = {
  color: "grey",
  borderRadius: "25px",
  border: "2px solid lightblue",
  margin: "auto",
}

export const DetailsButton = ({ onClick = undefined }: DetailsButtonProps) => {
  return (
    <Button type="button" sx={detailsSx} onClick={onClick}>
      Details
    </Button>
  )
}

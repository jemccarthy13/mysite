import React from "react"
import styled from "@emotion/styled"

type RoleTableListProps = {
  heading: string
  items: string[]
  align?: "column" | "row"
}

const RoleTableListHeading = styled.div`
  color: mediumblue;
  margin-top: 32px;
  margin-bottom: 8px;
`

const RoleTabeListItem = styled.div`
  line-height: 24px;
`

export function RoleTableList({
  heading,
  items,
  align = "column",
}: Readonly<RoleTableListProps>) {
  return (
    <>
      <RoleTableListHeading>{heading}</RoleTableListHeading>
      {align === "column" &&
        items.map((thing) => {
          return (
            <RoleTabeListItem key={thing.replace(" ", "")}>
              {thing}
            </RoleTabeListItem>
          )
        })}
      {align === "row" && (
        <div>
          {items
            .reduce((total, thing) => {
              return total + thing + ", "
            }, "")
            .slice(0, -2)}
        </div>
      )}
    </>
  )
}

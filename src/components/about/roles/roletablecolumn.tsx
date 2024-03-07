import React, { PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { Heading } from "../../styles"

type RoleTableProps = {
  icon: React.ReactNode | React.ReactElement
  role: string
  tagline: string
}

const RoleTableTagline = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

export function RoleTableColumn({
  role,
  icon,
  tagline,
  children = undefined,
}: PropsWithChildren<RoleTableProps>) {
  return (
    <>
      {/* eslint-disable-next-line react/forbid-component-props */}
      <Heading style={{ fontSize: "18px" }}>
        <div>{icon}</div>
        {role}
      </Heading>
      <RoleTableTagline>{tagline}</RoleTableTagline>

      {children}
    </>
  )
}

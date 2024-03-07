import React from "react"
import styled from "@emotion/styled"
import { IconButton } from "../../utils/muiadapter"
import {
  AlternateEmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../../utils/muiiconadapter"
import { BannerSection } from "../styles"

const FooterText = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;
`

const IconSection = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 56px;
  margin-bottom: 32px;
`

const StyledIconButton = styled(IconButton)<{ href?: string; target?: string }>`
  margin: 8px;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: grey;
  }
`

export function Footer() {
  return (
    <BannerSection>
      <FooterText>Transforming challenges into opportunities.</FooterText>
      <FooterText>© John McCarthy</FooterText>
      <FooterText>Last Updated: Mar 2024</FooterText>
      <IconSection>
        <div style={{ display: "inline-flex" }}>
          <StyledIconButton
            href="https://www.linkedin.com/in/jem3973"
            target="_blank"
          >
            <LinkedInIcon />
          </StyledIconButton>
          <StyledIconButton
            href="https://www.github.com/jemccarthy13"
            target="_blank"
          >
            <GitHubIcon />
          </StyledIconButton>{" "}
          <StyledIconButton href="mailto:jemccarthy13@gmail.com">
            <AlternateEmailIcon />
          </StyledIconButton>
        </div>
        <FooterText>
          <div style={{ fontSize: "14px" }}>
            Custom built by me, using React (TypeScript)
          </div>
        </FooterText>
      </IconSection>
    </BannerSection>
  )
}

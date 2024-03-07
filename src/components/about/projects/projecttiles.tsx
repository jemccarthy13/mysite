import React from "react"
import styled from "@emotion/styled"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "../../../utils/muiadapter"
import { TitleTagline } from "../../styles"
import { DetailsButton } from "./details-button"
import { ParrotSourLogo } from "./ps-logo"

const ProjectTitleTagline = styled(TitleTagline)`
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 4px;
`

const ProjectCard = styled(Card)`
  max-width: 345;
  height: 100%;
  margin: auto;
`

export function ProjectTiles() {
  return (
    <Grid
      sx={{
        flexGrow: 1,
        width: "80%",
        margin: "auto",
        marginBottom: "128px",
      }}
      container
      spacing={2}
      columns={3}
    >
      <Grid item xs={1}>
        <ProjectCard>
          <CardActionArea
            href="https://www.hypergiant.com/jeric2o/"
            target="_blank"
          >
            <CardMedia
              height="220"
              component="img"
              image="./images/CommandCenter-2D-View-1.png"
              alt="Jeric2o"
            />
            <CardContent>
              <ProjectTitleTagline>CBC2 (JERIC2O)</ProjectTitleTagline>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <DetailsButton />
          </CardActions>
        </ProjectCard>
      </Grid>

      <Grid item xs={1}>
        <ProjectCard>
          <CardActionArea
            href="https://www.parrotsour.com/#/chooser"
            target="_blank"
          >
            {/* eslint-disable-next-line react/forbid-component-props */}
            <ParrotSourLogo
              sx={{ height: "220px", width: "100%", background: "lightgrey" }}
            />
            <CardContent>
              <ProjectTitleTagline>ParrotSour</ProjectTitleTagline>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <DetailsButton />
          </CardActions>
        </ProjectCard>
      </Grid>

      <Grid item xs={1}>
        <ProjectCard>
          <CardActionArea>
            <CardMedia
              height="220"
              component="img"
              image="./images/ADT-logo.jpg"
              alt="..."
            />
            <CardContent>
              <ProjectTitleTagline>
                Airspace Deconfliction Tool (ADT)
              </ProjectTitleTagline>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <DetailsButton />
          </CardActions>
        </ProjectCard>
      </Grid>
    </Grid>
  )
}

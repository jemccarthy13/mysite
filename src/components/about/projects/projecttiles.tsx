import React from "react"
import styled from "@emotion/styled"
import ReactCardFlip from "react-card-flip"
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
import { useDialogContext } from "./use-dialog-context"

const ProjectTitleTagline = styled(TitleTagline)`
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 4px;
`

const ProjectCard = styled(Card)`
  max-width: 345;
  height: 100%;
  margin: auto;
`

const ProjectCardBackContent = styled.div`
  padding: 16px;
`

const ProjectCardBackParagraph = styled.div`
  margin-bottom: 8px;
`
const ProjectaCrdBackList = styled.ul`
  margin-left: -16px;
`
const ProjectaCrdBackListItem = styled.li``

export function ProjectTiles() {
  const {
    isDialogOpen: jeric2oOpen,
    openDialog: openJeric2oDialog,
    closeDialog: closeJeric2oDialog,
  } = useDialogContext()

  const {
    isDialogOpen: psOpen,
    openDialog: openPsDialog,
    closeDialog: closePsDialog,
  } = useDialogContext()

  const {
    isDialogOpen: adtOpen,
    openDialog: openADTDialog,
    closeDialog: closeADTDialog,
  } = useDialogContext()

  const {
    isDialogOpen: seleniumOpen,
    openDialog: openSelDialog,
    closeDialog: closeSelDialog,
  } = useDialogContext()

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
        <ReactCardFlip
          isFlipped={jeric2oOpen}
          containerStyle={{ height: "100%" }}
        >
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
                <ProjectTitleTagline>
                  CBC2 JERIC2O (Hypergiant)
                </ProjectTitleTagline>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DetailsButton onClick={openJeric2oDialog} />
            </CardActions>
          </ProjectCard>

          <ProjectCard>
            <CardActionArea
              sx={{
                height: "100%",
                margin: "auto",
              }}
              onClick={closeJeric2oDialog}
            >
              <ProjectTitleTagline>JERIC2O</ProjectTitleTagline>
              <ProjectCardBackContent>
                <ProjectCardBackParagraph>
                  Jeric2o is a TypeScript React web application that fuses
                  multiple complex data sources from the DoD and FAA to provide
                  real-time air operations awareness to DoD personnel.
                </ProjectCardBackParagraph>

                <ProjectCardBackParagraph>
                  I have:
                  <ProjectaCrdBackList>
                    <ProjectaCrdBackListItem>
                      Built 32 React atomic components
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Developed a generative framework for reusable components
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Constructed over 320 automated tests (90% code coverage)
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Eliminated 128 critical and major SonarQube code quality
                      issues
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Integrated 4 large datasets for MapBox layer display
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      ... and more!
                    </ProjectaCrdBackListItem>
                  </ProjectaCrdBackList>
                </ProjectCardBackParagraph>
              </ProjectCardBackContent>
            </CardActionArea>
          </ProjectCard>
        </ReactCardFlip>
      </Grid>

      <Grid item xs={1}>
        <ReactCardFlip isFlipped={psOpen} containerStyle={{ height: "100%" }}>
          <ProjectCard>
            <CardActionArea
              href="https://www.parrotsour.com/#/chooser"
              target="_blank"
            >
              {/* eslint-disable-next-line react/forbid-component-props */}
              <ParrotSourLogo
                sx={{
                  height: "220px",
                  width: "100%",
                  background: "lightgrey",
                }}
              />
              <CardContent>
                <ProjectTitleTagline>ParrotSour (USAF)</ProjectTitleTagline>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DetailsButton onClick={openPsDialog} />
            </CardActions>
          </ProjectCard>
          <ProjectCard>
            <CardActionArea
              sx={{
                height: "100%",
                margin: "auto",
              }}
              onClick={closePsDialog}
            >
              <ProjectTitleTagline>ParrotSour</ProjectTitleTagline>
              <ProjectCardBackContent>
                <ProjectCardBackParagraph>
                  ParrotSour is a TypeScript React web application that presents
                  aircraft formations to USAF Air Battle Managers to train UI
                  interactions and communication formatting to prepare for
                  combat. It is used daily by 3,200 military members from 19
                  Allied nations to train combat controllers.
                </ProjectCardBackParagraph>

                <ProjectCardBackParagraph>
                  I have:
                  <ProjectaCrdBackList>
                    <ProjectaCrdBackListItem>
                      Used HTMLCanvas to replicate legacy C2 system interaction
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Developed algorithms to animate aircraft formations on
                      canvas
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Explored AI/ML layering to generate correct answers from
                      formation images
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Utilized NLP in a prototype feature to command aircraft
                      with voice-to-text
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Prototyped fuzzy comparison to check if a user voices a
                      correct answer (think DuoLingo)
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      ... and more!
                    </ProjectaCrdBackListItem>
                  </ProjectaCrdBackList>
                </ProjectCardBackParagraph>
              </ProjectCardBackContent>
            </CardActionArea>
          </ProjectCard>
        </ReactCardFlip>
      </Grid>

      <Grid item xs={1}>
        <ReactCardFlip isFlipped={adtOpen} containerStyle={{ height: "100%" }}>
          <ProjectCard>
            <CardMedia
              height="220"
              component="img"
              image="./images/adtlogo.jpg"
              alt="ADT"
            />
            <CardContent>
              <ProjectTitleTagline>
                Airspace Deconfliction Tool (USAF)
              </ProjectTitleTagline>
            </CardContent>
            <CardActions>
              <DetailsButton onClick={openADTDialog} />
            </CardActions>
          </ProjectCard>
          <ProjectCard>
            <CardActionArea
              sx={{ height: "100%", margin: "auto" /** textAlign: "center" */ }}
              onClick={closeADTDialog}
            >
              <ProjectTitleTagline>ADT</ProjectTitleTagline>
              <ProjectCardBackContent>
                <ProjectCardBackParagraph>
                  ADT is a Visual Basic application that tracks aircraft
                  airspace assignment and alerts the user if two aircraft are
                  operating in close proximity, to reduce mid-air collisions and
                  increase safety of flight. It has been used for more than
                  9,000 hours for the safe control of more than 22,000 coalition
                  aircraft in a 1.2 million square mile area.
                </ProjectCardBackParagraph>

                <ProjectCardBackParagraph>
                  I have:
                  <ProjectaCrdBackList>
                    <ProjectaCrdBackListItem>
                      Designed input forms and augmentation tools for battle
                      management
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Written algorithms for 3D airspace computation and
                      analysis
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Optimized performance through memoization of computations
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Deployed to low-spec hardware on distributed airborne edge
                      nodes
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Cross-compiled softare for delivery to a Unix-based
                      environment
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      ... and more!
                    </ProjectaCrdBackListItem>
                  </ProjectaCrdBackList>
                </ProjectCardBackParagraph>
              </ProjectCardBackContent>
            </CardActionArea>
          </ProjectCard>
        </ReactCardFlip>
      </Grid>

      <Grid item xs={1} />

      <Grid item xs={1}>
        <ReactCardFlip
          isFlipped={seleniumOpen}
          containerStyle={{ height: "100%" }}
        >
          <ProjectCard>
            <CardMedia
              height="220"
              component="img"
              image="./images/Cesium-Selenium.jpg"
              alt="..."
            />
            <CardContent>
              <ProjectTitleTagline>
                Selenium Framework (BAE Systems)
              </ProjectTitleTagline>
            </CardContent>
            <CardActions>
              <DetailsButton onClick={openSelDialog} />
            </CardActions>
          </ProjectCard>
          <ProjectCard>
            <CardActionArea
              sx={{ height: "100%", margin: "auto" /** textAlign: "center" */ }}
              onClick={closeSelDialog}
            >
              {" "}
              <ProjectTitleTagline>Selenium Framework</ProjectTitleTagline>
              <ProjectCardBackContent>
                <ProjectCardBackParagraph>
                  A custom wrapping solution for the Selenium Webdriver, built
                  for internal use at BAE Systems to perform unit and
                  integration testing. It utilizes actual OS-level mouse and
                  keyboard events to layer UI/UX testing and ensure error-free
                  delivery.
                </ProjectCardBackParagraph>

                <ProjectCardBackParagraph>
                  I have:
                  <ProjectaCrdBackList>
                    <ProjectaCrdBackListItem>
                      Used the adapter pattern to abstract and simplify use of
                      free and open source software
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Integrated JUnit tests with a JavaScript web application
                      codebase
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Built CI/CD pipelines, including scheduled/triggered
                      Jenkins workflows
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      Performed geospatial computations for 3D globe (Cesium)
                      testing purposes
                    </ProjectaCrdBackListItem>
                    <ProjectaCrdBackListItem>
                      ... and more!
                    </ProjectaCrdBackListItem>
                  </ProjectaCrdBackList>
                </ProjectCardBackParagraph>
              </ProjectCardBackContent>
            </CardActionArea>
          </ProjectCard>
        </ReactCardFlip>
      </Grid>
    </Grid>
  )
}

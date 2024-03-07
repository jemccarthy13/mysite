import React from "react"
import { Grid, Paper } from "../../../utils/muiadapter"
import {
  ManageAccountsIcon,
  MilitaryTechIcon,
  TerminalIcon,
} from "../../../utils/muiiconadapter"
import { RoleTableColumn } from "./roletablecolumn"
import { RoleTableList } from "./roletablelist"

const poThings = ["Defense Technology", "Public Safety", "Customer Value"]
const poTools = [
  "Jira",
  "Confluence",
  "Gitlab",
  "Scrum",
  "SAFe",
  "Kanban",
  "Sprint Planning",
  "Product Vision",
  "Roadmaps",
]

const devLangs = [
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "Go",
  "SQL",
]

const devTools = [
  "React",
  "MapBox",
  "Vitest / jest",
  "Github",
  "Gitlab",
  "Workflows / Actions",
  "CI/CD",
  "Selenium",
  "GraphQL",
  "Grafana",
  "Jenkins",
  "JUnit",
  "Postgres",
  "VS Code",
]

const milExp = ["Instructor, Supervisor, Innovator"]
const milStats = [
  "1,500 flying hours",
  "650+ combat hours",
  "189 people supervised",
  "5 years overseas",
  "5 years joint/coalition experience",
  "3 years in NATO",
  "2 Air Medals",
  "2 Aerial Achievement Medals",
  "1 Joint Service Commendation Medal",
  "2 USAF Commendation Medals",
  "2 USAF Achievement Medals",
]

export function RoleTable() {
  return (
    <Grid
      sx={{
        flexGrow: 1,
        width: "80%",
        margin: "auto",
        marginBottom: "128px",
      }}
      container
      spacing={1}
      columns={3}
    >
      <Grid item xs={1}>
        <Paper sx={{ p: 2, textAlign: "center", height: "100%" }}>
          <RoleTableColumn
            role="Product Owner"
            icon={<ManageAccountsIcon fontSize="large" htmlColor="darkblue" />}
            tagline="Agility | Simplicity | Flexibility"
          >
            <RoleTableList
              heading="Things I enjoy delivering:"
              align="row"
              items={poThings}
            />
            <RoleTableList heading="PO Tools I've used:" items={poTools} />
          </RoleTableColumn>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        {" "}
        <Paper sx={{ p: 2, textAlign: "center", height: "100%" }}>
          <RoleTableColumn
            role="Full Stack Developer"
            icon={<TerminalIcon fontSize="large" htmlColor="darkblue" />}
            tagline="Frontend | Backend | Test"
          >
            <RoleTableList
              align="row"
              heading="Languages I speak:"
              items={devLangs}
            />
            <RoleTableList heading="Dev Tools I've used:" items={devTools} />
          </RoleTableColumn>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        {" "}
        <Paper sx={{ p: 2, textAlign: "center", height: "100%" }}>
          <RoleTableColumn
            role="Military Leader"
            icon={<MilitaryTechIcon fontSize="large" htmlColor="darkblue" />}
            tagline="Innovation | Motivation | Collaboration"
          >
            <RoleTableList heading="Experiences I draw from:" items={milExp} />
            <RoleTableList heading="Military Stats:" items={milStats} />
          </RoleTableColumn>
        </Paper>
      </Grid>
    </Grid>
  )
}

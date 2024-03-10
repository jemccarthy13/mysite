import React from "react"
import { Footer } from "../home/footer"
import {
  BannerSection,
  Heading,
  Link,
  NameHeader,
  Paragraph,
  Tagline,
  TitleTagline,
} from "../styles"
import { ProjectTiles } from "./projects/projecttiles"
import { RoleTable } from "./roles/roletable"

export function About() {
  const yearsDate = new Date(Date.now() - Date.parse("1 Jan 2011"))
  const years = Math.abs(yearsDate.getUTCFullYear() - 1970)

  return (
    <div>
      <NameHeader>John McCarthy</NameHeader>
      <TitleTagline>Product Manager | Full Stack Developer</TitleTagline>
      <div style={{ textAlign: "center" }}>
        {/* eslint-disable-next-line react/forbid-component-props */}
        <Link href="#/resume" style={{ color: "mediumblue" }}>
          Resumé
        </Link>
      </div>
      <Tagline>
        I deliver software that changes lives, and have a lot of fun doing it.
      </Tagline>
      <div style={{ textAlign: "center", margin: "auto", marginTop: "10vh" }}>
        <img src="./images/top_full_stack.avif" alt="Full Stack Developer" />{" "}
      </div>
      <BannerSection>
        <Heading>Hi I&lsquo;m John. Thanks for coming to my page.</Heading>

        <Paragraph centered>
          I began my Software Development career {years} years ago, and since
          then I have worked on embedded systems in C++, delivered operational
          software tools to improve safety of flight in the United States Air
          Force, built complex web applications in React / Typescript, and
          crafted system architecture for large & complex projects. Currently, I
          am finishing 8 years in the US Air Force on a fellowship as a Product
          Owner and Scrum Master at{" "}
          <Link href="https://www.hypergiant.com/" target="_blank">
            Hypergiant
          </Link>
          .
        </Paragraph>

        <Paragraph centered>
          I am currently conducting Agile ceremonies, sprint planning, and
          backlog management for the{" "}
          <Link href="https://www.hypergiant.com/jeric2o/" target="_blank">
            JERIC2O
          </Link>{" "}
          interface for Cloud-Based Command and Control (CBC2), the first joint
          all-service command and control solution fielded by the U.S. Air Force
          (USAF) and developed for the USAF Advanced Battle Management System.
        </Paragraph>

        <Paragraph centered>
          Prior to Hypergiant, I was a Flight Commander, Executive Officer, and
          Instructor{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Air_Battle_Manager"
            target="_blank"
          >
            Senior Air Battle Manager
          </Link>{" "}
          for the{" "}
          <Link
            href="https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104504/e-3-sentry-awacs/"
            target="_blank"
          >
            E-3 Airborne Warning and Control System
          </Link>
          . In the military, I led teams of 4 to 30 international people
          controlling medical evactuation, cargo lift, offensive and defensive
          operations in dynamic environments to support strategic surveillance
          and reconnaissance missions for the United States and NATO. At the
          same time, I curated and deployed several technologies for the USAF,
          including the{" "}
          <Link href="https://www.parrotsour.com" target="_blank">
            ParrotSour
          </Link>{" "}
          controller training aide, the Airspace Deconfliction Tool, and
          directly contributing to the JERIC2O UI.
        </Paragraph>

        <Paragraph centered>
          Before the military, I also worked on operational flight software on
          embedded microchips for real-time emitter identification and
          suppression, as well as a map display for the EC-130 &quot;Compass
          Call&quot; at{" "}
          <Link href="https://www.baesystems.com" target="_blank">
            BAE Systems
          </Link>
          .
        </Paragraph>
      </BannerSection>
      <TitleTagline>Who Am I?</TitleTagline>
      <RoleTable />
      <TitleTagline>What Have I Done?</TitleTagline>
      <ProjectTiles />
      {/* <TitleTagline>Recognition</TitleTagline> */}
      <Footer />
    </div>
  )
}

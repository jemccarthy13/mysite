import styled from "@emotion/styled"

export const Link = styled.a`
  color: cyan;
  &:hover {
    color: white;
  }
  font-weight: 700;
  text-decoration: none;
`

export const NameHeader = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  font-family: Montserrat;
  color: mediumblue;
  margin-top: 20vh;
`

export const TitleTagline = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 900;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Tagline = styled.div`
  font-size: 20px;
  margin-top: 10vh;
  text-align: center;
`

export const BannerSection = styled.div`
  margin-top: 5vh;
  padding-top: 5%;
  margin-bottom: 5vh;
  padding-bottom: 5%;
  margin-left: -15px;
  margin-right: -5px;
  background: linear-gradient(45deg, darkblue, blue);
  color: white;
`

export const Heading = styled.div`
  text-align: center;
  font-size: 28px;
  font-family: Montserrat;
`

export const Paragraph = styled.div<{ centered: boolean }>((props) => ({
  margin: "auto",
  marginTop: "5vh",
  textAlign: props.centered ? "center" : "left",
  fontSize: "18px",
  width: "60%",
  lineHeight: "32px",
}))

import React, { useCallback, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { DocumentCallback } from "react-pdf/dist/cjs/shared/types"
import { Button } from "../../utils/muiadapter"
import { NameHeader, TitleTagline } from "../styles"
import { Footer } from "./footer"

async function createFile(
  path: string,
  name: string,
  type: string
): Promise<File> {
  const response = await fetch(path)
  const data = await response.blob()
  const metadata = {
    type: type,
  }

  return new File([data], name, metadata)
}

const options = {
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
}

const Resume = styled(Document)`
  width: 100%;
`
const ResumePage = styled(Page)`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
`

const PageControls = styled.div`
  background: white;
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
  border-radius: 2px;
  margin: auto;
  text-align: center;
  display: flex;
  z-index: 5;
  width: 25%;
  margin-top: 8px;
`

const PageButton = styled(Button)`
  background: white;
  &:hover {
    background: lightgrey;
  }
`
const PageCounter = styled.div`
  background: white;
  padding: 16px;
  vertical-align: center;
  min-width: 40px;
  z-index: 5;
  width: 100%;
  height: 100%;
`

const DownloadButtonContainer = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
  margin-bottom: 8px;
`

const DownloadButton = styled(Button)`
  height: 32px;
  width: content;
  border: 2px solid lightgrey;
  border-radius: 16px;
  margin-left: auto;
`

const ResumeContainer = styled.div`
  min-height: 1000px;
`

const PlaceHolder = styled.div`
  height: 712px;
  margin: auto;
  text-align: center;
  margin-top: 64px;
`

export function ResumeViewer() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)

  const [file, setFile] = useState<File>()

  const resumeFilePath = "resume/Resume202408Mar.pdf"

  useEffect(() => {
    createFile(resumeFilePath, "resume.pdf", "application/pdf").then((file) =>
      setFile(file)
    )
  }, [])

  function onDocumentLoadSuccess(pdf: DocumentCallback) {
    setNumPages(pdf.numPages)
    setPageNumber(1)
  }

  const pageBack = useCallback(() => {
    const newPgNum = pageNumber - 1

    setPageNumber(Math.max(newPgNum, 1))
  }, [pageNumber])

  const pageFwd = useCallback(() => {
    const newPgNum = pageNumber + 1

    setPageNumber(Math.min(numPages, newPgNum))
  }, [pageNumber, numPages])

  return (
    <div>
      {/* eslint-disable-next-line react/forbid-component-props */}
      <NameHeader style={{ marginTop: "32px" }}>Resumé</NameHeader>
      <TitleTagline>As of 10 March 2024</TitleTagline>
      <DownloadButtonContainer>
        {/* @ts-expect-error download not a prop? */}
        <DownloadButton href={resumeFilePath} download="McCarthyJ-Resume.pdf">
          Download
        </DownloadButton>
      </DownloadButtonContainer>
      <ResumeContainer>
        <Resume
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          loading={<PlaceHolder>Loading...</PlaceHolder>}
          error={<PlaceHolder>Could not load PDF.</PlaceHolder>}
          noData={<PlaceHolder>No PDF loaded.</PlaceHolder>}
        >
          <ResumePage pageNumber={pageNumber} />
        </Resume>
        <PageControls>
          <PageButton disabled={pageNumber === 1} onClick={pageBack}>
            &lt;
          </PageButton>
          <PageCounter>
            {pageNumber} of {numPages}
          </PageCounter>
          <PageButton disabled={pageNumber === numPages} onClick={pageFwd}>
            &gt;
          </PageButton>
        </PageControls>
      </ResumeContainer>
      <Footer />
    </div>
  )
}

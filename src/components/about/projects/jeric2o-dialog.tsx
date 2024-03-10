import React from "react"
import { Dialog, DialogContent } from "../../../utils/muiadapter"
import { DetailsDialogProps } from "./details-dialog"

export function Jeric2oDetailsDialog(props: DetailsDialogProps) {
  const { open, onClose } = props

  return (
    <Dialog
      sx={{ width: "100%", margin: "auto" }}
      fullScreen={false}
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        {/* <IssueSelector value={selection} onChange={onIssueSelChanged} /> */}
        Test
      </DialogContent>

      {/* <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          id="submitIssueReport"
          onClick={handleBtnSubmit}
          disabled={!submitEnabled}
        >
          Submit
        </Button>
        <Button id="cancelIssueReport" onClick={handleCancelClick}>
          Cancel
        </Button>
      </DialogActions> */}
    </Dialog>
  )
}

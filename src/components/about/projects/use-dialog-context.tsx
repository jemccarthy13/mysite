import { useCallback, useState } from "react"

export type DialogContext = {
  isDialogOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}
export const useDialogContext = (): DialogContext => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)

  const openDialog = useCallback(() => {
    setDialogOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogOpen(false)
  }, [])

  return { isDialogOpen, openDialog, closeDialog }
}

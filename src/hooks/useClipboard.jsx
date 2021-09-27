import React, { useState, useEffect } from "react"

const useClipboard = resetIsCopied => {
  const [isCopied, setIsCopied] = useState(false)

  const setClipboard = text => {
    navigator.permissions
      .query({ name: "clipboard-write" })
      .then(result => {
        if (result.state === "granted" || result.state === "prompt") {
          /* write to the clipboard now */
          navigator.clipboard.writeText(text).then(
            () => {
              setIsCopied(true)
              console.log("Copied", text, "to clipboard")
            },
            () => {
              console.log("Error while copying", text, "to clipboard")
              setIsCopied(false)
            }
          )
        } else {
          console.log("Permission", result.state)
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    let timeout
    if (isCopied && resetIsCopied) {
      timeout = setTimeout(() => setIsCopied(false), resetIsCopied)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied, resetIsCopied])

  return [isCopied, setClipboard]
}

export default useClipboard

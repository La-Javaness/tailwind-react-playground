import { useEffect, useState } from "react"

const DARK = "dark"

const useDarkTheme = () => {
  const localTheme = localStorage.getItem("theme")
  const [isDarkMode, setIsDarkMode] = useState(
    localTheme === DARK ||
      (localTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(DARK)
      localStorage.setItem("theme", DARK)
    } else {
      document.documentElement.classList.remove(DARK)
      localStorage.setItem("theme", null)
    }
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode]
}

export default useDarkTheme

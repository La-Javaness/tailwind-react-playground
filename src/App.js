import useDarkTheme from "./useDarkTheme"

function App() {
  // const [isDarkMode, setIsDarkMode] = useDarkTheme()

  // const onDarkModeClick = () => {
  //   isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)
  // }

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen bg-white-500 dark:bg-gray-500 text-white">
      {/* <button
        className="bg-yellow-500 text-white rounded-md px-3 py-2 mb-3"
        onClick={onDarkModeClick}
      >
        {isDarkMode ? "Go light" : "Go Dark"}
      </button> */}
      <h1 className="text-yellow-500 dark:text-gray-100">Hello World!</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>
    </div>
  )
}

export default App

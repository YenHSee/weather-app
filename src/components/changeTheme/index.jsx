const ChangeTheme = ({ isDarkMode, changeDarkMode }) => {
  return (
    <>
      <button className="mb-5" onClick={() => changeDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? "Light" : "Dark"} Theme
      </button>
    </>
  );
};

export default ChangeTheme;

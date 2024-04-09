export default function Header({isDark}) {
  return(
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}>
      <h1>WelCome 홍길동</h1>
    </header>
  )
}
export default function UseContextPage_2({isDark, setIsDark}) {
  return (
    <div className="page">
      <UseContextHeader/>
      <UseContextContent isDark={isDark}/>
      <UseContextFooter isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}
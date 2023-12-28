import Logo from "../Image/note.gif"
const Header =()=>{
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" width={50} height={50}  />
        <h2>MY KEEP</h2>
      </div>
    </>
  )
}

export default Header
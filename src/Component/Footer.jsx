const Footer=()=>{
  const year = new Date().getFullYear();
  return(
    <>
      <div className="footer">
        <h4>copyright {year}</h4>
      </div>
    </>
  )
}
export default Footer
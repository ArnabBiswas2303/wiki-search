export default function Mario() {
  return (
    <div className="Mario">
       <img alt="Mario" src={process.env.PUBLIC_URL + 'Mario.gif'}/>
    </div>
  )
}

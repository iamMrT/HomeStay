import './Heading.css'

function Heading(){
    return (
      <div className="Heading d-flex">
        <div className="Heading__left">
          <h2>LUXURY</h2>
          <p>Home  stay</p>
        </div>

        <div className="Heading__nav">
          <ul>
            <li><a>Home</a></li>
            <li><a>Guide</a></li>
            <li><a>Facilities</a></li>
            <li><a>Contact Us</a></li>
            <li><a className="Heading__login">LOGIN/REGISTER</a></li>
          </ul>
        </div>
      </div>
    )
}

export default Heading
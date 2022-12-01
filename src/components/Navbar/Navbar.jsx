import './navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="NavbarLeft">
            <p className='leftItem'>Yasin Kocadağlı</p>
            <p className='leftItemX'>/</p>         
            <p className='leftItem'>Web Developer</p>
        </div>
        <div className="NavbarRight">
          <ul className='topList'>
              <li className="topListItem">ABOUT ME</li>
              <li className="topListItem">RESUME</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">CERTIFICATE</li>
          </ul>

        </div>
    </div>
  )
}

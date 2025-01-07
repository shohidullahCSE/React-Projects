import '../assets/css/NavBar.css';
export default function NavBar() {
  return (
   <div> <nav className="navbar">
    <div className="logo">My Portfolio</div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="burger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </nav>
  </div>
  )
}

import { Link } from 'react-router-dom';
function Footer() {


    return (
        <nav>
        <footer className="left">
          <h1 className="h1">Contact Me</h1>
        </footer>
        <div className="right">
          <ul className="">

      <Link className="link"to="/email">sheehpat@gmail.com</Link>
      <Link className="link"to="https://github.com/sheehpat">Github</Link>
      <Link className="link"to="https://linkedin.com/in/santiago-palacio-232487229">LinkedIn</Link>
  
          </ul>
        </div>
      </nav>
    )
}
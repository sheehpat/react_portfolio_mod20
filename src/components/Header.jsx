import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>
                <h1 className='left'>Patrick Sheehan</h1>

                <ul className='right'>
                    <Link className='link' to="/">About Me</Link>
                    <Link className='link' to="/Portfolio">Portfolio</Link>
                    <Link className='link' to="/Contact">Contact</Link>
                    <Link className='link' to="/Resume">Resume</Link>
                </ul>


            </nav>
        </header>
    )
}

export default Header
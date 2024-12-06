import { Link } from 'react-router-dom';
import '../css/AboutContent.css';

export default function AboutContent() {
  return (
    <nav className="About_container">
      <h2>ViSion</h2>
      <ul className='About_list'>
        <li>
          <Link to ="/about">About</Link>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
          Quia aut cumque expedita voluptate cupiditate ratione eveniet blanditiis fuga tempora in nam, iusto vel assumenda! Ipsam earum fugit natus quae ratione.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem totam minus modi soluta, ducimus porro earum aut! Perferendis pariatur cum atque nisi quam, accusantium autem commodi distinctio quo sed architecto!
          </p>
        </li>
      </ul>
    </nav>
  );
}

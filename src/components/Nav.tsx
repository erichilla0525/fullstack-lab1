import { Link } from 'react-router';

export default function Nav() {
  return(
    <nav className=''>
      <div className=''>
        <Link to="/employees">
          <h1>Employees</h1>
        </Link>
      </div>

      <div className=''>
        <Link to="/organization">
          <h1>Organization</h1>
        </Link>
      </div>
    </nav>
  )
}
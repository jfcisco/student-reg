import './NavMenu.css';

export function NavMenu({ isOpen, onClose, onLogout }: { isOpen: boolean; onClose: () => void; onLogout: () => void; }): JSX.Element {
  const navBarClasses = (isNavOpen: boolean): string => {
    const baseClasses = "nav-menu text-white ";
    if (isNavOpen) {
      return baseClasses + "nav-menu--open";
    }

    return baseClasses + "nav-menu--closed";
  };

  return (
    <nav className={navBarClasses(isOpen)}>
      <div>
        <img className="float-left mr-4" src="https://via.placeholder.com/60x60" alt="university logo" />
        <h1 className="font-light font-serif text-lg leading-5 uppercase">NOT Ateneo de Manila University</h1>
        <h2 className="clear-left mt-8 text-2xl font-bold uppercase">Student System</h2>
        <p className="underline">Ruth</p>
      </div>
      <button className="absolute right-4 top-4 lg:hidden" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className="nav-header">My Academics</h2>
      <ul>
        <li className="nav-link">Individual Program of Study</li>
        <li className="nav-link">Enrolled Classes</li>
        <li className="nav-link">Class Schedule</li>
        <li className="nav-link">Grades</li>
      </ul>

      <button className="btn-logout" onClick={onLogout}>
        Log out
      </button>

    </nav>);
}

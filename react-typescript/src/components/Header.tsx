import { NavLink } from "react-router"

const navLinks = [
    { path: '/', label: 'Recipes' },
    { path: '/about', label: 'About' }
];

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-2">
        <h1 className="text-4xl font-bold">Gasto</h1>
        <div className="flex gap-2 text-lg text-slate-500 font-medium">
            {
                navLinks.map(({ path, label }) => (
                    <NavLink 
                        key={path} 
                        to={path} 
                        className={({ isActive }) => isActive ? 'font-extrabold' : undefined}
                    >
                        {label}
                    </NavLink>
                ))
            }
        </div>
    </nav>
  )
}

export default Header
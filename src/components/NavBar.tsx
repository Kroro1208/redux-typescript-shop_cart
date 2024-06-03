
const NavBar: React.FC = () => {
  return (
    <nav className="w-full container mx-auto justify-between items-center p-5">
      <h3 className="text-3xl font-bold">Redux with TypeScript Shop Cart</h3>
      <div className="relative flex justify-between">
        <p>logo</p>
        <div className="absolute -top-2.5 -right-2.5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <p className="text-white mb-0 text-xl">0</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

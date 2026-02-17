export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold">Abigail Efua Tetteh</div>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  )
}

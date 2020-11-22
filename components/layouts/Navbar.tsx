const Navbar = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
      
      <img className="w-7" src="/icons/icon.png" />
      <h4 className="text-center md:text-left text-sm md:mt-0 mt-4 md:pl-8">
  Home {' '} About {' '} Project {' '} Github
      </h4>
    </section>
  )
}

export default Navbar

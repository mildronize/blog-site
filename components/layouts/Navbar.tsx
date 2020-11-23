import Container from "../layouts/container";

const NavLink = ({ children }: any) => {
  return (
    <div className="ml-4">{children}</div>
  )
};

const Navbar = ({ isShow }: any) => {
  return (
    <>
    <div className={`fixed w-full transform md:-translate-y-${isShow?'0':'20'} -translate-y-${isShow?'0':'36'} transition-transform  bg-white shadow-md `} style={{ top: 0}} >
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between py-2">
          <h1 className="text-3xl md:text-4xl font-bold font-cover tracking-tighter leading-tight md:mr-8 p-2 transition-colors hover:text-white bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500">
          <a href="/">mildronize.</a>
      </h1>
          {/* <img className="w-7" src="/icons/icon.png" /> */}
          <div className="text-center md:mt-0 mt-4 md:pl-8">
            <div className="flex ">
              <NavLink>home</NavLink>
              <NavLink>about</NavLink>
              <NavLink>project</NavLink>
              <NavLink>github</NavLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
    <div className="mb-24"></div>
    </>
  )
}

export default Navbar

import Link from 'next/link';

const NavLink = ({children}: any) => {
  return (
  <div className="mx-4">{children}</div>
  )
};

const Navbar = () => {
  return (
    <section className="flex-col flex justify-center items-center h-vscreen-60">
      <h1 className="text-5xl md:text-8xl font-bold font-hero tracking-tighter leading-tight -mt-32 p-2 transition-colors hover:text-white bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500">
        <Link href="/">mildronize.</Link>
      </h1>
      <div className="text-center text-xl mt-8 md:w-4/6 w-5/6">
      Welcome to my personal archive. You can find almost stuff about me - blog posts, resume, projects, contact information, and more.
      </div>
    </section>
  )
}

export default Navbar

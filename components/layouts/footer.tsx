import Container from './container'
import { EXAMPLE_PATH } from '../../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 mt-16">
      <Container>
        <div className="py-8 flex flex-col items-center text-base">
          <div className="tracking-tighter leading-tight text-center my-1 ">
          © 2015 - 2020 mildronize.com
          </div>
          <div className="tracking-tighter leading-tight text-center my-1 ">
          V 5.0.0 Built with ❤ by Thada Wangthammang
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

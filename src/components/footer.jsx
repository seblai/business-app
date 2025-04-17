import Logo from "./logo"

function Footer(){
    return (
      <footer className="border-top py-2 text-center">
       <Logo />
       <span>
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
    );
}
export default Footer
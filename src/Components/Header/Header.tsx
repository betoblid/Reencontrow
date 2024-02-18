import logo from "../../assets/logo.svg"
const Header = () => {

    return(
        <header className="flex items-center justify-center py-10">
            <figure>
                <img src={logo} alt="Logo do nosso site" />
            </figure>
        </header>
    );
}
export default Header;

import instagram from '../../assets/icon-instagram.svg';
import fecebook from '../../assets/icon-fecebook.svg';
import twiter from '../../assets/icon-twiter.svg';
const Footer = () => {

    return(
        <footer className="flex flex-col items-center justify-center my-5">
            <p className='uppercase'>nossas redes sociais</p>
            <figure className="flex md:space-x-6 space-x-2 sm:my-5 my-3">
                <img src={instagram} alt="rede sociais de nossa loja" className='max-w-6'/>
                <img src={twiter} alt="rede sociais de nossa loja" className='max-w-6 '/>
                <img src={fecebook} alt="rede sociais de nossa loja" className='max-w-6'/>
            </figure>
            <p className='text-sm'>Design criado por @qualeosoftware</p>
            <p className='text-sm'>Desenvolvido por <a href="https://www.linkedin.com/in/herbertlsouza/" target='_blank'>Herbert souza</a></p>
        </footer>
    );
}
export default Footer;

import CardHeart from "../../Components/CardHeart";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
// icones de img 
import ilustration from '../../assets/icon-ilustration.svg'
import iconsobre from "../../assets/icon-ilustration-about.svg"
import Form from "../../Components/Form"

const primaryAffairs: string[] = ['relacionamento', 'sabedoria', 'amor', 'amizade']

const Home = () => {

    return (
        <>
            <Header />
            <section id="banner" className="my-20">
                <div className="flex items-center justify-around gap-3 max-w-[1400px] mx-auto flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
                    <div className="lg:w-[600px] xl:w-[680px] sm:w-full-10 sm:ml-10">
                        <p className="sm:text-2xl my-2 text-lg"
                        >Uma plataforma completa de informações...
                        </p>
                        <h1 className="font-bold 2xl:text-7xl sm:mb-14 mb-7 xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-2xl">
                            Já são mais de 4mil
                            pessoas conectadas
                            em nossa comunidade
                        </h1>
                        <a href="#redistreUser" className="uppercase text-lg sm:text-xl bg-[#1A7993] sm:px-10 px-6 py-2 sm:py-4 rounded-lg">
                            Quero participar
                        </a>
                    </div>
                    <figure>
                        <img src={ilustration} alt="banner" />
                    </figure>
                </div>
            </section>
            <section className="my-20">

                <h2 className="text-center font-bold text-xl sm:text-3xl my-10 uppercase">Principais assuntos abordados</h2>
                
                <div className="grid grid-cols-1 place-items-center sm:grid-cols-4 max-w-3xl gap-10 mx-auto">
                    {
                        primaryAffairs.map((affair, index) => <CardHeart key={index + 11} title={affair} />)
                    }
                </div>
            </section>

            <section className="bg-cyan-600">
                <div className="flex items-center justify-around max-w-[1440px] mx-auto flex-col-reverse md:flex-row">

                    <div className=" 2xl:max-w-[683px] xl:max-w-[683px] mx-auto sm:ml-2">
                        <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold">
                            UMA COMUNIDADE SOBRE
                            RELACIONAMENTO AMOROSO...
                        </h2>
                        <p className=" text-base md:text-3xl 2xl:w-10/12 xl:w-10/12 my-5">
                            Ensinamentos para você recomquistar o seu amor.
                            Pra você que é acanhado(a)...
                        </p>
                        <a href="#redistreUser" 
                            className="font-medium uppercase px-5 sm:px-10 py-4 bg-white text-black sm:mt-14 md:mb-0 mb-5 text-sm md:text-2xl"
                            type="button">
                            QUERO FAZER PARTE
                        </a>
                    </div>
                    <div>
                        <img src={iconsobre} alt="comunidade sobre" className="mb-10 md:mb-0" />
                    </div>
                </div>
            </section>
            <section className="my-20" id="redistreUser">
                <h2 className=" font-bold uppercase text-2xl sm:text-4xl md:w-[740px] text-center mx-auto">
                    Receba nossos materiais educativos gratuitamente em seu email
                </h2>
                <div className="max-w-[700px] w-11/12 mx-auto mt-20">
                    <Form />
                </div>
            </section>
            <Footer />
        </>
    );
}
export default Home;

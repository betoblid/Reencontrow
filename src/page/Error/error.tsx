import { Link } from "react-router-dom";


const Error = () => {

    return(
        <section className="min-h-screen w-full flex items-center justify-center flex-col gap-4">
            <h2 className="text-red-600 font-bold sm:text-xl lg:text-2xl">Erro 404</h2>
            <p className="sm:text-lg lg:text-xl">Essa pagina não existe volte para pagina princial</p>
            <Link to="/" className="bg-blue-600 px-6 py-2 rounded-md active:scale-110 hover:bg-blue-800">
                Voltar
                </Link>
        </section>
    );
}

export default Error;
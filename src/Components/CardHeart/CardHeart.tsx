import IconHeart from "../../assets/icon-heart.svg"

interface HeartProps {
    title: string
}

const CardHeart = ({title}: HeartProps) => {

    return(
        <div className="bg-gray-dark max-w-44 w-full py-4 flex items-center justify-center flex-col gap-5 rounded-md shadow-md shadow-black">
            <figure>
                <img src={IconHeart} alt="icone de coração" />
            </figure>
            <h3 className="text-xl tracking-wide">{title}</h3>
        </div>
    );
}
export default CardHeart;

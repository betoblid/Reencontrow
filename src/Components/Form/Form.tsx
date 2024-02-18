import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const UserFormSchame = z.object({
    FirstName: z.string().min(4, "Seu nome tem que ter no minimo 4 caracteres").max(20, "Nome muito grande").nonempty("Nome Obrigatorio"),
    UserEmail: z.string().email("Digite um E-mail valido").nonempty("E-mail Obrigatorio")
});

type typeSchame = z.infer<typeof UserFormSchame>

const Form = () => {

    const { register, handleSubmit, setValue ,formState: { errors } } = useForm<typeSchame>({ resolver: zodResolver(UserFormSchame) })

    const submitForm = () => {
        toast.success("Formulario enviado com sucesso")
        setValue("FirstName", "")
        setValue("UserEmail", "")
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(() => submitForm())}
                action="#"
                className="flex flex-1 flex-col items-center justify-center gap-3">

                <div className="w-full">
                    <input
                        {...register("FirstName")}
                        autoComplete="first name"
                        type="text"
                        className="w-full p-2 placeholder:text-slate-900 rounded-md text-black"
                        placeholder="digite Seu Nome" />

                    <p className="text-red-500 tracking-wider">
                        {errors.FirstName?.message}
                    </p>
                </div>
                <div className="w-full">
                    <input
                        {...register("UserEmail")}
                        autoComplete="email"
                        type="email"
                        className="w-full p-2 placeholder:text-slate-900 rounded-md text-black"
                        placeholder="digite Seu E-mail" />

                    <p className="text-red-500 tracking-wider">
                    {errors.UserEmail?.message}
                    </p>
                </div>
                <button
                    className="bg-cyan-700 w-full font-bold uppercase text-sm sm:text-lg py-2 sm:py-4">
                    Quero receber
                </button>
            </form>
        </>
    );
}
export default Form;

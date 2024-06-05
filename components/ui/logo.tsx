import Image from "next/image";

export default function logo() {
    return (
        <div className="flex jutify-center mt-5">
            <div className="relative w-40 h-40">
                <Image
                    fill
                    alt="Logotipo Fresh Coffe"
                    src='/logo.svg'
                />
            </div>
        </div>
    )
}
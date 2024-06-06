import Image from "next/image";

export default function Logo() {  // Cambiado a 'Logo'
    return (
        <div className="flex justify-center mt-5">  {/* Corregido 'jutify' a 'justify' */}
            <div className="relative w-40 h-40">
                <Image
                    fill
                    alt="Logotipo Fresh Coffee"
                    src='/logo.svg'
                    style={{ objectFit: 'contain' }}  // Incluido 'objectFit' en 'style'
                />
            </div>
        </div>
    );
}

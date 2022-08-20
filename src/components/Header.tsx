const Header = (): JSX.Element => {
    return (
        <header className="mt-8">
            <h1 className="font-black text-5xl text-center md:w-2/3 lg:w-auto mx-auto">
                Seguimiento de Pacientes {''}
                <span className="text-purple-500">Veterinaria</span>
            </h1>
        </header>
    );
}

export default Header;
const Patient = (): JSX.Element => {
    return (
        <div className="px-4 py-10 m-3 bg-white shadow-md hover:shadow-xl hover:scale-105 hover:cursor-pointer rounded-xl">
            <p className="mb-2 font-bold text-gray-600 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Dueño:{' '}
                <span className="font-normal normal-case">AdminVet</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Email Contacto:{' '}
                <span className="font-normal normal-case">admin@adminvet.com</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Fecha de Alta:{' '}
                <span className="font-normal normal-case">{(new Date()).toLocaleString()}</span>
            </p>

            <p className="mb-2 font-bold text-gray-600 uppercase">Descripción de los síntomas:
                <br />
                <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum id quia, iste quis enim eius veritatis cupiditate? Optio velit corporis consequuntur officia enim sequi ut, porro voluptatibus illo voluptatum fuga?</span>
            </p>
        </div>
    );
}

export default Patient;
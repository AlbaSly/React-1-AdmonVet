import Patient from "./Patient";

const PatientList = (): JSX.Element => {
    return (
        <section className="md:w-1/2 lg:w-3/5 my-10 md:my-0">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg my-5 text-center">
                Administra tus{' '}
                <span className="text-purple-500 font-bold">Pacientes</span>{' y '}
                <span className="text-purple-500 font-bold">Citas</span>
            </p>

            <div className="md:h-screen md:overflow-y-auto overflow-x-hidden">
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
            </div>
        </section>
    );
}

export default PatientList;
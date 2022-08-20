import { useState, Dispatch, SetStateAction } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

import { InitialPatientArray, IPatient } from "./interfaces/IPatient";

const App = (): JSX.Element => {
  const [patientList, setPatientList]: [IPatient[], Dispatch<SetStateAction<IPatient[]>>] = useState(InitialPatientArray);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-10 md:flex">
        <Form />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
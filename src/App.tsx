import { useState, Dispatch, SetStateAction } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

import { InitialPatient, InitialPatientArray, IPatient } from "./interfaces/patient.interface";

const patientListLocalStorageKey = 'admon_vet__patientList';

const App = (): JSX.Element => {
  const [loaded, setLoaded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [patient, setPatient]: [IPatient, Dispatch<SetStateAction<IPatient>>] = useState(InitialPatient);
  const [patientList, setPatientList]: [IPatient[], Dispatch<SetStateAction<IPatient[]>>] = useState(InitialPatientArray);
  const [formEdition, setFormEdition]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);


  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-10 md:flex">
        <Form patientState={{patient, setPatient}} patientListState={{patientList, setPatientList}}/>
        <PatientList patientList={patientList} />
      </div>
    </div>
  );
}

export default App;
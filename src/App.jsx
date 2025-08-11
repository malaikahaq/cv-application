import GeneralInfo from "./components/GeneralInfo";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isEditingGeneralInfo, setisEditingGeneralInfo] = useState(true);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setisEditingGeneralInfo(false);
  }
  function handleEdit() {
    setisEditingGeneralInfo(true);
  }
  return (
    <div>
      <GeneralInfo
        name={name}
        email={email}
        phone={phone}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        isEditing={isEditingGeneralInfo}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
      />
      {/* Later: Education, Experience components will also go here */}
    </div>
  );
}

export default App;

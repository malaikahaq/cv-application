import "../styles/GeneralInfo.css";

function GeneralInfo({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  isEditing,
  onSubmit,
  onEdit,
}) {
  return (
    <>
      {isEditing ? (
        //edit mode
        <div>
          <form onSubmit={onSubmit}>
            <label>
              Name:
              <input
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={onNameChange}
                required
              />
            </label>
            <br />
            <label>
              Email address:
              <input
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={onEmailChange}
                required
              />
            </label>
            <br />
            <label>
              Phone number:
              <input
                placeholder="Enter your phone number"
                type="number"
                value={phone}
                onChange={onPhoneChange}
                required
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <label>Name: {name}</label>
          <label>Email: {email}</label>
          <label>Phone Number: {phone}</label>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </>
  );
}
export default GeneralInfo;

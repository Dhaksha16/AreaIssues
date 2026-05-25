function Register() {
  return (
    <div className="page">

      <h1>Register</h1>

      <form className="form">

        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Register</button>

      </form>

    </div>
  );
}

export default Register;
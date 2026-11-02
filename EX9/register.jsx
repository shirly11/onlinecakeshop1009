import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    gender: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z ]+$/.test(form.name.trim())) {
      newErrors.name = "Enter a valid name using letters only.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)) {
      newErrors.password =
        "Password needs 8 characters, uppercase, lowercase and a number.";
    }

    if (Number(form.age) < 18 || Number(form.age) > 30 || !form.age) {
      newErrors.age = "Age must be between 18 and 30.";
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must contain exactly 10 digits.";
    }

    if (!form.gender) newErrors.gender = "Please select your gender.";
    if (!form.state) newErrors.state = "Please select your state.";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        password: "",
        age: "",
        mobile: "",
        gender: "",
        state: "",
      });
    }
  };

  return (
    <main className="form-page">
      <div className="form-card">
        <div className="form-heading">
          <span className="eyebrow">JOIN OUR SWEET FAMILY</span>
          <h1>Create Your Account</h1>
          <p>Register with Sweet Cravings and make every moment sweeter!</p>
        </div>

        {success && (
          <div className="success-message">
            🎉 Registration successful! Welcome to Sweet Cravings.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
            />
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="18–30"
                min="18"
                max="30"
              />
              {errors.age && <small className="error">{errors.age}</small>}
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
                maxLength="10"
              />
              {errors.mobile && (
                <small className="error">{errors.mobile}</small>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
            {errors.gender && (
              <small className="error">{errors.gender}</small>
            )}
          </div>

          <div className="form-group">
            <label>State</label>
            <select name="state" value={form.state} onChange={handleChange}>
              <option value="">Select your state</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Other</option>
            </select>
            {errors.state && <small className="error">{errors.state}</small>}
          </div>

          <button type="submit" className="primary-btn submit-btn">
            Create Account →
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;

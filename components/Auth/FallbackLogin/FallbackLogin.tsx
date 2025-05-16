import styles from '../../../styles/addon-styles/loginV2.module.scss';
import Image from 'next/image';
import LoginImage from '../../../public/assets/images/loginPageImage.png';
import Logo from '../../../public/assets/images/LogoAtelierReya.svg';
import { Form, InputGroup } from 'react-bootstrap';
import useLoginHook from '../../../hooks/AuthHooks/useLoginHook';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginComponentV2() {
  const { passwordHidden, togglePasswordIcon, fetchToken, loginBtnLoader } = useLoginHook();
  const [formData, setFormData] = useState({ usr: '', pwd: '' });
  const [errors, setErrors] = useState({ usr: '', pwd: '' });

  const validate = () => {
    const newErrors = { usr: '', pwd: '' };

    if (!formData.usr) {
      newErrors.usr = 'User ID field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.usr)) {
      newErrors.usr = 'Enter a valid user ID';
    }

    if (!formData.pwd) {
      newErrors.pwd = 'Password field is required';
    } else if (formData.pwd.length < 6) {
      newErrors.pwd = 'Password is too short - should be 6 chars minimum';
    }

    setErrors(newErrors);
    return !newErrors.usr && !newErrors.pwd;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchToken(formData);
    // if (validate()) {
    // }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginImagecontainer}>
        <Image src={LoginImage} alt="Login Image" className={styles.loginImage} fill />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <a href="/" className={styles.logo}>
            <Image src={Logo} alt="Logo Image" fill style={{ objectFit: 'cover' }} />
          </a>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>Login</h1>
            <p>Enter your details to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <Form.Group controlId="formUserID" className={styles.inputGroup}>
              <Form.Label className={styles.inputLabel}>User ID</Form.Label>
              <Form.Control
                type="text"
                name="usr"
                placeholder="Enter your user ID"
                value={formData.usr}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.usr && <div className={styles.errorText}>{errors.usr}</div>}
            </Form.Group>
            <Form.Group controlId="formPassword" className={styles.pwdInputGroup}>
              <Form.Label className={styles.inputLabel}>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={passwordHidden ? 'password' : 'text'}
                  name="pwd"
                  placeholder="Enter you password"
                  value={formData.pwd}
                  onChange={handleChange}
                  className={styles.pwdInputField}
                />
                <InputGroup.Text className={styles.pwdInputIcon}>
                  <span>
                    {passwordHidden ? (
                      <FiEyeOff color="#5B5B5B" onClick={togglePasswordIcon} />
                    ) : (
                      <FiEye color="#5B5B5B" onClick={togglePasswordIcon} />
                    )}
                  </span>
                </InputGroup.Text>
              </InputGroup>
              {errors.pwd && <div className={styles.errorText}>{errors.pwd}</div>}
            </Form.Group>
            <a href="#" className={styles.forgotPasswordLink}>
              Forgot password?
            </a>
            <button type="submit" className={styles.loginButton} disabled={loginBtnLoader}>
              {loginBtnLoader ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

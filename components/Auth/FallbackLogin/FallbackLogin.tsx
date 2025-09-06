import styles from '../../../styles/addon-styles/loginV2.module.scss';
import Image from 'next/image';
import Logo from '../../../public/assets/images/Mask_group.svg';
import { Form, InputGroup } from 'react-bootstrap';
import useLoginHook from '../../../hooks/AuthHooks/useLoginHook';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../../../services/config/app-config';
import SettingsData from '../../../summit-settings.json';

export default function LoginComponentV2() {
  const { passwordHidden, togglePasswordIcon, fetchToken, loginBtnLoader } = useLoginHook();
  const [formData, setFormData] = useState({ usr: '', pwd: '' });
  const [errors, setErrors] = useState({ usr: '', pwd: '' });
  const { t } = useTranslation('common');
  const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  const validate = () => {
    const newErrors = { usr: '', pwd: '' };

    if (!formData.usr) {
      newErrors.usr = 'user_id_is_required';
    } 

    if (!formData.pwd) {
      newErrors.pwd = 'password_is_required';
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
    if (validate()) {
      fetchToken(formData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formSection}>
        <a href="/product-category" className={styles.logo}>
          <Image src={SettingsData?.data?.logo} alt="Logo Image" fill style={{ objectFit: 'contain' }} loader={imageLoader}/>
        </a>
        <div className={styles.formHeader}>
          <h1 className={styles.title}>{t('login')}</h1>
          <p className={styles.subtitle}>Welcome Back! Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <Form.Group controlId="formUserID" className={`mb-2 ${styles.inputGroup}`}>
            <Form.Label className={styles.inputLabel}>{t('user_id')}</Form.Label>
            <Form.Control
              type="text"
              name="usr"
              placeholder={t('enter_your_user_id')}
              value={formData.usr}
              onChange={handleChange}
              className={styles.inputField}
            />
            {errors.usr && <div className={styles.errorText}>{t(errors.usr)}</div>}
          </Form.Group>
          <Form.Group controlId="formPassword" className={styles.pwdInputGroup}>
            <Form.Label className={styles.inputLabel}>{t('password')}</Form.Label>
            <InputGroup>
              <Form.Control
                type={passwordHidden ? 'password' : 'text'}
                name="pwd"
                placeholder={t('enter_your_password')}
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
            {errors.pwd && <div className={styles.errorText}>{t(errors.pwd)}</div>}
          </Form.Group>
          {/* <a href="/forgot_password" className={styles.forgotPasswordLink}>
            {t('forgot_password')}?
          </a> */}
          <button type="submit" className={styles.loginButton} disabled={loginBtnLoader}>
            {loginBtnLoader ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              <span>{t('login')}</span>
            )}
          </button>
          <div className='pt-3'>
            {/* <p className={styles.loginFooterText}>{t('dont_have_an_account')} <Link className={styles.forgotPasswordLink} href='/register'>{t('sign_up')}</Link></p> */}
          </div>
        </form>
      </div>
    </div>
  );
}


// LoginForm.tsx
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import KCLogo from '../../public/assets/images/Mask_group.svg';
import Image from 'next/image';
import useLoginHook from '../../hooks/AuthHooks/useLoginHook';

const LoginForm: React.FC = () => {
  const { loginBtnLoader, fetchToken } = useLoginHook();
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#A69375' }}>
      <div
        className="px-4 py-5 rounded-4 shadow-sm text-center"
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#F4EFE6',
          borderRadius: '1.5rem',
        }}
      >
        <div className="mb-4">
          <Image src={KCLogo} alt="Logo" height="56" className="mb-3" />
          <h2 className="fw-bold mb-1" style={{ color: '#3C342D', fontSize: '28px' }}>
            Login
          </h2>
          <p className="text-muted" style={{ fontSize: '15px' }}>
            Welcome Back! Please login to your account
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchToken({ usr: userId, pwd: password });
          }}
        >
          <div className="mb-4 text-start">
            <label htmlFor="userId" className="form-label fw-semibold" style={{ color: '#3C342D', fontSize: '15px' }}>
              User ID
            </label>
            <input
              type="text"
              className="form-control py-2"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter User ID"
              style={{ fontSize: '14px', borderRadius: '10px' }}
            />
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#3C342D', fontSize: '15px' }}>
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control py-2"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    fetchToken({ usr: userId, pwd: password });
                  }
                }}
                placeholder="Enter Password"
                style={{ fontSize: '14px', borderRadius: '10px 0 0 10px' }}
              />
              <span
                className="input-group-text bg-white"
                style={{ borderRadius: '0 10px 10px 0', cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>
            <div className="text-end mt-1">
              <a href="#" className="text-muted small" style={{ fontSize: '13px' }}>
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="button"
            className="btn w-100 mt-4"
            style={{
              backgroundColor: '#A69375',
              color: '#fff',
              fontWeight: 500,
              fontSize: '15px',
              borderRadius: '10px',
              padding: '10px 0',
            }}
            onClick={() => fetchToken({ usr: userId, pwd: password })}
            disabled={loginBtnLoader}
          >
            {loginBtnLoader ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ color: '#d7cfc1' }}></span>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

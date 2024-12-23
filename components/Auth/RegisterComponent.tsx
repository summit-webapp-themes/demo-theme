import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useRegisterUser from '../../hooks/AuthHooks/useRegisterUser';

const RegisterComponent = () => {
  const {
    isLoading,
    errorMessage,
    handleRegistrationFormValueChanges,
    submitRegistrationForm,
    registrationFormData,
    resetRegistrationForm,
  } = useRegisterUser();

  const validationSchema = Yup.object({
    salutation: Yup.string().required('Salutation is required'),
    // name: Yup.string().required('Name is required'),
    // email: Yup.string().email('Invalid email address').required('Email is required'),
    // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    // contact: Yup.string()
    //   .matches(/^[0-9]{10}$/, 'Contact must be a 10-digit number')
    //   .required('Contact is required'),

    // state: Yup.string().required('State is required'),
    // city: Yup.string().required('City is required'),
    // addressLine1: Yup.string().required('Address Line 1 is required'),
    // addressLine2: Yup.string(),

    // pincode: Yup.string()
    //   .matches(/^[0-9]{6}$/, 'Pincode must be a 6-digit number')
    //   .required('Pincode is required'),
  });

  return (
    <div className="registration-form">
      <div className="row mt-5">
        <div className="d-flex justify-content-center ">
          <div className="col-12  col-lg-8">
            <div className="card p-4">
              <h2 className="text-center">Create Your Account</h2>
              <div className="px-md-5">
                <Formik initialValues={registrationFormData} validationSchema={validationSchema} onSubmit={submitRegistrationForm}>
                  {() => (
                    <Form>
                      <div className="d-flex py-2 ">
                        <div className="input-group">
                          <Field as="select" name="salutation" className="input-group-field form-control-sm border">
                            <option value="">Select</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                          </Field>
                          <Field type="text" name="name" placeholder="Name" className="input-group-field form-control " />
                        </div>
                      </div>
                      <ErrorMessage name="salutation" component="div" className="error  text-danger" />
                      <ErrorMessage name="name" component="div" className="error" />

                      <div className=" row py-md-2 ">
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="email" name="email" placeholder="Email" className=" form-control" autocomplete="off" />
                          <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="password" name="password" placeholder="Password" className="form-control" autocomplete="off" />
                          <ErrorMessage name="password" component="div" className="error" />
                        </div>
                      </div>

                      <div className="row py-md-2 ">
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="text" name="contact_no" placeholder="Contact Number" className="form-control " />
                          <ErrorMessage name="contact" component="div" className="error" />
                        </div>
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="text" name="gst_number" placeholder="GST Number" className="form-control " />
                          <ErrorMessage name="gstNo" component="div" className="error" />
                        </div>
                      </div>

                      <div className="row py-md-2 ">
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="text" name="state" placeholder="State" className="form-control" />
                          <ErrorMessage name="state" component="div" className="error" />
                        </div>
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="text" name="city" placeholder="City" className="form-control" />
                          <ErrorMessage name="city" component="div" className="error" />
                        </div>
                      </div>

                      <div className="py-2 ">
                        <Field type="text" name="address_line_1" placeholder="Address Line 1" className="form-control" />
                        <ErrorMessage name="addressLine1" component="div" className="error" />
                      </div>

                      <div className="py-2 ">
                        <Field type="text" name="address_line_2" placeholder="Address Line 2" className="form-control" />
                        <ErrorMessage name="addressLine2" component="div" className="error" />
                      </div>

                      <div className="row py-md-2 ">
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field as="select" name="addressType " placeholder="Address Type" className="form-control">
                            <option value="">Select Address Type</option>
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                          </Field>
                          <ErrorMessage name="address_type" component="div" className="error" />
                        </div>
                        <div className="col-12 col-md-6 py-2 py-md-0">
                          <Field type="text" name="pincode" placeholder="Pincode" className="form-control" />
                          <ErrorMessage name="pincode" component="div" className="error" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center py-3">
                        <button type="button" className="btn btn-secondary me-4" onClick={() => resetRegistrationForm()}>
                          Reset
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

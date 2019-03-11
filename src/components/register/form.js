import React from 'react'
import { Formik } from 'formik';
import DropZone from 'react-dropzone';
import classNames from 'classnames';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                profile_image: [],
            },
            imagePreviewUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/24/d1/1a/24d11a70-4409-76a1-3f27-50890f648b2f/AppIcon-2-1x_U007emarketing-85-220-0-9.png/180x180bb.png',
        }
    }

    onDrop(acceptedFiles) {
        acceptedFiles.forEach(file => {
            console.log(acceptedFiles[0])
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsBinaryString = reader.result;
                this.setState({
                    userData: {
                        ...this.state.userData,
                        profile_image: acceptedFiles[0]
                    },
                    imagePreviewUrl: fileAsBinaryString,
                })
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.readAsDataURL(file);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='imageContainer'>
                    <img
                        src={this.state.imagePreviewUrl}
                        alt={this.state.imagePreviewUrl}
                    />
                    <DropZone
                        onDrop={this.onDrop.bind(this)}
                    >
                        {
                            ({
                                getRootProps,
                                getInputProps,
                                isDragActive
                            }) => {
                                return (
                                    <div
                                        {...getRootProps()}
                                        className={classNames(
                                            'dropzone',
                                            { 'dropzone--isActive': isDragActive }
                                        )}
                                    >
                                        <input
                                            {...getInputProps()}
                                        />
                                        {
                                            isDragActive
                                                ? <p>Suelta la imagen</p>
                                                : <p>Arrastra tu imagen de perfil aquí</p>
                                        }
                                    </div>
                                )
                            }

                        }
                    </DropZone>
                </div>
                <div className='formContainer'>
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                        }}
                        validate={values => {
                            let erros = {};
                            if (!values.email) {
                                erros.email = 'Email Requerido'
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                erros.email = 'Email Invalido'
                            }
                            return erros;
                        }}
                        onSubmit={
                            (values, { setSubmitting }) => {
                                this.setState({
                                    userData: {
                                        ...values,
                                        ...this.state.userData
                                    }
                                })
                                this.props.handleSignUp(this.state.userData);
                                setSubmitting(false);
                            }
                        }
                    >
                        {
                            ({
                                values,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                    <form onSubmit={handleSubmit} className="form-register">
                                        <div className="form-group row form-group-register">
                                                <input
                                                    type='text'
                                                    id="inputFirstName"
                                                    name='first_name'
                                                    value={values['first_name']}
                                                    onChange={handleChange}
                                                    className="form-control form-control-sm input-register"
                                                    placeholder="Ingresa tu nombre"
                                                />
                                        </div>
                                        <div className="form-group row form-group-register">
                                                <input
                                                    type='text'
                                                    id="inputLastName"
                                                    name='last_name'
                                                    value={values['last_name']}
                                                    onChange={handleChange}
                                                    className="form-control form-control-sm input-register"
                                                    placeholder="Ingresa tus apellidos"
                                                />
                                        </div>
                                        <div className="form-group row form-group-register">
                                                <input
                                                    type='text'
                                                    id="inputEmail"
                                                    name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className="form-control form-control-sm input-register"
                                                    placeholder="Ingresa un correo"
                                                />
                                                {errors.email}
                                        </div>
                                        <div className="form-group row form-group-register">
                                                <input
                                                    type='password'
                                                    id="inputPassword"
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-sm input-register"
                                                    placeholder="Crea una contraseña"
                                                />
                                        </div>
                                            <button
                                                    type='submit'
                                                    disabled={isSubmitting}
                                                    className="btn btn-outline-"
                                                >
                                                    Registrate
                                            </button>
                                    </form>
                                )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
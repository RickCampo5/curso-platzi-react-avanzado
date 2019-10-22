import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { REGISTER_MUTATION } from '../hoc/registerMutation'
import { LOGIN_MUTATION } from '../hoc/logInMutation'
import { useMutation } from '@apollo/react-hooks'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const [register, { loading: registerLoading, error: registerError }] = useMutation(REGISTER_MUTATION)
  const [login, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_MUTATION)

  const errorRegMsg = registerError && 'El usuario ya existe o hay algún problema.'
  const errorLogMsg = loginError && 'El usuario o contraseña son incorrectos'

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  return (
  // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <UserForm disabled={registerLoading} error={errorRegMsg} title='Registrarse' onSubmit={onSubmitRegister} />
      <UserForm disabled={loginLoading} error={errorLogMsg} title='Iniciar sesión' onSubmit={onSubmitLogin} />
    </Fragment>
  )
}

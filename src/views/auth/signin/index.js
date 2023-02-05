import React from 'react'
import { signInAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormSignIn from '../../../components/portal/auth/signin/index'

const SignIn = () => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await signInAction(form))
  }

  return (
    <>
      <FormSignIn submit={submitForm} />
    </>
  )
}
export default SignIn

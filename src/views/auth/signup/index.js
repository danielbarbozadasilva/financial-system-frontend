import React from 'react'
import { signUpAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormSignUp from '../../../components/portal/auth/signup/index'

const SignUp = () => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await signUpAction(form))
  }

  return (
    <>
      <FormSignUp submit={submitForm} />
    </>
  )
}

export default SignUp

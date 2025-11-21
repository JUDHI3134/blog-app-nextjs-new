import React from 'react'
import Button from '../common/Button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SocialAuth = () => {
  return (
    <div className='flex flex-col gap-2 md:flex-row'>
      <Button type='button' label='Continue with GitHub' outlined icon={FaGithub} onClick={() =>{}} />
      <Button type='button' label='Continue with Google' outlined icon={FaGoogle} onClick={() =>{}} />
    </div>
  )
}

export default SocialAuth

import Agent from '@/components/Agent'
import React from 'react'

export default function Page() {
  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName="You" userId="user1" type="generate" />
    </>
  )
}

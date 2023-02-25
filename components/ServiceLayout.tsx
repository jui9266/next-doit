import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}
const ServiceLayout = function ({ title, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  )
}

export default ServiceLayout

import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const products = () => {
  return (
    <Layout>
      <Link className="btn-primary" href={'/products/newProduct'}>Add new product</Link>
    </Layout>
  )
}

export default products
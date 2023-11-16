import Layout from '@/components/Layout'
import React from 'react'

const newProduct = () => {
  return (
    <Layout>
      <h1 className='text-blue-900 mb-2 text-xl'>New Product</h1>
      <input type="text" placeholder='product name' />
      <textarea placeholder='description'></textarea>
    </Layout>
  )
}

export default newProduct

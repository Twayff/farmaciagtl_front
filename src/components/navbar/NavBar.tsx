import React from 'react'
import logo from '../../assets/logo.jpg'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <div>
            <img src={logo} alt="" className='App-logo' />
            </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Sobre Nós</div>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Login</div>
              <div className='hover:underline'>Contatos</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
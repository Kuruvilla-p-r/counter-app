import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Counter.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
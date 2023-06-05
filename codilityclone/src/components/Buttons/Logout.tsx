import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Logout: React.FC = () => {

    return <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange'>
        <FiLogOut />
    </button>
}
export default Logout;
import { ToastContainer } from 'react-toastify'

import EssentialsIcons from './../../Basic/Icons/Essentials'

import './../../../style.css'

const ToastService = () => (
  <ToastContainer
    className='toast-container'
    draggable
    style={{ width: 'fit-content' }}
    rtl={false}
    theme='dark'
    pauseOnHover
    closeOnClick
    autoClose={3000}
    pauseOnFocusLoss
    newestOnTop={false}
    position='top-right'
    hideProgressBar={false}
    closeButton={<EssentialsIcons.Close size={22} color={'gray'} />}
  />
)

export default ToastService

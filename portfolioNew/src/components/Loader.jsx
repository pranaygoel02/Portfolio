import { CgSpinner } from 'react-icons/cg'

function Loader({loading}) {
  return (
    <CgSpinner className={loading ? 'animateSpin' : ''} />
  )
}

export default Loader;
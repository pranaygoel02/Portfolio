import { useCMDK } from '../cmdk.context';
import Loader from '../../../components/Loader';
import styles from './CMDK.module.css';
import { ImCtrl } from "react-icons/im";

function Search() {
  const { toggleCommandPalette, filteredData } = useCMDK();

  if (filteredData.length === 0)
    return (
      <div className={`btn inline-flex`}>
        <Loader loading={filteredData.length === 0} /> Hang on! Getting the CMDK
        ready
      </div>
    );

  return (
    <div onClick={toggleCommandPalette} className={`flex items-center btn header-btn max-h-[38px]`}>
      <span className='mr-1'>Search</span>
      <span className='key'> <ImCtrl /></span>
      +
      <span className='key'>K</span>
    </div>
  );
}

export default Search;

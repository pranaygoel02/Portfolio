import { memo } from "react";
import styles from "./CMDK.module.css";
import CMDKItem from "./CMDKItem";
import { useNavigate } from "react-router-dom";

function CMDKList({data, closeCommandPalette }) {
  
  const navigate = useNavigate();
  
  function handleClick(e) {
    e.stopPropagation();
    const target = e.target;
    const url = target.dataset.url;
    const obj = data.find(item => item.title === target.title);
    if(url) {
      navigate(url, { replace: false, preventScrollReset: true });
    }
  }

  return (
    <div onClick={handleClick} className={styles.list}>
      {data.length === 0 ? <p>No matches found</p> : data?.map((item, index) => {
        return (
            item?.title && <CMDKItem key={index} {...item} index={index + 1} toggleMenu={closeCommandPalette} />
          )
        }
      )}
    </div>
  )
}

export default memo(CMDKList)
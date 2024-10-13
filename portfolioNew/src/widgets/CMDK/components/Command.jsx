function Command({cmd, onClick, children, className}) {
  return (
    <button onClick={onClick} className={`key ${className}`}>{cmd?.icon} {cmd?.key || cmd?.name}</button>
  )
}

export default Command
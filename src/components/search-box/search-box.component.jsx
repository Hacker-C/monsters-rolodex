import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input className={className} placeholder={placeholder} onChange={onChangeHandler} />
)

export default SearchBox

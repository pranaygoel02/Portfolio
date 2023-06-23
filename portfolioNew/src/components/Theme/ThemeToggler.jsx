import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from '../../context/themeContext'

export default function ThemeToggler () {
    const {theme, toggleTheme} = useTheme()
    return (
        <button onClick={toggleTheme} className='text-xl'>{theme ? <MdDarkMode/> : <MdLightMode/>}</button>
    )
}
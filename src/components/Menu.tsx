import MenuItem from './MenuItem';
import { CONTENT_INFO } from '../content';
const Menu = ({ setMenuName }:any) => {
    return <section className="aside-menu">
        <button onClick={() => {
            setMenuName('Island')
        }}>Island</button>
        <button onClick={() => {
            setMenuName('Spring')
        }}>Spring</button>
        <button onClick={() => {
            setMenuName('Summer')
        }}>Summer</button>
        <button onClick={() => {
            setMenuName('Autumn')
        }}>Autumn</button>
        <button onClick={() => {
            setMenuName('Winter')
        }}>Winter</button>
    </section >
}
export default Menu
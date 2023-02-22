const MenuItem = ({ menuName,setMenuName }:{ menuName: any;
    setMenuName: any;}) => {
    return
    <button onClick={() => {
        setMenuName(menuName)
    }}>{menuName}</button>

}
export default MenuItem
const DropdownMenu = ({
    heroTypes
}) => {
    return (
        <>
            <label htmlFor={heroTypes[0]}>{heroTypes[0]}</label>
            <select name={heroTypes[0]} id={heroTypes[0]} >
                <option value={heroTypes[1]}>{heroTypes[1]}</option>
                <option value={heroTypes[2]}>{heroTypes[2]}</option>
                <option value={heroTypes[3]}>{heroTypes[3]}</option>
            </select>
        </>
    );
};

export default DropdownMenu;
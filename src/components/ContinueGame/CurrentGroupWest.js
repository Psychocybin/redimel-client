export default function CurrentGroupWest({
    currentGroupName, onShowGroupWestHandler
}) {
    return (
        <div>
            <button onClick={(e) => onShowGroupWestHandler(e)}>{<h3>{currentGroupName}</h3>}</button>
        </div>
    );
}
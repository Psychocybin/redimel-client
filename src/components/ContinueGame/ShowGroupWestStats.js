export default function ShowGroupWestStats({
    groupWest
}) {

    return (
        <div className="show-stats">
            <p>time counter - {groupWest.timeCounter}</p>
            <p>cover - {groupWest.cover}</p>
            <p>important information - {groupWest.importantInformation}</p>
            <p>morals - {groupWest.morals}</p>
            <p>slain monsters - {groupWest.slainMonsters}</p>
            <p>team game - {groupWest.teamGame}</p>
            <p>temporary points - {groupWest.temporaryPoints}</p>
            <p>actual mission - {groupWest.actualMission !== "" ? groupWest.actualMission : "None"}</p>
            <h4>missions</h4>
            {groupWest.missions.map(x =>
                <p key={x.id}>{x.name} - {x.isItDone ? "Complite" : "Active"}</p>
            )}
            <h4>battle groups (number of people)</h4>
            {groupWest.battleGroups.map(x =>
                <p key={x.id}>{x.name} - {x.countPeople}</p>
            )}
            <h4>negotiations</h4>
            {groupWest.negotiations.map(x =>
                <p key={x.id}>- {x.name}</p>
            )}
        </div>
    );
}
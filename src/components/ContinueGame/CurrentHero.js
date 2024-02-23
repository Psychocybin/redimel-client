export default function CurrentHero({
    heroStats, heroId, onShowHeroHandler
}) {
    return (
        <div>
            <button onClick={(event) => onShowHeroHandler(heroId, event)}>{<h3>{heroStats.name}</h3>}</button>
        </div>
    );
}
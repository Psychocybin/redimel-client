import { getHeroType } from "../../services/AuxiliaryService";

export default function CurrentHero({
    heroType, heroId, onShowHeroHandler
}) {
    heroType = getHeroType(heroType);

    return (
        <div>
            <button onClick={(event) => onShowHeroHandler(heroId, event)}>{<h3>{heroType}</h3>}</button>
        </div>
    );
}
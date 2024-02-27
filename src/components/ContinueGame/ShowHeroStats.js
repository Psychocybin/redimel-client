export default function ShowHeroStats({
    hero, heroBattlePoints
}) {

    // console.log(hero);
    // console.log(heroBattlePoints);

    return (
        <div className="show-stats">
            {hero.name}
        </div>
    );
}
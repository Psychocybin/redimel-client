export default function ShowHeroStats({
    hero, heroBattlePoints
}) {

    console.log(hero);
    // console.log(heroBattlePoints);

    return (
        <div>
            {hero.name}
        </div>
    );
}
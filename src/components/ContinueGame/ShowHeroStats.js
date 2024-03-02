import { getHeroType, getHeroClass, getArmorType, getShieldType, getThrowingWeaponType, getWeaponType, getTalismanType } from "../../services/AuxiliaryService";

export default function ShowHeroStats({
    hero, heroBattlePoints
}) {
    return (
        <div className="show-stats">
            <p>name - {hero.name}</p>
            <p>hero type - {getHeroType(hero.heroType)}</p>
            <p>hero class - {getHeroClass(hero.heroClass)}</p>
            <p>baggage capacity - {hero.baggageCapacity}</p>
            <p>order of battle - {hero.orderOfBattle}</p>
            <h4>battle points</h4>
            <p>attack with hand to hand weapon - {heroBattlePoints.attackWithHandToHandWeapon}</p>
            <p>attack with ranged weapon - {heroBattlePoints.attackWithRangedWeapon}</p>
            <p>damage with hand to hand weapon - {heroBattlePoints.damageWithHandToHandWeapon}</p>
            <p>damage with ranged weapon - {heroBattlePoints.damageWithRangedWeapon}</p>
            <p>defence with hand to hand weapon - {heroBattlePoints.defenceWithHandToHandWeapon}</p>
            <p>defence with ranged weapon - {heroBattlePoints.defenceWithRangedWeapon}</p>
            <p>defence against ranged weapon - {heroBattlePoints.defenceAgainstRangedWeapon}</p>
            <p>defence armor - {heroBattlePoints.defenceArmor}</p>
            <p>defence shield - {heroBattlePoints.defenceShield}</p>
            <h4>indicators</h4>
            <p>health - {hero.indicators.health}</p>
            <p>mental energy - {hero.indicators.mentalEnergy}</p>
            <p>mental strength - {hero.indicators.mentalStrength}</p>
            <p>strength - {hero.indicators.strength}</p>
            <p>dexterity - {hero.indicators.dexterity}</p>
            <p>agility - {hero.indicators.agility}</p>
            <p>evasion - {hero.indicators.evasion}</p>
            <p>endurance - {hero.indicators.endurance}</p>
            <h4>abilities</h4>
            {Object.entries(hero.ability).map(([key, value], x) =>
                <div key={x}>
                    {value === true && <p>{key}</p>}
                </div>
            )}
            <h4>equipments</h4>
            <p>money bag - {hero.equipments.moneyBag}</p>
            <p>medic pack - {hero.equipments.medicPack ? "Yes" : "No"}</p>
            <p>knife - {hero.equipments.knife ? "Yes" : "No"}</p>
            <p>poison - {hero.equipments.poison ? "Yes" : "No"}</p>
            <p>smoke ball - {hero.equipments.smokeBall ? "Yes" : "No"}</p>
            <h4>baggages (volume)</h4>
            {hero.baggages.length > 0
                ? hero.baggages.map(x =>
                    <div key={x.id}>
                        <p>{x.name} ({x.volume})</p>
                    </div>)
                : "None"
            }
            <h4>weapon</h4>
            {hero.equipments.weapon.isExist
                ? <>
                    <p>type - {getWeaponType(hero.equipments.weapon.weaponType)}</p>
                    <p>range - {hero.equipments.weapon.weaponRange}</p>
                    <p>attack - {hero.equipments.weapon.attack}</p>
                    <p>defence - {hero.equipments.weapon.defence}</p>
                    <p>damage - {hero.equipments.weapon.damage}</p>
                    <p>two hand - {hero.equipments.weapon.isItTwoHandWeapon ? "Yes" : "No"}</p>
                </>
                : "None"
            }
            <h4>throwing weapon</h4>
            {hero.equipments.throwingWeapon.isExist
                ? <>
                    <p>type - {getThrowingWeaponType(hero.equipments.throwingWeapon.throwingWeaponType)}</p>
                    <p>range - {hero.equipments.throwingWeapon.throwingWeaponRange}</p>
                    <p>attack - {hero.equipments.throwingWeapon.attack}</p>
                    <p>defence - {hero.equipments.throwingWeapon.defence}</p>
                    <p>damage - {hero.equipments.throwingWeapon.damage}</p>
                    <p>quantity - {hero.equipments.throwingWeapon.quantity}</p>
                </>
                : "None"
            }
            <h4>armor</h4>
            {hero.equipments.armor.isExist
                ? <>
                    <p>type - {getArmorType(hero.equipments.armor.armorType)}</p>
                    <p>defence - {hero.equipments.armor.defence}</p>
                </>
                : "None"
            }
            <h4>shield</h4>
            {hero.equipments.shield.isExist
                ? <>
                    <p>type - {getShieldType(hero.equipments.shield.shieldType)}</p>
                    <p>defence - {hero.equipments.shield.defence}</p>
                </>
                : "None"
            }
            <h4>talismans</h4>
            {hero.equipments.talismans.length > 0
                ? hero.equipments.talismans.map(x =>
                    <div key={x.id}>
                        <p>{hero.equipments.talismans.name}</p>
                        <p>- type - {getTalismanType(hero.equipments.talismans.talismansType)}</p>
                        <p>- {hero.equipments.talismans.bonusIndicator} + {hero.equipments.talismans.bonusPoints}</p>
                    </div>)
                : "None"
            }
            <h4>special combat skill</h4>
            <p>required mental energy - {hero.specialAbility.specialCombatSkill.requiredMentalEnergy}</p>
            <p>skill level - {hero.specialAbility.specialCombatSkill.skillLevel}</p>
            <h4>ultimate</h4>
            <p>required mental energy - {hero.specialAbility.ultimate.requiredMentalEnergy}</p>
            <p>skill level - {hero.specialAbility.ultimate.skillLevel}</p>
            <h4>nature skills</h4>
            {hero.specialAbility.natureSkills.length > 0
                ? hero.specialAbility.natureSkills.map(x =>
                    <div key={x.id}>
                        <p>{x.name}</p>
                        <p>- required mental energy - {x.requiredMentalEnergy}</p>
                        <p>- skill level - {x.skillLevel}</p>
                    </div>)
                : "None"
            }
            <h4>spells</h4>
            {hero.specialAbility.spells.length > 0
                ? hero.specialAbility.spells.map(x =>
                    <div key={x.id}>
                        <p>{x.name}</p>
                        <p>- required mental energy - {x.requiredMentalEnergy}</p>
                        <p>- skill level - {x.skillLevel}</p>
                    </div>)
                : "None"
            }
            <h4>rituals</h4>
            {hero.specialAbility.rituals.length > 0
                ? hero.specialAbility.rituals.map(x =>
                    <div key={x.id}>
                        <p>{x.name}</p>
                        <p>- required mental energy - {x.requiredMentalEnergy}</p>
                        <p>- skill level - {x.skillLevel}</p>
                    </div>)
                : "None"
            }
            <h4>promises</h4>
            {hero.promises.length > 0
                ? hero.promises.map(x =>
                    <div key={x.id}>
                        <p>{x.name} - {x.IsItDone ? "fulfilled" : "unfulfilled"}</p>
                    </div>)
                : "None"
            }
        </div>
    );
}
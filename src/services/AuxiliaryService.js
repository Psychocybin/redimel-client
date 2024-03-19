export function getHeroType(heroType) {
    switch (heroType) {
        case 1:
            heroType = "Warrior";
            break;
        case 2:
            heroType = "Fighter";
            break;
        case 3:
            heroType = "Defender";
            break;
        case 4:
            heroType = "Helper";
            break;
        case 5:
            heroType = "Mystic";
            break;

        default:
            break;
    }

    return heroType;
}

export function getHeroClass(heroClass) {
    switch (heroClass) {
        case 1:
            heroClass = "Soldier";
            break;
        case 2:
            heroClass = "Mercenary";
            break;
        case 3:
            heroClass = "Gladiator";
            break;
        case 4:
            heroClass = "Hunter";
            break;
        case 5:
            heroClass = "Pirate";
            break;
        case 6:
            heroClass = "Savage";
            break;
        case 7:
            heroClass = "Monster Slayer";
            break;
        case 8:
            heroClass = "Knight";
            break;
        case 9:
            heroClass = "Robber";
            break;
        case 10:
            heroClass = "Acrobat";
            break;
        case 11:
            heroClass = "Thief";
            break;
        case 12:
            heroClass = "Merchant";
            break;
        case 13:
            heroClass = "Missionary";
            break;
        case 14:
            heroClass = "Magician";
            break;
        case 15:
            heroClass = "Librarian";
            break;

        default:
            break;
    }

    return heroClass;
}

export function getArmorType(armorType) {
    switch (armorType) {
        case 1:
            armorType = "Fabric"
            break;
        case 3:
            armorType = "Leather"
            break;
        case 5:
            armorType = "Wood"
            break;
        case 7:
            armorType = "Iron Breastplate"
            break;
        case 9:
            armorType = "Chain Mail"
            break;
        case 11:
            armorType = "Full Plate"
            break;

        default:
            break;
    }

    return armorType;
}

export function getShieldType(shieldType) {
    switch (shieldType) {
        case 2:
            shieldType = "Buckler"
            break;
        case 4:
            shieldType = "Round"
            break;
        case 6:
            shieldType = "Heater"
            break;
        case 8:
            shieldType = "Kite"
            break;
        case 10:
            shieldType = "Pavise"
            break;

        default:
            break;
    }

    return shieldType;
}

export function getThrowingWeaponType(throwingWeapon) {
    switch (throwingWeapon) {
        case 2:
            throwingWeapon = "Poisonous Needles"
            break;
        case 3:
            throwingWeapon = "Knives"
            break;
        case 4:
            throwingWeapon = "Short Bow"
            break;

        default:
            break;
    }

    return throwingWeapon;
}

export function getWeaponType(weaponType) {
    switch (weaponType) {
        case 7:
            weaponType = "Scepter";
            break;
        case 8:
            weaponType = "Dagger";
            break;
        case 9:
            weaponType = "War Club";
            break;
        case 10:
            weaponType = "Short Sword";
            break;
        case 11:
            weaponType = "Battle Chain";
            break;
        case 12:
            weaponType = "Rapier";
            break;
        case 13:
            weaponType = "Battle Sickle";
            break;
        case 14:
            weaponType = "Short Spear";
            break;
        case 15:
            weaponType = "Saber";
            break;
        case 16:
            weaponType = "War Hammer";
            break;
        case 17:
            weaponType = "Two Swords";
            break;
        case 18:
            weaponType = "Axe";
            break;
        case 19:
            weaponType = "Mace";
            break;
        case 20:
            weaponType = "Long Sword";
            break;
        case 25:
            weaponType = "Two Hand Sword";
            break;

        default:
            break;
    }

    return weaponType;
}

export function getTalismanType(talismanType) {
    switch (talismanType) {
        case 1:
            talismanType = "Ring"
            break;
        case 2:
            talismanType = "Brooch"
            break;
        case 3:
            talismanType = "Pendant"
            break;
        case 4:
            talismanType = "Amulet"
            break;
        case 5:
            talismanType = "Implant"
            break;

        default:
            break;
    }

    return talismanType;
}

export function convertStringToArray(text) {
    let result = text.split("@");

    return result;
}   
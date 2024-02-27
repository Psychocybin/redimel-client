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
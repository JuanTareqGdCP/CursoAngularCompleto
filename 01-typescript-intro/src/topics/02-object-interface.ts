const skills: string[] = ['Bash','Counter','Heal']

interface Personaje {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const strider: Personaje = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
}

strider.homeTown = 'Rivendell';

console.table(strider)




export{};
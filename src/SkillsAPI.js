const SkillsAPI = {
    skills: [
        { num: 0, name: "React", confidence: 8},
        { num: 1, name: "CSS", confidence: 9},
        { num: 2, name: "Javascript", confidence: 7}
    ],
    all: () => { return this.skills },
    get: (id) => {
        const isSkill = p => p.num === id;
        return this.skills.find(isSkill);
    },
    random: () => {return this.skills[Math.random(skills.length-1)]} 
}
global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: "", level: "" };

    const role = [
      { name: "Renacuajo", level: 0 },
      { name: "Larva de langosta", level: 5 }, //»»————⍟——««\n
      { name: "Aprendiz de pulpo", level: 10 },
      { name: "Aprendiz de sirena", level: 15 },
      { name: "🐬 Diplomático de delfines", level: 20 },
      { name: "🥷 Domador de serpientes marinas", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: "⚔ Cazador de krakens", level: 30 },
      { name: "👑 rey del mar", level: 35 },
      { name: "El protegido de Neptuno", level: 40 },
      { name: "🐍 Embajador abisal", level: 45 },
      { name: "👹 guardián del abismo", level: 50 },
      { name: "🧙‍♂️ Salvia de aguas profundas", level: 60 },
      { name: "🧝‍♂️ Maestro de la Atlántida", level: 70 },
      { name: "🐲 Leviatán legendario", level: 80 },
      { name: "🔮 Señor supremo del océano 🔮", level: 90 },
      { name: "🔱 Emperador de los Siete Mares 🔱", level: 100 },
    ];

    return role.reverse().find((role) => level >= role.level);
  },
};

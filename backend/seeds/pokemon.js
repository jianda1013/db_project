const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon', 'user_pokemon']).then(() => {
        return deleteTable(knex, ['pokemon']).then(() => {
            return knex("pokemon").insert([
                {
                    id: 1,
                    name: "Bulbasaur",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 2,
                    name: "Ivysaur",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 3,
                    name: "Venusaur",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 4,
                    name: "Charmander",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 5,
                    name: "Charmeleon",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 6,
                    name: "Charizard",
                    type1: "Fire",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 7,
                    name: "Squirtle",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 8,
                    name: "Wartortle",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 9,
                    name: "Blastoise",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 10,
                    name: "Caterpie",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 11,
                    name: "Metapod",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 12,
                    name: "Butterfree",
                    type1: "Bug",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 13,
                    name: "Weedle",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 14,
                    name: "Kakuna",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 15,
                    name: "Beedrill",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 16,
                    name: "Pidgey",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 17,
                    name: "Pidgeotto",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 18,
                    name: "Pidgeot",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 19,
                    name: "Rattata",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 20,
                    name: "Raticate",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 21,
                    name: "Spearow",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 22,
                    name: "Fearow",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 23,
                    name: "Ekans",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 24,
                    name: "Arbok",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 25,
                    name: "Pikachu",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 26,
                    name: "Raichu",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 27,
                    name: "Sandshrew",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 28,
                    name: "Sandslash",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 29,
                    name: "Nidoran?€",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 30,
                    name: "Nidorina",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 31,
                    name: "Nidoqueen",
                    type1: "Poison",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 32,
                    name: "Nidoran",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 33,
                    name: "Nidorino",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 34,
                    name: "Nidoking",
                    type1: "Poison",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 35,
                    name: "Clefairy",
                    type1: "Fairy",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 36,
                    name: "Clefable",
                    type1: "Fairy",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 37,
                    name: "Vulpix",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 38,
                    name: "Ninetales",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 39,
                    name: "Jigglypuff",
                    type1: "Normal",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 40,
                    name: "Wigglytuff",
                    type1: "Normal",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 41,
                    name: "Zubat",
                    type1: "Poison",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 42,
                    name: "Golbat",
                    type1: "Poison",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 43,
                    name: "Oddish",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 44,
                    name: "Gloom",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 45,
                    name: "Vileplume",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 46,
                    name: "Paras",
                    type1: "Bug",
                    type2: "Grass",
                    legendary: 0
                },
                {
                    id: 47,
                    name: "Parasect",
                    type1: "Bug",
                    type2: "Grass",
                    legendary: 0
                },
                {
                    id: 48,
                    name: "Venonat",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 49,
                    name: "Venomoth",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 50,
                    name: "Diglett",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 51,
                    name: "Dugtrio",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 52,
                    name: "Meowth",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 53,
                    name: "Persian",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 54,
                    name: "Psyduck",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 55,
                    name: "Golduck",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 56,
                    name: "Mankey",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 57,
                    name: "Primeape",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 58,
                    name: "Growlithe",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 59,
                    name: "Arcanine",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 60,
                    name: "Poliwag",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 61,
                    name: "Poliwhirl",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 62,
                    name: "Poliwrath",
                    type1: "Water",
                    type2: "Fighting",
                    legendary: 0
                },
                {
                    id: 63,
                    name: "Abra",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 64,
                    name: "Kadabra",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 65,
                    name: "Alakazam",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 66,
                    name: "Machop",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 67,
                    name: "Machoke",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 68,
                    name: "Machamp",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 69,
                    name: "Bellsprout",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 70,
                    name: "Weepinbell",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 71,
                    name: "Victreebel",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 72,
                    name: "Tentacool",
                    type1: "Water",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 73,
                    name: "Tentacruel",
                    type1: "Water",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 74,
                    name: "Geodude",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 75,
                    name: "Graveler",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 76,
                    name: "Golem",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 77,
                    name: "Ponyta",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 78,
                    name: "Rapidash",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 79,
                    name: "Slowpoke",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 80,
                    name: "Slowbro",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 81,
                    name: "Magnemite",
                    type1: "Electric",
                    type2: "Steel",
                    legendary: 0
                },
                {
                    id: 82,
                    name: "Magneton",
                    type1: "Electric",
                    type2: "Steel",
                    legendary: 0
                },
                {
                    id: 83,
                    name: "Farfetch'd",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 84,
                    name: "Doduo",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 85,
                    name: "Dodrio",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 86,
                    name: "Seel",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 87,
                    name: "Dewgong",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 88,
                    name: "Grimer",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 89,
                    name: "Muk",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 90,
                    name: "Shellder",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 91,
                    name: "Cloyster",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 92,
                    name: "Gastly",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 93,
                    name: "Haunter",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 94,
                    name: "Gengar",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 95,
                    name: "Onix",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 96,
                    name: "Drowzee",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 97,
                    name: "Hypno",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 98,
                    name: "Krabby",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 99,
                    name: "Kingler",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 100,
                    name: "Voltorb",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 101,
                    name: "Electrode",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 102,
                    name: "Exeggcute",
                    type1: "Grass",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 103,
                    name: "Exeggutor",
                    type1: "Grass",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 104,
                    name: "Cubone",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 105,
                    name: "Marowak",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 106,
                    name: "Hitmonlee",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 107,
                    name: "Hitmonchan",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 108,
                    name: "Lickitung",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 109,
                    name: "Koffing",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 110,
                    name: "Weezing",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 111,
                    name: "Rhyhorn",
                    type1: "Ground",
                    type2: "Rock",
                    legendary: 0
                },
                {
                    id: 112,
                    name: "Rhydon",
                    type1: "Ground",
                    type2: "Rock",
                    legendary: 0
                },
                {
                    id: 113,
                    name: "Chansey",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 114,
                    name: "Tangela",
                    type1: "Grass",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 115,
                    name: "Kangaskhan",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 116,
                    name: "Horsea",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 117,
                    name: "Seadra",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 118,
                    name: "Goldeen",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 119,
                    name: "Seaking",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 120,
                    name: "Staryu",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 121,
                    name: "Starmie",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 122,
                    name: "Mr. Mime",
                    type1: "Psychic",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 123,
                    name: "Scyther",
                    type1: "Bug",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 124,
                    name: "Jynx",
                    type1: "Ice",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 125,
                    name: "Electabuzz",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 126,
                    name: "Magmar",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 127,
                    name: "Pinsir",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 128,
                    name: "Tauros",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 129,
                    name: "Magikarp",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 130,
                    name: "Gyarados",
                    type1: "Water",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 131,
                    name: "Lapras",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 132,
                    name: "Ditto",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 133,
                    name: "Eevee",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 134,
                    name: "Vaporeon",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 135,
                    name: "Jolteon",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 136,
                    name: "Flareon",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 137,
                    name: "Porygon",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 138,
                    name: "Omanyte",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 139,
                    name: "Omastar",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 140,
                    name: "Kabuto",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 141,
                    name: "Kabutops",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 142,
                    name: "Aerodactyl",
                    type1: "Rock",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 143,
                    name: "Snorlax",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 144,
                    name: "Articuno",
                    type1: "Ice",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 145,
                    name: "Zapdos",
                    type1: "Electric",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 146,
                    name: "Moltres",
                    type1: "Fire",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 147,
                    name: "Dratini",
                    type1: "Dragon",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 148,
                    name: "Dragonair",
                    type1: "Dragon",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 149,
                    name: "Dragonite",
                    type1: "Dragon",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 150,
                    name: "Mewtwo",
                    type1: "Psychic",
                    type2: null,
                    legendary: 1
                },
                {
                    id: 151,
                    name: "Mew",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                }
            ])

        })
    })
};
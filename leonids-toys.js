// ID, Name, inStock, price, AgeRec

const toys =[
    {
        id: 1,
        name: "Jenga",
        description: "Block Stacking Game",
        category: "blocks",
        inStock: true,
        price: 12.99,
        ageRecommendation: "Ages 6 & above"
    },
    {
        id: 2,
        name: "Monopoly",
        description: "Property Trading Board Game",
        category: "board game",
        inStock: false,
        price: 24.99,
        ageRecommendation: "Ages 8 & above"
    },
    {
        id: 3,
        name: "Uno",
        description: "Classic Card Game",
        category: "card game",
        inStock: true,
        price: 5.99,
        ageRecommendation: "Ages 7 & above"
    }
]
// Append New Toys

const puzzle =
    {
        id: 4,
        name: "StarWars Puzzle 1000pc",
        description: "Classic Jigsaw Puzzle",
        category: "puzzle",
        inStock: true,
        price: 10.99,
        ageRecommendation: "Ages 12 & above"
    }
    const electronic =
    {
        id: 5,
        name: "Simon Game",
        description: "Game of Lights and Sounds",
        category: "electronic",
        inStock: false,
        price: 19.99,
        ageRecommendation: "Ages 5 & above"
    }

toys.push(puzzle, electronic);
for (const toy of toys) {
    console.log(`${toy.name} is a ${toy.category} game that costs ${toy.price} and is recommended for ${toy.ageRecommendation}`)
} 
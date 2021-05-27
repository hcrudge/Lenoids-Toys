// ID, Name, inStock, price, AgeRec

const toys =[
    {
        id: 1,
        name: "Jenga",
        description: "Block Stacking Game",
        category: "Blocks",
        inStock: true,
        price: 12.99,
        ageRecommendation: "Ages 6 & Above"
    },
    {
        id: 2,
        name: "Monopoly",
        description: "Property Trading Board Game",
        category: "Board Game",
        inStock: false,
        price: 24.99,
        ageRecommendation: "Ages 8 & Above"
    },
    {
        id: 3,
        name: "Uno",
        description: "Classic Card Game",
        category: "Card Game",
        inStock: true,
        price: 5.99,
        ageRecommendation: "Ages 7 & Above"
    }
]
// Append New Toys

const puzzle =
    {
        id: 4,
        name: "StarWars Puzzle 1000pc",
        description: "Classic Jigsaw Puzzle",
        category: "Puzzle",
        inStock: true,
        price: 10.99,
        ageRecommendation: "Ages 12 & Above"
    }
    const electronic =
    {
        id: 5,
        name: "Simon Game",
        description: "Game of Lights and Sounds",
        category: "Electronic",
        inStock: false,
        price: 19.99,
        ageRecommendation: "Ages 5 & Above"
    }

toys.push(puzzle, electronic);
for (const toy of toys) {
    console.log(toy.name)
} 
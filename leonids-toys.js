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
for(const toy of toys) {
    console.log(toy.name);
}
// console.log(toys);
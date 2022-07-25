import { v4 as uuidv4 } from "uuid";

export const listoftodos = [
    {
        name: 'Magnus Carlson', 
        country: 'Norway', 
        worldChampion: 'Yes', 
        rating: '2864', 
        rank: '1', 
        _id: uuidv4() 
    },
    {
        name: 'Viswanathan Anand', 
        country: 'India', 
        worldChampion: 'Yes', 
        rating: '2756', 
        rank: '13', 
        _id: uuidv4()
    },
    {
        name: 'Ding Liren', 
        country: 'China', 
        worldChampion: 'No', 
        rating: '2804', 
        rank: '2', 
        _id: uuidv4()
    },
    {
        name: 'Farbiano Caruana', 
        country: 'USA', 
        worldChampion: 'No', 
        rating: '2781', 
        rank: '5', 
        _id: uuidv4()
    }
];
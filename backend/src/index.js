const express = require('express');
const app = express();
const port = 8080;


const data = [
    { id: 1, name: "Five Nights at Freddy's (2023)", description: "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems." },
    { id: 2, name: "The Hunger Games: The Ballad of Songbirds & Snakes (2023) ", description: "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12." },
    { id: 3, name: " The Marvels (2023)", description: "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe." },
];


app.get('/', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`);
});
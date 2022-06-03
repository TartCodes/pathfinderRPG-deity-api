//Pathfinder Lore API -> enter information about a region, hero, baddies etc, and read about them

const express = require('express') //tell server to use express
const app = express() //asign express for readability
const PORT = 8000

const deities = {    
    
    'abadar': {
        'titles': 'Master of the First Vault, Judge of the Gods, The Gold-Fisted',
        'summary': "Abadar (pronounced AH-bah-dar) is known to be a patient deity. Maintaining a strong neutral stance in his actions, he sets forth to further expand civilization and order in the world and among the peoples of Golarion.",
        'alignment': 'Lawful Neutral',
        'worshipers': 'Judges, merchants, lawyers, aristocrats',
        'domains': 'Earth, Law, Nobility, Protection, Travel',
         'favored weapon': 'Light Crossbow'
    },

    'iomedae': {
        'titles': 'The Inheritor, Light of the Sword',
        'summary': 'Iomedae (pronounced ahy-OH-meh-day) is the goddess of righteous valor, justice, and honor. Having served as Aroden\'s herald, she inherited many of the Last Azlanti\'s followers upon his disappearance, and continues to espouse the ideas of honor and righteousness in the defense of good and the battle against evil.', 
        'alignment':"Lawful Good",
        'worshipers': 'Paladins, knights, warriors',
        'domains': 'glory, good, law, sun, war',
        'favored weapon': 'longsword'
    }

    
}


//get main route, main route is always / 
app.get('/', (req, res) => {
    //tell server to go into current directory and grab input ex. index.html
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:input', (req, res) => {
    const dietyInfo = req.params.input.toLocaleLowerCase()
    if(deities[deityInfo]){
        res.json(deity[deityInfo])
    } else {
        res.json('Input not found: enter a different name/location/diety')
    }
    res.json(lore)
})

app.listen(PORT , () => {
    console.log(`There server is now running on port ${PORT}`);
})
//Pathfinder Lore API -> enter information about a region, hero, baddies etc, and read about them

const express = require('express') //tell server to use express
const app = express() //asign express for readability
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use( express.static('./')) //finds main.js when in subfolder

class Deity {    
    constructor(name, summary, titles, alignment, worshipers, domains, domains2e, favoredWeapon) {
        this.name = name
        this.summary = summary
        this.titles = titles
        this.alignment = alignment
        this.worshipers = worshipers
        this.domains = domains
        this.domains2e = domains2e
        this.favoredWeapon = favoredWeapon
    }
}

// class Deity {
//     constructor() {
//     this.obj = arguments 
//     }
// }

const newObj = {

    'unknown' : new Deity ('Input not found: enter a different name/location/diety'), 

    'abadar' : new Deity ( 'Abadar',
                           'Abadar (pronounced AH-bah-dar) is known to be a patient deity. Maintaining a strong neutral stance in his actions, he sets forth to further expand civilization and order in the world and among the peoples of Golarion.',
                           `Master of the First Vault, Judge of the Gods, The Gold-Fisted`,
                           'Lawful Neutral',
                           'Judges, merchants, lawyers, aristocrats',
                           'Earth, Law, Nobility, Protection, Travel',
                           `Cities, earth, travel, wealth`,
                           'Light Crossbow'

    ),
    'asmodeus' : new Deity ( 'Asmodeus', 
                             `Asmodeus (pronounced as-MO-day-us) is the most powerful of the nine archdevils that inhabit Hell and the only one of Hell's rulers to claim full divinity. It is he who is credited with the penning of the contract of creation, within which his followers believe is hidden the means for their patron's eventual rise to supremacy.`,
                             `Prince of Darkness`,
                             `Lawful evil`,
                             `Slavers, bureaucrats, tyrants`,
                             `Evil, Fire, Law, Magic, Trickery`,
                             `N/A`,
                             `Mace`

    ),
    'calistria' : new Deity ( 'Calistria', 
                              `Calistria (pronounced kah-LISS-tree-ah) is a goddess of many faces and guises, including lust and revenge. She is held in especially high regard by elves, who often identify her moods and attitude with that of their people. A fondness of wasps has earned this vengeful deity the title the Savored Sting; such creatures live on after harming their enemies, a trait to be emulated should one seek to inflict pain on another.`,
                              `The Savored Sting, The Lady in the Room, The Unquenchable Fire`,
                              `Chaotic neutral`,
                              `No worshippers listed`,
                              `Chaos, Charm, Knowledge, Luck, Trickery`,
                              `Pain, passion, secrecy, trickery`,
                              `Whip`
    ),
    'caydencailean' : new Deity ( 'Cayden Cailean', 
                                  `Cayden Cailean (pronounced KAY-den KAY-lee-en) is a chaotic good deity, also known as the "Lucky Drunk", "Drunken Hero", or the "Accidental God"`,
                                  `The Savored Sting, The Lady in the Room, The Unquenchable Fire`,
                                  `Chaotic good`,
                                  `Brewers, vintners, barkeeps, innkeepers, good adventurers`,
                                  `Chaos, Charm, Good, Strength, Travel`,
                                  `N/A`,
                                  `Rapier`
    ),
    'daikitsu' : new Deity ( 'Daikitsu', 
                                  `It is not surprising that the Tian Xia goddess Daikitsu is a common object of veneration, given that she has the everyday subjects of rice, agriculture, and craftsmanship under her divine purview. Her holy symbol is that of a nine-tailed fox.`,
                                  `Lady of Foxes`,
                                  `Neutral`,
                                  `Kitsune`,
                                  `Animal, Artifice, Community, Plant, Weather`,
                                  `Change, creation, family, nature`,
                                  `Flail`
    ),
    'desna' : new Deity ( 'Desna', 
                          `Desna (pronounced DEZ-nuh) was one of the first deities, but while her peers burdened themselves with the task of creating Golarion she spent her time building the heavens. She's changed little since those earlier days, and she and her followers delight in exploring the world.`,
                          `Old Deadeye`,
                          `Lawful good`,
                          `Farmers, hunters, tradesmen`,
                          `Chaos, Good, Liberation, Luck, Travel`,
                          `N/A`,
                          `Starknife`
    ),
    'erastil' : new Deity ( 'Erastil', 
                            `Erastil (pronounced eh-RAS-til) is one of the oldest gods still worshiped in Avistan. His religion dates back to before the Age of Darkness when small farming communities and hunter-gatherers prayed to him for bountiful harvests and successful hunts. He is a god of the hunt and of farming, leading his followers by example and good deeds rather than flowery rhetoric.`,
                            `The Song of the Spheres, The Great Dreamer, Starsong, The Tender of Dreams`,
                            `Chaotic good`,
                            `Travelers, Astronomers, Gamblers, Varisians, Musicians`,
                            `Chaos, Good, Liberation, Luck, Travel`,
                            `N/A`,
                            `Starknife`
    ),
    // 'fumeiyoshi' : new Deity ( 'Fumeiyoshi', 
    //                        `Fumeiyoshi is a Tian Xia deity most often associated with the undead and graves, although he is also the patron deity of the evil oni.`,
    //                        `Lord of Envy`,
    //                        `Neutral Evil`,
    //                        `Oni, Undead`,
    //                        `Death, Destruction, Evil, Repose, War`,
    //                        `Ambition, Destruction, Earth, Undeath`,
    //                        `Naginata`    
    // ),
    // 'generalsusumu' : new Deity ( 'General Susumu', 
    //                               `General Susumu, also known as the Black Daimyo, is the Tian Xia patron deity of samurai who are interested more in glory and battle than honor and heroism. He is the brother of Shizuru, and the two seldom see eye to eye. His unholy symbol is a black winged horse, and he is worshiped primarily in Chu Ye, Hongal, Kaoling, Minkai, Shokuro, and Xa Hoi.`,
    //                               `The Black Daimyo`,
    //                               `Lawful Evil`,
    //                               `No worshippers listed`,
    //                               `Evil, Glory, Law, Nobility, War`,
    //                               `N/A`,
    //                               `Longbow`    
    // ),
    'gorum' : new Deity ( 'Gorum', 
                          `Gorum (pronounced GOR-um) is a god of battle above all other pursuits; it is said that he would rust away into nothingness if there is ever a time with no more conflicts to be fought. Known as Our Lord in Iron, his faithful believe he is present in every iron weapon of war that is forged.`,
                          `Our Lord in Iron`,
                          `Chaotic Neutral`,
                          `Soldiers, mercenaries, brigands, bloodthirsty savages; half-orcs, barbarians`,
                          `Chaos, Destruction, Glory, Strength, War`,
                          `N/A`,
                          `Greatsword`    
    ),
    'gozreh' : new Deity ( 'Gozreh', 
                           `Gozreh (pronounced GOHZ-ray) is a dualistic deity of nature, a god of the storm and sky and also a goddess of the wave and surf. Born of the ocean's fury and the wind's wrath, Gozreh is a fickle deity.`,
                           `The Wind and the Waves; Ioz'om, the Sky Father; Hyjarth & Tourithia; She Who Guides the Wind and the Waves`,
                           `Neutral`,
                           `Druids, sailors, woodsmen, farmers`,
                           `Air, Animal, Plant, Water, Weather`,
                           `N/A`,
                           `Trident`    
    ),
    'iomedae' : new Deity ( 'Io', 
                            `Iomedae (pronounced ahy-OH-meh-day) is the goddess of righteous valor, justice, and honor. Having served as Aroden's herald, she inherited many of the Last Azlanti's followers upon his disappearance, and continues to espouse the ideas of honor and righteousness in the defense of good and the battle against evil.`,
                            `The Inheritor, Light of the Sword, Lady of Valor`,
                            `Lawful Good`,
                            `Paladins, knights, warriors`,
                            `Glory, Good, Law, Sun, War`,
                            `N/A`,
                            `Longsword`    
    ),
    'irori' : new Deity ( 'Irori', 
                          `Irori (pronounced ih-ROHR-ee) is the god of enlightenment, self-perfection, knowledge, healing, and inner strength. His followers claim that he was once a mortal who achieved absolute physical and mental perfection and thus attained divinity of his own volition. He is one of the core gods of, if not the most powerful deity of, the Vudran pantheon, but has an increasing following in the Inner Sea region as well.`,
                          `Master of Masters; Iro-Shu and the Enlightened One (in Tian Xia); the Perfect Human (in Vudra); the Perfect Man`,
                          `Lawful Neutral`,
                          `Monks; Vudrani; green dragons; dwarves; mystics; ascetics; hermits; historians; martial artists; scholars`,
                          `Healing, Knowledge, Law, Rune, Strength`,
                          `Knowledge, might, perfection, truth`,
                          `Open hand, representing unarmed combat, unarmed strike; fist`    
    ),
    'lamashtu' : new Deity ( 'Lamashtu', 
                             `Lamashtu (pronounced lah-MAHSH-too) is the mother and patroness of many misshapen and malformed creatures that crawl, slither, or flap on, above, or below the surface of Golarion. Her unholy symbol is a three-eyed jackal head, which may be represented in many ways, and her sacred animal is the jackal.`,
                             `The Demon Queen, Mother of Monsters, Demon Mother, Mother of Beasts, Mother of Demons, Mother of Perversion, Mistress of Insanity, Grandmother Nightmare`,                       
                             `Chaotic Evil`,
                             `Gnolls, medusas, harpies, goblins, minotaurs, hidden human cults, the insane, bugbears, deros, lamias, morlocks, ogres, monsters, outcasts`,
                             `Chaos, Evil, Madness, Strength, Trickery`,
                             `Family, might, nightmares, trickery`,
                             `Falchion or kukri`    
    ),
    'nethys' : new Deity ( 'Nethys', 
                           `Nethys (pronounced NETH-uhs) is a Garundi god who holds magic above all things. He gained enough power to witness all that transpired on all planes, and this both fueled his divinity and drove him irreparably mad. He is a god of magic, torn between destroying the world with one hand and saving it with the other. This dual-edged nature of magic is cherished by his followers and is epitomized in his apotheosis.`,
                           `The All-Seeing Eye`,                       
                           `Neutral`,
                           `Wizards, Mystic Theurges`,
                           `Destruction, Knowledge, Magic, Protection, Rune`,
                           `N/A`,
                           `Quarterstaff`    
    ),
    'norgorber' : new Deity ( 'Norgorber', 
                              `Norgorber (pronounced NOR-gore-ber) is known as a Taldan deity of thievery and assassination, as well as a keeper of secrets. He is called the 'Reaper of Reputation' by some, but has more insidious titles among his other worshipers. He remains an enigma to most, and his true motives are unknown. Many of his own followers remain ignorant of his plans and designs. Norgorber is the only evil deity amongst the Ascended.`,
                              `Reaper of Reputation, Father Skinsaw, The Gray Master, Blackfingers, King of Thieves`,
                              `Neutral Evil`,
                              `Thieves, assassins, murderers, spies`,
                              `Charm, Death, Evil, Knowledge, Trickery`,
                              `N/A`,
                              `Short sword`    
    ),
    'pharasma' : new Deity ( 'Pharasma', 
                              `"The Lady of Graves", Pharasma (pronounced fah-RAZ-mah) is the goddess who shepherds Golarion's recently-departed souls to their final reward. Upon death, souls migrate via the River of Souls to Pharasma's Boneyard in the Outer Sphere, which sits atop an impossibly tall spire that pierces the Astral Plane.`,
                              `Lady of Graves, Lady of Mysteries, Mother of Souls, Gray Lady, The Survivor`,
                              `Neutral`,
                              `Midwives, pregnant women, morticians`,
                              `Death, Healing, Knowledge, Repose, Water`,
                              `N/A`,
                              `Dagger`    
    ),      
    'rovagug' : new Deity ( 'Rovagug', 
                            `Imprisoned since the Age of Creation, the god Rovagug (pronounced ROH-vah-gug) seeks only to destroy creation and the other gods. Believed to be imprisoned in a state of torpor somewhere deep within Golarion, his increasingly restless stirrings are taken by many to be the cause of volcanic activity and earthquakes.`,
                            `The Rough Beast, The Destroyer, Enemy of the Gods, The Great Destroyer, The Unmaker, The Worldbreaker`,
                            `Chaotic Evil`,                       
                            `Orcs, gnolls, savage tribes`,
                            `Chaos, Evil, Destruction, Weather, War`,
                            `N/A`,
                            `Greataxe`    
    ),
    'sarenrae' : new Deity ( 'Sarenrae', 
                             `Known to her faithful as the Dawnflower, the Healing Flame, and the Everlight, Sarenrae (pronounced SAER-en-ray) is a goddess who teaches temperance and patience in all things. Compassion and peace are her greatest virtues, and if enemies of the faith can be redeemed, they should be.`,
                             `The Dawnflower, The Cleansing Light, The Everlight, The Healing Light, The Healing Flame`,
                             `Neutral Good`,                       
                             `Healers, farmers, redeemed evil-doers`,
                             `Fire, Glory, Good, Healing, Sun`,
                             `N/A`,
                             `Scimitar`    
    ),
    'shelyn' : new Deity ( 'Shelyn', 
                           `Shelyn (pronounced SHEHL-ihn) is the goddess of art, beauty, love, and music, and the half-sister of Zon-Kuthon. She started life as a relatively minor deity of beauty, art, and music, but with the destruction of her unnamed mother, the former goddess of love, Shelyn gained her mother's portfolio. Shelyn continues to focus on beauty and the related areas of art and music, and has expanded upon her mother's relatively narrow view of love to include all forms of the emotion.`,
                           `The Eternal Rose, The Lady of Chrysanthemums (Tian Xia), Syriss, The Incorruptible, The Eternal Maiden`,
                           `Neutral Good`,                                                  
                           `Artists, poets, lovers`,
                           `Air, Charm, Good, Luck, Protection`,
                           `Creation, family, passion, protection`,
                           `Glaive`    
    ),
    'torag' : new Deity ( 'Torag', 
                          `Torag (pronounced TORR-awg) is a stoic and serious god who values honor, planning, and well-made steel. He is an often distant deity, lending magical power to his clerics, but leaving his followers to make their own way through life, knowing that this will make them strong and determined.`,
                          `Father of Creation; Father of Dwarvenkind`,
                          `Lawful good`,                                                  
                          `Dwarves`,
                          `Artifice, Earth, Good, Law, Protection`,
                          `N/A`,
                          `Warhammer`    
    ),
    'urgathoa' : new Deity ( 'Urgathoa', 
                             `Urgathoa (pronounced oor-gah-THO-ah) is the Varisian goddess of physical excess, disease, and the undead. She is mostly worshiped by dark necromancers, the undead, and those wishing to become undead. Sometimes those who live gluttonous lifestyles make supplication to her, as do those suffering from a serious illness.`,
                             `The Pallid Princess, Lady Despair`,
                             `Neutral Evil`,                                                  
                             `N/A`,
                             `Death, Evil, Magic, Strength, War`,
                             `N/A`,
                             `Scythe`    
    ),
    'zonkuthon' : new Deity ( 'Zon-Kuthon', 
                              `The deity Zon-Kuthon (pronounced ZONN-koo-THON) possesses one of the most twisted and evil minds in the Great Beyond. His position as god of pain is well earned, and he has been the root of countless tortures, murders, and worse throughout time.`,
                              `The Midnight Lord, The Dark Prince, The Prince of Pain`,
                              `Lawful Evil`,                                                  
                              `Sadists, masochists`,
                              `Darkness, Death, Destruction, Evil, Law`,
                              `N/A`,
                              `Spiked chain`    
    ),                                     
}
//get main route, main route is always / 
app.get('/', (req, res) => {
    //tell server to go into current directory and grab input ex. index.html
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:deity', (req, res) => {
    const deityInfo = req.params.deity.toLocaleLowerCase()
    if(newObj[deityInfo]){
        res.json(newObj[deityInfo])
    } else {
        res.json(newObj['unknown'])
    }    
})

app.get('/api/', (req, res) => {
    res.json(newObj)
})

app.listen(process.env.PORT || PORT , () => {
    //process.env.PORT will default to heroku port first
    console.log(`The server is now running on port ${PORT}`);
}) 
                         
                          
                          


                            
                             
                            
  
                               
                           
                            
   
                             
                             
                          
    
                           
                                                  
                           




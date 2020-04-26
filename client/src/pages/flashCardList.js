import React from 'react'
import Flashcard from './flashCard';
import '../App.scss';

export default function flashCardList({ flashcards }) {

    const flashCards = [
        {
            id: 1,
            question: 'Does plastic break down in sea water?',
            answer: 'False. It is very difficult for plastic to break down in sea water. Latest estimates that plastic can take anywhere from 20-600 years for it plastic to decompose. ',
            options: [
                'True',
                'False'
                
          
            ],
            src:'https://blogs.ei.columbia.edu/2011/01/26/our-oceans-a-plastic-soup/'
        },
        {
            id: 2,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges',
                'The Yellow River'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 3,
            question: 'Do government subsidies of Large-scale fishing contribute to over-fishing?',
            answer: 'True! Subsidies can lead to overcapacity of fishing vessels and skewing of production costs so that fishing operations continue when they would otherwise not make economic sense',
            options: [
                'True',
                'False'
                
                
            ],
            src:'https://www.worldwildlife.org/threats/overfishing'
        },
        {
            id: 4,
            question: 'Over eight million metric tons of plastic end up in the ocean every year.',
            answer: 'True! Every year, 8 million metric tons of plastics enter our ocean on top of the estimated 150 million metric tons that currently circulate our marine environments',
            options: [
                'True',
                'False',
                'Im not sure.'
                
            ],
            src:'https://oceanconservancy.org/trash-free-seas/plastics-in-the-ocean/'
        },
        {
            id: 5,
            question: 'Can overfishing cause adverse changes to an oceans echo system?',
            answer: 'True! When Food sources are depleted in an area it can change and oceans echo system including the migratory patterns of predator Sea life and bring them closer inland and closer to human contact.',
            options: [
                'True',
                'False',
                
                
            ],
            src:'https://sharkresearch.rsmas.miami.edu/research/projects/ecosystems-impacts-of-overfishing/'
        },
        {
            id: 6,
            question: 'Is the Red Tide harmful to humans?',
            answer: 'True! Harmful algal blooms(HAB), also known as Red tide can cause illnesses in humans. Though rare, they can be debilitating or even fatal.',
            options: [
                'True',
                'False'
                
                
            ],
            src:'https://oceanservice.noaa.gov/facts/redtide.html'
        },
        {
            id: 7,
            question: 'Can humans have worsening effects of the red tide?',
            answer: 'True. Chemicals from farming, factories, sewage treatment plants become dissolved in water. This water, eventually flows into the ocean and can cause algae to grow faster, leading to red tides.',
            options: [
                'True',
                'False',
                'I do not know'
                
            ],
            src:'https://scijinks.gov/red-tide/'
        },
        {
            id: 8,
            question: 'How many Sharks are killed every year by fishing nets?',
            answer: '500-700. Every year on average 500-700 sharks are caught and die in fishing nets',
            options: [
                '2000-3000',
                '500-700',
                'Over 5000'
                
                
            ],
            src:'https://www.nationalgeographic.com/culture/onward/2013/03/01/100-million-sharks-killed-every-year-study-shows-on-eve-of-international-conference-on-shark-protection/',
        },
        {
            id: 8,
            question: 'In 2018 Florida saw its highest death rate of Manatees killed by boats',
            answer: 'False! According to the Save the Manatee Club. In 2019, 130 manatees were killed by boats.',
            options: [
                'True',
                'False',
                
                
            ],
            src:'https://www.mynews13.com/fl/orlando/news/2020/01/01/florida-manatees-2019-boat-deaths'
        },
        {
            id: 8,
            question: 'What is biggest threat to Manatees?',
            answer: 'All of the Above! Manatees continue to face many threats, including collisions with boats, habitat loss and degradation, fishing gear entanglement, human harassment, red tide and other algal blooms, and climate change.',
            options: [
                'Humans',
                'Loss of Habitat',
                'Algae Blooms(Red Tide)',
                'Fishing Nets',
                'Climate Change',
                'All of the above'
                
            ],
            src:'https://defenders.org/wildlife/florida-manatee'
        }
        
      ]
    return (
        <div className="card-grid">
            {flashCards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )

}
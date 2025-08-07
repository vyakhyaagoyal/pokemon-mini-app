import { Pokemon } from '../types/pokemon';
// import pikachuImg from '../../public/assets/pikachu.webp';
// import charmanderImg from '../../public/assets/charmander.webp';
// import bulbasaurImg from '../../public/assets/bulbasaur.webp';
// import squirtleImg from '../../public/assets/squirtle.webp';
// import snorlaxImg from '../../public/assets/snorlax.webp';
// import jigglypuffImg from '../../public/assets/jigglypuff.webp';
// import psyduckImg from '../../public/assets/psyduck.webp';
// import eeveeImg from '../../public/assets/eevee.webp';
// import gengarImg from '../../public/assets/gengar.webp';
// import meowthImg from '../../public/assets/meowth.webp';

export const pokemon: Pokemon[] = [
  {
    id: 'pikachu',
    name: 'Pikachu',
    image: '/assets/pikachu.webp',
    type: 'electric',
    personality: 'The Social Spark ⚡',
    description: "You&apos;re the life of the party! Energetic, loyal, and always ready to brighten someone's day. You form deep friendships and aren't afraid to stand up for what's right.",
    traits: ['Social', 'Energetic', 'Loyal', 'Brave']
  },
  {
    id: 'charmander',
    name: 'Charmander',
    image: '/assets/charmander.webp',
    type: 'fire',
    personality: 'The Determined Fighter 🔥',
    description: "You&apos;re ambitious and never give up! You have a fiery passion for your goals and the determination to overcome any obstacle. Others admire your drive and resilience.",
    traits: ['Ambitious', 'Determined', 'Passionate', 'Resilient']
  },
  {
    id: 'bulbasaur',
    name: 'Bulbasaur',
    image: '/assets/bulbasaur.webp',
    type: 'grass',
    personality: 'The Calm Strategist 🌱',
    description: "You&apos;re thoughtful and reliable! You prefer to think things through and offer steady support to your friends. You have a natural ability to keep others grounded.",
    traits: ['Thoughtful', 'Reliable', 'Strategic', 'Supportive']
  },
  {
    id: 'squirtle',
    name: 'Squirtle',
    image: '/assets/squirtle.webp',
    type: 'water',
    personality: 'The Adaptable Friend 💧',
    description: "You&apos;re flexible and go with the flow! You adapt easily to new situations and are great at helping others navigate challenges with your calm, collected approach.",
    traits: ['Adaptable', 'Calm', 'Helpful', 'Balanced']
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    image: '/assets/snorlax.webp',
    type: 'normal',
    personality: 'The Peaceful Giant 😴',
    description: "You value comfort and peace above all! You&apos;re the wise friend who reminds others to slow down and enjoy life's simple pleasures. Your presence is incredibly calming.",
    traits: ['Peaceful', 'Wise', 'Comfortable', 'Patient']
  },
  {
    id: 'jigglypuff',
    name: 'Jigglypuff',
    image: '/assets/jigglypuff.webp',
    type: 'psychic',
    personality: 'The Creative Dreamer 🎵',
    description: "You&apos;re artistic and love to express yourself! You have a unique way of seeing the world and enjoy bringing joy to others through your creativity and imagination.",
    traits: ['Creative', 'Artistic', 'Expressive', 'Imaginative']
  },
  {
    id: 'psyduck',
    name: 'Psyduck',
    image: '/assets/psyduck.webp',
    type: 'water',
    personality: 'The Confused Genius 🤔',
    description: "You&apos;re a bit scattered but incredibly talented! You might seem confused sometimes, but you have hidden depths and surprising moments of brilliance that amaze everyone around you.",
    traits: ['Quirky', 'Brilliant', 'Unpredictable', 'Endearing']
  },
  {
    id: 'eevee',
    name: 'Eevee',
    image: '/assets/eevee.webp',
    type: 'normal',
    personality: 'The Versatile Explorer 🌟',
    description: "You&apos;re adaptable and full of potential! You love trying new things and have many different sides to your personality. People are constantly surprised by your hidden talents.",
    traits: ['Versatile', 'Curious', 'Adaptable', 'Potential-filled']
  },
  {
    id: 'gengar',
    name: 'Gengar',
    image: '/assets/gengar.webp',
    type: 'ghost',
    personality: 'The Mischievous Trickster 👻',
    description: "You&apos;re playful and love a good prank! You have a mischievous sense of humor and enjoy surprising people. Despite your playful nature, You&apos;re incredibly loyal to your friends.",
    traits: ['Playful', 'Mischievous', 'Loyal', 'Humorous']
  },
  {
    id: 'meowth',
    name: 'Meowth',
    image: '/assets/meowth.webp',
    type: 'normal',
    personality: 'The Ambitious Schemer 💰',
    description: "You&apos;re clever and always have a plan! You&apos;re ambitious and resourceful, with a knack for getting what you want. You&apos;re street-smart and know how to work the system.",
    traits: ['Clever', 'Ambitious', 'Resourceful', 'Street-smart']
  }
];
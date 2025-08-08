import { QuizQuestion } from '../types/pokemon';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your ideal weekend vibe?",
    emoji: "🎉",
    answers: [
      {
        id: "a",
        text: "Hanging out with friends and making memories",
        pokemonTraits: { pikachu: 3, jigglypuff: 2, charmander: 1, eevee: 1 }
      },
      {
        id: "b", 
        text: "Working on a personal project or goal",
        pokemonTraits: { charmander: 3, bulbasaur: 2, squirtle: 1, meowth: 2 }
      },
      {
        id: "c",
        text: "Chilling at home and recharging",
        pokemonTraits: { snorlax: 3, bulbasaur: 2, squirtle: 1, psyduck: 1 }
      },
      {
        id: "d",
        text: "Exploring something new and creative",
        pokemonTraits: { jigglypuff: 3, squirtle: 2, pikachu: 1, eevee: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "How do you handle a tough situation?",
    emoji: "⚡",
    answers: [
      {
        id: "a",
        text: "Face it head-on with determination",
        pokemonTraits: { charmander: 3, pikachu: 2, bulbasaur: 1, gengar: 1 }
      },
      {
        id: "b",
        text: "Think it through and make a careful plan",
        pokemonTraits: { bulbasaur: 3, squirtle: 2, snorlax: 1, psyduck: 2 }
      },
      {
        id: "c",
        text: "Go with the flow and adapt as needed",
        pokemonTraits: { squirtle: 3, pikachu: 1, jigglypuff: 2, eevee: 2 }
      },
      {
        id: "d",
        text: "Take a step back and wait for the right moment",
        pokemonTraits: { snorlax: 3, bulbasaur: 2, squirtle: 1, gengar: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your social style at parties?",
    emoji: "🎭",
    answers: [
      {
        id: "a",
        text: "I'm the one getting everyone hyped up!",
        pokemonTraits: { pikachu: 3, charmander: 2, jigglypuff: 1, gengar: 2 }
      },
      {
        id: "b",
        text: "I love deep conversations with a few people",
        pokemonTraits: { bulbasaur: 3, squirtle: 2, snorlax: 1, psyduck: 1 }
      },
      {
        id: "c",
        text: "I'm somewhere in the middle, connecting with everyone",
        pokemonTraits: { squirtle: 3, pikachu: 1, bulbasaur: 1, eevee: 3 }
      },
      {
        id: "d",
        text: "I prefer cozy gatherings with close friends",
        pokemonTraits: { snorlax: 3, bulbasaur: 1, jigglypuff: 2, gengar: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "What motivates you most?",
    emoji: "🎯",
    answers: [
      {
        id: "a",
        text: "Helping others and making connections",
        pokemonTraits: { pikachu: 3, bulbasaur: 2, squirtle: 2, eevee: 1 }
      },
      {
        id: "b",
        text: "Achieving my goals and proving myself",
        pokemonTraits: { charmander: 3, pikachu: 1, bulbasaur: 1, meowth: 3 }
      },
      {
        id: "c",
        text: "Finding balance and inner peace",
        pokemonTraits: { snorlax: 3, bulbasaur: 2, squirtle: 2, psyduck: 1 }
      },
      {
        id: "d",
        text: "Creating something beautiful or meaningful",
        pokemonTraits: { jigglypuff: 3, bulbasaur: 1, squirtle: 1, eevee: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "How do you prefer to learn new things?",
    emoji: "📚",
    answers: [
      {
        id: "a",
        text: "By jumping in and figuring it out with others",
        pokemonTraits: { pikachu: 3, charmander: 2, squirtle: 1, gengar: 1 }
      },
      {
        id: "b",
        text: "Through practice and persistence",
        pokemonTraits: { charmander: 3, bulbasaur: 2, pikachu: 1, meowth: 2 }
      },
      {
        id: "c",
        text: "By observing first, then trying it step by step",
        pokemonTraits: { bulbasaur: 3, squirtle: 2, snorlax: 1, psyduck: 2 }
      },
      {
        id: "d",
        text: "At my own pace, when I feel ready",
        pokemonTraits: { snorlax: 3, jigglypuff: 2, bulbasaur: 1, eevee: 1 }
      }
    ]
  },
  {
    id: 6,
    question: "What's your ideal way to spend a creative afternoon?",
    emoji: "🎨",
    answers: [
      {
        id: "a",
        text: "Collaborating on something fun with friends",
        pokemonTraits: { pikachu: 3, jigglypuff: 2, squirtle: 1, gengar: 2 }
      },
      {
        id: "b",
        text: "Working intensely on a passion project",
        pokemonTraits: { charmander: 3, jigglypuff: 1, bulbasaur: 1, meowth: 2 }
      },
      {
        id: "c",
        text: "Making something practical and useful",
        pokemonTraits: { bulbasaur: 3, squirtle: 2, snorlax: 1, psyduck: 1 }
      },
      {
        id: "d",
        text: "Expressing myself through art or music",
        pokemonTraits: { jigglypuff: 3, pikachu: 1, snorlax: 1, eevee: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "How do your friends describe you?",
    emoji: "👥",
    answers: [
      {
        id: "a",
        text: "The loyal friend who's always there",
        pokemonTraits: { pikachu: 3, bulbasaur: 2, squirtle: 1, eevee: 1 }
      },
      {
        id: "b",
        text: "The driven one who inspires others",
        pokemonTraits: { charmander: 3, pikachu: 1, jigglypuff: 1, meowth: 3 }
      },
      {
        id: "c",
        text: "The steady voice of reason",
        pokemonTraits: { bulbasaur: 3, snorlax: 2, squirtle: 2, psyduck: 2 }
      },
      {
        id: "d",
        text: "The creative spirit who sees things differently",
        pokemonTraits: { jigglypuff: 3, squirtle: 1, snorlax: 1, eevee: 3 }
      }
    ]
  }
];
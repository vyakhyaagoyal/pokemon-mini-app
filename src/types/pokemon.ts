import type { StaticImageData } from 'next/image';


export interface Pokemon {
  id: string;
  name: string;
  image: string | StaticImageData;
  type: 'electric' | 'fire' | 'water' | 'grass' | 'psychic' | 'normal' | 'ghost';
  personality: string;
  description: string;
  traits: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  emoji: string;
  answers: QuizAnswer[];
}

export interface QuizAnswer {
  id: string;
  text: string;
  pokemonTraits: Record<string, number>; // pokemon_id -> weight
}

export interface QuizResult {
  pokemon: Pokemon;
  matchPercentage: number;
}
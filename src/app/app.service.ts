import { Injectable } from '@angular/core';
import { Episode } from './app-model'

@Injectable()
export class AppService {

  constructor() {

  }

  public async getEpisodes() {
    const EPISODE_DATA: Episode[] = [
      {
        id: 1,
        title: "Meet the Super Monsters / Vampires Don't Dance",
        duration: 23,
        poster: 'Episode1.jpg',
        description: `The Super Monsters welcome a nervous new student with surprising powers.
        A frustrated Drac has trouble learning how to dance.`,
        rating: 5
      },
      {
        id: 2,
        title: "Borrowed Trouble / Spell Help",
        duration: 23,
        poster: 'Episode2.jpg',
        description: `Frankie stirs up trouble when he "borrows" Katya’s wand without her permission.
        A trip to the library teaches Katya to ask for help when she needs it.`,
        rating: 3
      },
      {
        id: 3,
        title: "Safety Fur All / Even Monsters Need Manners",
        duration: 23,
        poster: 'Episode3.jpg',
        description: `Lobo learns to follow the rules on a class field trip to Funland.
        Cleo leads the Super Monsters in a game of "Monster, May I?"`,
        rating: 4
      },
      {
        id: 4,
        title: "Monsters at the Museum / Lost and Furry One",
        duration: 23,
        poster: 'Episode4.jpg',
        description: `The class helps Frankie talk about his feelings after a frightful trip to the museum.
        A careless Lobo loses his friends' favorite things.`,
        rating: 5
      },
      {
        id: 5,
        title: "Once in a Blue Moon / Zombie Eyes Surprise",
        duration: 23,
        poster: 'Episode5.jpg',
        description: `Katya can't decide which punch to mix up for the Blue Moon party.
        Zoe's zombie vision gets in the way when the Super Monsters learn a new game.`,
        rating: 4
      }
    ];
    return EPISODE_DATA;
  }


}

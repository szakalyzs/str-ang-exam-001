import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {
      id: 1,
      name: 'Sheffy',
      superPower: 'Amphibolurus barbatus',
      address: '1575 Northview Court'
    },
    {
      id: 2,
      name: 'Bobbie',
      superPower: 'Sar idr nis melanotos',
      address: '7918 Texas Place'
  },
    {
      id: 3,
      name: 'Levey',
      superPower: 'Milvago chimachima',
      address: '8667 2nd Trail'
    },
    {
      id: 4,
      name: 'Aile',
      superPower: 'Cacatua tenuirostris',
      address: '4 Starling Circle'
    },
    {
      id: 5,
      name: 'Marie-jeanne',
      superPower: 'Herpestes javanicus',
      address: '4 Harbort Way'
    },
    {
      id: 6,
      name: 'Nertie',
      superPower: 'Actophilornis africanus',
      address: '57 Portage Junction'
    },
    {
      id: 7,
      name: 'Joycelin',
      superPower: 'Ammospermophilus nelsoni',
      address: '9 2nd Avenue'
    },
    {
      id: 8,
      name: 'Lucienne',
      superPower: 'Gazella granti',
      address: '17989 Randy Hill'
    },
    {
      id: 9,
      name: 'Beaufort',
      superPower: 'Falco mexicanus',
      address: '89 Shoshone Trail'
    },
    {
      id: 10,
      name: 'Estrellita',
      superPower: 'unavailable',
      address: '6 7th Pass'
    },
    {
      id: 11,
      name: 'Sibeal',
      superPower: 'Dasypus novemcinctus',
      address: '1 Spenser Terrace'
    },
    {
      id: 12,
      name: 'Mariette',
      superPower: 'Spheniscus magellanicus',
      address: '31 Schmedeman Crossing'
    },
    {
      id: 13,
      name: 'Tiffany',
      superPower: 'Ictonyx striatus',
      address: '52717 Debra Park'
    },
    {
      id: 14,
      name: 'Alf',
      superPower: 'Fregata magnificans',
      address: '3374 Bultman Pass'
    },
    {
      id: 15,
      name: 'Brianne',
      superPower: 'Bos mutus',
      address: '0578 Sherman Terrace'
    },
    {
      id: 16,
      name: 'Jodi',
      superPower: 'Merops sp.',
      address: '32605 Del Mar Drive'
    },
    {
      id: 17,
      name: 'Ritchie',
      superPower: 'Pytilia melba',
      address: '25 Tennessee Avenue'
    },
    {
      id: 18,
      name: 'Lorenza',
      superPower: 'Bettongia penicillata',
      address: '2831 Emmet Terrace'
    },
    {
      id: 19,
      name: 'Paten',
      superPower: 'Dendrocitta vagabunda',
      address: '980 North Court'
    },
    {
      id: 20,
      name: 'Maxy',
      superPower: 'Papio cynocephalus',
      address: '89366 Sauthoff Circl'
    }
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.list);

  constructor() {}

  getAll(): void {
    this.list$.next(this.list);
  }

}

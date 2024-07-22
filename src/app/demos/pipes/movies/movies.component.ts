import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { CurrencyPipe, DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { FileSizePipe } from './filesize.pipe';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [NgFor, DatePipe, TitleCasePipe, CurrencyPipe, FileSizePipe],
  providers:[ImageFormaterPipe],
  templateUrl: './movies.component.html',
  styles: ``
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  mappedMovies !: Movie[];

  constructor(private imageFormat: ImageFormaterPipe ){
    this.movies = [
      {
        name: 'Um Sonho de Liberdade',
        releaseDate: new Date('12/07/1994'),
        value: 150.00,
        image: 'sonhoLiberdade.jpg',
        size: '513326980'
      },
      {
        name: 'O Poderoso Chefão',
        releaseDate: new Date('01/12/1972'),
        value: 200.00,
        image: 'poderosoChefaoI.jpg',
        size: '1342177280'
      },
      {
        name: 'Batman: O Cavaleiro das Trevas ',
        releaseDate: new Date('08/01/2008'),
        value: 70.00,
        image: 'Batman2008.jpg',
        size: '719974720'
      },
      {
        name: 'o poderoso chefão 2',
        releaseDate: new Date('01/12/1974'),
        value: 120.00,
        image: 'poderosoChefaoII.jpg',
        size: '1254589899'
      },
      {
        name: 'Pulp Fiction: Tempo de Violência ',
        releaseDate: new Date('01/08/1994'),
        value: 190.00,
        image: 'PulpFiction.jpg',
        size: '773039680'
      }
    ];
  }

  ngOnInit(): void {
    this.mappedMovies = this.movies.map(movie =>{
      return{
        name: movie.name,
        image: this.imageFormat.transform(movie.image, true),
        value: movie.value,
        releaseDate: movie.releaseDate,
        size: movie.size
      }
    })
  }

}

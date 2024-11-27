import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Adventure',
      author: 'John Doe',
      description: 'A thrilling tale of adventure and discovery.',
      price: 15.99,
      imageUrl: 'https://cps-static.rovicorp.com/2/Open/Lionsgate/Movies/The%20Great%20Adventure%20(1976)/_derived_jpg_q90_310x470_m0/TheGreatAdventure1976-PosterArt.jpg'
    },
    {
      id: 2,
      title: 'Learn Angular in 30 Days',
      author: 'Jane Smith',
      description: 'A comprehensive guide to mastering Angular.',
      price: 25.50,
      imageUrl: 'https://assets.bacancytechnology.com/qanda/wp-content/uploads/2024/04/29061705/Download-File-in-AngularJS.png'
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Robert Martin',
      description: 'A collection of timeless design patterns for software development.',
      price: 20.00,
      imageUrl: 'https://th.bing.com/th/id/OIP.YCRIl-pWu4FwuuJrg1y0ggAAAA?rs=1&pid=ImgDetMain'
    },
    {
      id: 4,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      description: 'A classic textbook on algorithms.',
      price: 60.00,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387741681i/108986.jpg'
    },
    {
      id: 5,
      title: 'The JavaScript Handbook',
      author: 'Kyle Simpson',
      description: 'A complete guide to mastering JavaScript.',
      price: 35.00,
      imageUrl: 'https://kbpsystem777.github.io/You-Dont-Know-JS/es6&beyond/cover.jpg'
    },
    {
      id: 6,
      title: 'The Art of War',
      author: 'Sun Tzu',
      description: 'A famous ancient Chinese military treatise.',
      price: 9.99,
      imageUrl: 'https://th.bing.com/th/id/OIP.TibaEfhGH0eR8qR_KcAUjAHaMK?rs=1&pid=ImgDetMain'
    },
    {
      id: 7,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      description: 'A handbook of agile software craftsmanship.',
      price: 40.00,
      imageUrl: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg'
    },
    {
      id: 8,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      description: 'How today’s entrepreneurs use continuous innovation to create radically successful businesses.',
      price: 18.99,
      imageUrl: 'https://d.gr-assets.com/books/1333576876l/10127019.jpg'
    }
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
}

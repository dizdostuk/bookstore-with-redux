export default class BookstoreService{
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready microservices',
        author: 'Suzan J. Powler'
      },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard'
      }
    ];
  }
}
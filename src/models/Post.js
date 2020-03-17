export default class Post {
  constructor(title, img) {
    this.title = title;
    this.image = img;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      image: this.image
    }, null, 2);
  }

  get uppercase() {
    return this.title.toUpperCase();
  }
}
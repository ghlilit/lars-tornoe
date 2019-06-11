const getImage = (id) => {
    let img;
    switch (id) {
      case 1: {
        img = require('./newsImages/news1.jpg');
        break;
      }
      case 2: {
        img = require('./newsImages/news2.jpg');
        break;
      }
      case 3: {
        img = require('./newsImages/news3.jpg');
        break;
      }
      case 4: {
        img = require('./newsImages/news4.jpg');
        break;
      }
      case 5: {
        img = require('./newsImages/news5.jpg');
        break;
      }
      case 6: {
        img = require('./newsImages/news6.jpg');
        break;
      }
      case 7: {
        img = require('./newsImages/news7.jpg');
        break;
      }
      case 8: {
        img = require('./newsImages/news8.jpg');
        break;
      }
      case 9: {
        img = require('./newsImages/news9.jpg');
        break;
      }
      case 10: {
        img = require('./newsImages/news10.jpg');
        break;
      }
      case 11: {
        img = require('./newsImages/news11.jpg');
        break;
      }
      case 12: {
        img = require('./newsImages/news12.jpg');
        break;
      }
      case 13: {
        img = require('./newsImages/news13.jpg');
        break;
      }
      case 14: {
        img = require('./newsImages/news14.jpg');
        break;
      }
      case 15: {
        img = require('./newsImages/news15.jpg');
        break;
      }
      case 16: {
        img = require('./newsImages/news16.jpg');
        break;
      }
      case 17: {
        img = require('./newsImages/news17.jpg');
        break;
      }
      case 18: {
        img = require('./newsImages/news18.jpg');
        break;
      }
      default: {
        img = require('./newsImages/default.jpg');
      }
    }
    return img;
  }

  export default getImage;
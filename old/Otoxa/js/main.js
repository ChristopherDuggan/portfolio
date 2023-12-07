// back and forward navigation of comic through arrow keys
// document.onkeydown = (evt) => {
//   //only work if evt is 'truthy'
//   evt = evt || window.event;
//   //break the function if the user is typing in an input field
//   if (evt.target.nodeName == 'INPUT') return;
//   //break the function if the user is using OS hotkeys
//   if (evt.altKey || evt.shiftKey || evt.ctrlKey || evt.metaKey) {
//     return;
//   } else {
//     switch
//   }
// }


// window.addEventListener('keydown', function(evt) {
//   if (evt.target.nodeName == 'INPUT') return;
//   //break the function if the user is using OS hotkeys
//   if (evt.altKey || evt.shiftKey || evt.ctrlKey || evt.metaKey) {
//     return;
//   } else {
//     switch
//   }
// }


// const nextPage = () => {
//
// }
//


// ####################### ARCHIVE ########################

class Book {
  constructor(number, title, pages, imgArray, linkArray) {
    this.number = 'Part ' + number ;
    this.title = title;
    this.pages = pages;
    this.imgArray = imgArray;
    this.linkArray = linkArray
  }

  getNumber() {
    return this.number;
  }

  getTitle() {
    return this.title;
  }

  getPages() {
    return this.pages;
  }

  getImgArray() {
    return this.imgArray;
  }
  getLinkArray() {
    return this.linkArray;
  }
}


const book1 = new Book(1, 'The Sacred Heart', 10, ['../images/001.png',
'../images/002.png',
'../images/003.png',
'../images/004.png',
'../images/005.png',
'../images/006.png',
'../images/007.png',
'../images/008.png',
'../images/009.png',
'../images/010.png'],
['../pages/001.html',
'../pages/002.html',
'../pages/003.html',
'../pages/004.html',
'../pages/005.html',
'../pages/006.html',
'../pages/007.html',
'../pages/008.html',
'../pages/009.html',
'../pages/010.html']
);

const book2 = new Book(1, 'Beat', 11, ['../images/011.png',
'../images/012.png',
'../images/013.png',
'../images/014.png',
'../images/015.png',
'../images/016.png',
'../images/017.png',
'../images/018.png',
'../images/019.png',
'../images/020.png',
'../images/021.png'],
['../pages/011.html',
'../pages/012.html',
'../pages/013.html',
'../pages/014.html',
'../pages/015.html',
'../pages/016.html',
'../pages/017.html',
'../pages/018.html',
'../pages/019.html',
'../pages/020.html',
'../pages/021.html']
);

const book3 = new Book(3, 'The Dragon And The Beast', 11, ['../images/022.png',
'../images/023.png',
'../images/024.png',
'../images/025.png',
'../images/026.png',
'../images/027.png',
'../images/028.png',
'../images/029.png',
'../images/030.png',
'../images/031.png',
'../images/032.png'],
['../pages/022.html',
'../pages/023.html',
'../pages/024.html',
'../pages/025.html',
'../pages/026.html',
'../pages/027.html',
'../pages/028.html',
'../pages/029.html',
'../pages/030.html',
'../pages/031.html',
'../pages/032.html']
);

const bookNames = {
  book1: book1,
  book2: book2,
  book3: book3
};

// ####### BOOK BG SWITCHER ####################
const bgSwitch = (pgNum, passedBook) => {
  // idString is the id of the book we're working on

  // gets the number from the select option
  let num = Number(document.getElementById(pgNum).value);
  //get the array of images contained in the book
  let imgArr = passedBook.getImgArray();
  // set the number selected to the corresponding image array spot
  let imgPick = imgArr[num-1];
  // get the array of urls to the corresponding book pages
  let linkArr = passedBook.getLinkArray();
  //set the url to the corresponding book page
  let linkPick = linkArr[num-1];

  //get the id of the book
  let idString = document.getElementById(pgNum).parentElement.id;

  // get the id of the corresponding anchor tag
  let linkId = document.getElementById(pgNum).previousElementSibling.id;

  // take in the id of we want to operate on, target it's background image, then switch it to the image from the appropriate page
  document.getElementById(idString).style.backgroundImage = `url(${imgPick})`;
  //do the same but this time with the anchor tag, changing its href
  document.getElementById(linkId).href = `${linkPick}`
}

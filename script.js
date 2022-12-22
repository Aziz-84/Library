//const inputTitle=document.getElementById('title').value;
const inputTitle=document.getElementById('title').value;
const inputAuthor= document.getElementById('author').value;
const inputPages=document.getElementById("number").value;
const checkboxRead=document.getElementById("read").value;
const submitBtn=document.getElementById("submit");
const bookTitleEl=document.querySelector(".book-title");
const bookAuthorEl=document.querySelector(".book-author");
const bookPagesEl=document.querySelector(".book-pages");
const hasReadEl=document.querySelector(".hasRead");


let myLibrary=[];




submitBtn.addEventListener("click",(e)=>{
 e.preventDefault();
 console.log(e.target)
 const x=inputTitle;
 console.log("X:",x)
 
})


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        console.log(title)
        console.log(author)
        console.log(pages)
        console.log(read)
    }
}

function addBookToLibrary(){

    const book1= new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet")
   
    myLibrary.push(book1)
    console.log(myLibrary)
}



addBookToLibrary();
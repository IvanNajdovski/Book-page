document.addEventListener("DOMContentLoaded", function(){
    function Book (bookTitle, bookAuthor, bookReaded, bookTotal){
        this.title = bookTitle;
        this.author = bookAuthor;
        this.pageAt = bookReaded;
        this.totalPages = bookTotal;
        this.progress = Math.round((bookReaded * 100) /bookTotal);
    }

     var completed = function booksReaded(bookList){
        newarr=[];
        for(let item of bookList){
            if(item.progress === 100){
                newarr.push(item.progress);
            }
        }
        return newarr.length;
    }
    var firstBook = function(bookList){
        newarr=[];
        for(let item of bookList) {
            if (item.progress < 100){
                newarr.push(item.progress);
        }
              newarr.sort();
        }
        return newarr;

    }

var bookList = [
    {
            title: "Lord of the rings",
            author: "J. R. R. Tolkien",
            pageAt: 500,
            totalPages: 500,
            progress: 100,

    },
    {
            title: "Starecot i moreto",
            author: "Ernest Hemingvej",
            pageAt: 98,
            totalPages: 120,
            progress: 82,

    },
    {
        title: "Kasni i porasni",
        author: "Ernest Hemingvej",
        pageAt: 100,
        totalPages: 104,
        progress: 96,

    },

];
    var orderedBooks = firstBook(bookList);
    var theBook =  bookList.filter((val) =>{
        return val.progress === orderedBooks[orderedBooks.length -1]
    });

    var theslowBook =  bookList.filter((val) =>{
        return val.progress === orderedBooks[0]
    })

    console.log(firstBook(bookList));
    //console.log(booksReaded(bookList))
    //HIGHTLIGHTS

    var content = document.getElementById("content")

    var booksCompleted = document.createElement("h3");
    booksCompleted.innerText = `You have readed ${completed(bookList)} books` ;
    content.appendChild(booksCompleted);
    var fastest = document.createElement("h3");
    fastest.innerText = `Fastest book to complete is : ${theBook[0].title}`;
    content.appendChild(fastest);

    var slowest = document.createElement("h3");
    slowest.innerText = `Slowest book to complete is : ${theslowBook[0].title}`;
    content.appendChild(slowest);




    //console.log(theBook[0].title);
    //fastes.innerText = `Book fastest to complete is : ${}`



    //Book ARRAY RENEDERING
var bookTable = document.getElementById("books")


    for (let item of bookList){
    var bookItem = document.createElement("ul");
    var bookProgress = document.createElement("div");
    bookItem.innerHTML = `<li>Book Title</li>
                          <li>${item.title}</li>
                          <li>Book Author</li>
                          <li>${item.author}</li>
                          <li>You are at page number</li>
                          <li>${item.pageAt}</li>
                          <li>This book has</li>
                          <li>${item.totalPages}</li>`

    // bookProgress.setAttribute("value", `${item.progress}`);
    // bookProgress.setAttribute("max", "100");
    bookProgress.classList.add("progress");
    bookProgress.innerHTML = `<label for="file">${item.progress} % Completed</label>
                              <progress value="${item.progress}" max="100">${item.progress}%</progress>`;
    // bookProgress.innerHTML = `<label for="file">0 % Completed</label>
    //                           <progress class="barProgress" value="0" max="100">0 %</progress>`;
        var barProgress = document.getElementsByClassName("barProgress");
    // var barProgress = document.getElementById("barProgress").value = setInterval(function(){
    //     something = 0;
    //     something ++
    //     if(something < item.progress){
    //         clearInterval()
    //     }
    // })

    //     for(var i=0; i< barProgress.length; i++){
    //         barProgress[i] = setInterval(function(){
    //             var something = 0;
    //             something++;
    //             if(something < item.progress){
    //
    //                 barProgress.setAttribute = ("value", something);
    //
    //             }else{
    //                 clearInterval(barProgress[i]);
    //             }
    //
    //
    //             return;
    //             //return something;
    //         }, 100);
    //     }
    //
    // //console.log(loading);
    bookTable.appendChild(bookItem);
    bookTable.appendChild(bookProgress);
}



///BUTTON FUNCTION
    var button = document.getElementById("btn");
    button.addEventListener("click", function( ){

         var bookTitle = prompt("What is the name of the book");
        while ( bookTitle === "") {
            bookTitle = prompt("The book title can not be empty feeld please enter a valid Title");
            if( bookTitle !== ""){
                break;
            }
        }

        var bookAuthor = prompt(`Who is the author of the book "${bookTitle}"`)
        if (bookAuthor === ""){
            bookAuthor = "Anonymous"
        }

        var bookReaded = prompt("What page are you at");

        while ( bookReaded === "" || isNaN(bookReaded)) {
            bookReaded = prompt("You can't enter an empty field or a non number... Please Try Again");
            if( bookReaded !== "" && !isNaN(bookReaded)){
                break;
            }
        }


        var bookTotal = prompt(`How many pages does "${bookTitle}" by "${bookAuthor}" have.`)
        while ( isNaN(bookTotal) || bookTotal === "" || bookTotal < bookReaded) {
            if(isNaN(bookTotal)){
                bookTotal = prompt(" Total pages must be a number. Please Enter Again");
            }
            else if(bookTotal === ""){
                bookTotal = prompt(" Total pages must not be a empty. Please Enter Again");
            }
            else if(bookTotal < bookReaded){
                bookTotal = prompt(" Total pages must not be lower than Readed Pages. Please Enter Again");
            } else{
                break;
            }
            // bookTotal = prompt(" Total pages of the book must be a number and Total pages cannot be lower then Readed Pages. Please Enter Again");
            // if( !isNaN(bookTotal) && bookTotal !== "" && bookTotal >= bookReaded){
            //     break;
            // }
        }


        var newBook = new Book(bookTitle, bookAuthor, bookReaded, bookTotal)
        bookList.push(newBook);
        console.log(bookList);
        var newItem = document.createElement("ul");
        var newProgress = document.createElement("div");

        newProgress.classList.add("progress");
        newProgress.innerHTML = `<label for="file">${bookList[bookList.length -1].progress} % Completed</label>
                              <progress value="${bookList[bookList.length -1].progress}" max="100">${bookList[bookList.length -1].progress}</progress>`;

        newItem.innerHTML = `<li>Book Title</li>
                          <li>${bookList[bookList.length -1].title}</li>
                          <li>Book Author</li>
                          <li>${bookList[bookList.length -1].author}</li>
                          <li>You are at page number</li>
                          <li>${bookList[bookList.length -1].pageAt}</li>
                          <li>This book has</li>
                          <li>${bookList[bookList.length -1].totalPages}</li>`;

        bookTable.appendChild(newItem);
        bookTable.appendChild(newProgress);

        booksCompleted.innerText = `You have readed ${completed(bookList)} books` ;
        content.appendChild(booksCompleted);
    });

});
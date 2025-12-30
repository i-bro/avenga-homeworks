const button = document.getElementById("button");

function checkBook() {
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    readingStatus: document.getElementById("status").value === "true",

    getInfo: function () {
      if (this.readingStatus) {
        return "Already readed '" + this.title + "' by " + this.author + ".";
      } else {
        return "You still need to read '" + this.title + "' by " + this.author + ".";
      }
    }
  };

  console.log(book.getInfo());
}
button.addEventListener("click", checkBook);
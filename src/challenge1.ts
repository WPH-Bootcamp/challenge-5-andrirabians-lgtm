type Book = { title: string; author: string; years: number };

let books: Book[] = [];

function addBook(title: string, author: string, years: number): Book | void {
  if (!title || !author || !years) {
    console.log("All fields are required to add a book.");
    return;
  }
  const inputBook: Book = { title, author, years };
  books.push(inputBook);
  console.log(`Book added: "${title}" by ${author} (${years})`);
  return inputBook;
}

function listBooks() {
  console.log("All Books:");
  books.forEach(({ title, author, years }) => {
    console.log(`- ${title} by ${author} (${years})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }
  let filteredSearch = books.filter((search) => {
    return search.title.includes(title);
  });
  if (filteredSearch.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  } else {
    console.log(`Search Results for "${title}":`);
    filteredSearch.forEach((found) => {
      console.log(`- ${found.title} by ${found.author} (${found.years})`);
    });
  }
}

function runBooks() {
  console.log(`Welcome !`);
  let running = true;
  while (running) {
    console.log(`Books Menu`);
    console.log(`1. Add book`);
    console.log(`2. List added book`);
    console.log(`3. Search Book`);
    let inputMenu = prompt(
      "Please input a command : (example: 1, 2, 3, Add, List, Search)"
    ) as string;
    inputMenu = inputMenu.toLowerCase().trim();
    switch (inputMenu) {
      case "1":
      case "add": {
        const title = prompt("Input Book title : ") as string;
        const author = prompt("Input Author Name : ") as string;
        const years = Number(prompt("Publication Year : ")) as number;
        addBook(title, author, years);
        break;
      }
      case "2":
      case "list":
        listBooks();
        break;
      case "3":
      case "search": {
        const titleSearch = prompt(`Search For : `) as string;
        searchBook(titleSearch);
        break;
      }
      default:
        console.log("Invalid command. Please try again.");
        break;
    }
    let mockExit = prompt(
      "Type 'exit' to quit or press Enter to continue: "
    ) as string;
    if (mockExit.toLowerCase() === "exit") {
      running = false;
      console.log("Goodbye!");
    }
  }
}
if (require.main === module) {
  runBooks();
}

export { addBook, listBooks, searchBook };

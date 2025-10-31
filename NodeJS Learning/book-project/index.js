const express = require("express");
let app = express();

let books = [
    {
        "id": 1,
        "title": "The Quantum Detective",
        "author": "Elara Vance",
        "genre": "Science Fiction",
        "year": 2023,
        "isbn": "978-1234567890",
        "pages": 320,
        "rating": 4.5
    },
    {
        "id": 2,
        "title": "Whispers in the Old Library",
        "author": "Marcus Thorne",
        "genre": "Mystery",
        "year": 2018,
        "isbn": "978-0987654321",
        "pages": 450,
        "rating": 4.1
    },
    {
        "id": 3,
        "title": "The Silent Bard",
        "author": "Anya Sharma",
        "genre": "Fantasy",
        "year": 2021,
        "isbn": "978-2468135790",
        "pages": 612,
        "rating": 4.8
    },
    {
        "id": 4,
        "title": "A History of Forgotten Tea Cups",
        "author": "Dr. Penelope Klink",
        "genre": "Non-Fiction",
        "year": 2015,
        "isbn": "978-1122334455",
        "pages": 198,
        "rating": 3.9
    },
    {
        "id": 5,
        "title": "Echoes of the Last Sunset",
        "author": "Kai Lawson",
        "genre": "Romance",
        "year": 2024,
        "isbn": "978-5544332211",
        "pages": 280,
        "rating": 4.6
    }
]
let nextId = books.length + 1;
app.use(express.json()); //to use get body data


app.get("/read_all_books", (req, res) => {
    res.send(books)
});

app.get("/read_book_by_id/:id", (req, res) => {
    let id = Number(req.params.id)
    const found = books.find(book => book.id === id);
    if (found) {
        res.status(200).json(found);
    }
    else {
        res.status(404).send({ message: "Book not found." });
    }
});

app.get("/read_book_by_title/:title", (req, res) => {
    let title = req.params.title
    const found = books.find(book => book.title === title);
    if (found) {
        res.status(200).json(found);
    }
    else {
        res.status(404).send({ message: "Book not found." });
    }
});



app.post("/create_book", (req, res) => {
    const newBookData = req.body;
    // Create the new book object with a unique ID
    const newBook = {
        id: nextId++,
        ...newBookData // Copies all properties from the request body
    };
    books.push(newBook);
    // 201 Created status code
    res.status(201).json({
        message: "Book successfully added!",
        book: newBook
    });
});


app.put("/update_book/:id",(req,res)=>{
    const id = Number(req.params.id)
    const updatedData = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index!==-1) {
        books[index] = {
            ...books[index], // Keep the original properties (especially the ID)
            ...updatedData        // Apply the new data
        };
        res.status(200).json({ 
            message: `Book updated successfully.`,
            book: books[index]
        });
    }
    else {
        res.status(404).send({ message: "Book id not found." });
    }
});


app.delete("/delete_book",(req,res)=>{
    const id = Number(req.query.id);
    const index = books.findIndex(book => book.id === id);
    if (index!==-1) {
        books = books.filter(book => book.id !== id);
        res.status(200).json({
            message: `Book deleted successfully.`
        });
    }
    else {
        res.status(404).send({ message: "Book id not found." });
    }
});

app.listen("8000")
from fastapi import Body,FastAPI
app = FastAPI()

BOOKS=[
    {"title":"title one", "auther":"auther one", "category":"science"},
    {"title":"title two", "auther":"auther two", "category":"science"},
    {"title":"title three", "auther":"auther two", "category":"history"},
    {"title":"title four", "auther":"auther two", "category":"math"},
    {"title":"title five", "auther":"auther five", "category":"math"},
    {"title":"title six", "auther":"auther six", "category":"math"}
]
@app.get("/books")
async def read_all_books():
    # return {"message": "Hello Uday"}
    return BOOKS

# @app.get("/books/mybook")
# async def read_all_books():
#     return {"book_title":"my favourite book!"}

@app.get("/books/{book_title}")
async def read_book(book_title: str):
    for book in BOOKS:
        if book.get("title ").casefold() == book_title.casefold():
            return book

@app.get("/books/")
async def read_category_by_query(catagory: str):
    books_to_return=[]
    for book in BOOKS:
        if book.get('category').casefold() == catagory.casefold():
            books_to_return.append(book)
    return books_to_return

@app.get(("/books/byauther/{auther}"))
async def book_by_auther(auther: str):
    returnl1 =[]
    for book in BOOKS:
        if book.get("auther").casefold() == auther.casefold():
            returnl1.append(book)
    return returnl1

@app.get("/books/{book_auther}/")
async def read_auther_category_by_query(book_auther: str, category: str):
    books_return=[]
    for book in BOOKS:
        if book.get("category").casefold() == category.casefold() and book.get("auther").casefold() == book_auther.casefold():
            books_return.append(book)
    return books_return

@app.post("/books/create_book")
async def create_book(new_book=Body()):
    BOOKS.append(new_book)

@app.put("/books/update_book")
async def update_book(updated_book=Body()):
    for i in range(len(BOOKS)):
        if BOOKS[i].get("title").casefold() == updated_book.get("title").casefold():
            BOOKS[i] = updated_book

@app.delete("/books/delete_book/{delete_book}")
async def delete_book(book_title: str):
    for i in range(len(BOOKS)):
        if BOOKS[i].get("title").casefold() == book_title.casefold():
            BOOKS.pop(i)
            break
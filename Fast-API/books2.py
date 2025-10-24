from fastapi import FastAPI , Path , Query, HTTPException
from pydantic import BaseModel, Field
from typing import Optional
from starlette import status

app = FastAPI()

class Book:
    id: str
    title : str 
    auther : str
    description : str
    rating : int
    publish_year : int
    
    def __init__(self, id , title,auther, description, rating, publish_year):
        self.id = id
        self.title= title
        self.auther = auther
        self.description = description
        self.rating = rating
        self.publish_year = publish_year
    
class BookRequest(BaseModel):
    id: Optional[int] = Field(description="iD is not needed on create ",default= None)
    title: str = Field(min_length=3)
    auther: str =Field(min_length=1)
    description: str =Field(min_length=1,max_length=100)
    rating: int =Field(gt=-1 ,lt=6)
    publish_year : int = Field(gt =1999, lt=2031)

    model_config ={
        "json_schema_extra":{
            "example" : {
                "title" : "A new Book",
            "auther" : "Uday",
            "Description":"A new description of a book",
            "Rating": 5,
            "Publish_Year": 2012
            }
        }
    }



BOOKS = [
    Book(1,"computer science pro", "codingwithroby","a nice book",5,2012),
    Book(2,"be fast with fastapi", "codingwithroby","a great book",5,2013),
    Book(3,"master endpoints", "codingwithroby","a awesome book",5,2012),
    Book(4,"HP1", "auther 1","book description",2,2015),
    Book(5,"HP2", "auther 2","book description",3,2015),
    Book(6,"HP3", "auther 3","book description",1,2024),
]

@app.get("/books",status_code=status.HTTP_200_OK)
async def read_all_boooks():
    return BOOKS


@app.get("/books/{book_id}",status_code=status.HTTP_200_OK)
async def read_book(book_id : int = Path(gt=0)):
    for book in BOOKS:
        if book.id == book_id:
            return book
    raise HTTPException(status_code=404,detail="item not found")

@app.get("/book/",status_code=status.HTTP_200_OK)
async def read_book_rating(book_rating: int = Query(gt=-1,lt=6)):
    book_return =[]
    for book in BOOKS:
        if book.rating == book_rating:
            book_return.append(book)
    return book_return

@app.get("/books/book_by_year/",status_code=status.HTTP_200_OK)
async def book_by_publish_year(publish_year : int = Query(gt =1999, lt=2031)):
    return_book_year=[]
    for book in BOOKS:
        if book.publish_year == publish_year:
            return_book_year.append(book)
    return return_book_year
 
@app.post("/create-book",status_code=status.HTTP_201_CREATED)
async def create_book(book_request: BookRequest): # pyright: ignore[reportInvalidTypeForm]
    # new_book= Book(**book_request.dict())
    new_book= Book(**book_request.model_dump())
    BOOKS.append(find_book_id(new_book))

@app.put("/books/update_book",status_code=status.HTTP_204_NO_CONTENT)
async def update_book(book : BookRequest):
    book_changed=False
    for i in range(len(BOOKS)):
        if BOOKS[i].id == book.id:
            BOOKS[i]=book
            book_changed=True
    if not book_changed:
        raise HTTPException(status_code=404, detail="item not found")

@app.delete("/books/{book_id}",status_code=status.HTTP_204_NO_CONTENT)
async def delete_book(book_id : int= Path(gt=0)):
    book_changed=False
    for i in range(len(BOOKS)):
        if BOOKS[i].id == book_id:
            BOOKS.pop(i)
            book_changed=True
            break
    if not book_changed:
        raise HTTPException(status_code=404,detail="item not found")



def find_book_id(book :Book):
    # if len(BOOKS) >0:
    #     book.id = BOOKS[-1].id +1
    # else:
    #     book.id=1

    book.id= 1 if len(BOOKS)==0 else BOOKS[-1].id +1
    return book
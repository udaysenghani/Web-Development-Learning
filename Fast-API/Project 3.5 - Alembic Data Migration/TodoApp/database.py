from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATABASE_URL ='sqlite:///./todosapp.db'

# 'postgresql://postgres:uday@localhost/TodoApplicationDatabase'
# "mysql+pymysql://root:@localhost:3306/TodoApplicationDatabase"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

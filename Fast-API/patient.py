from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

class Patient:
    id : int
    name : str
    disces : str
    age : int
    gender : str

    def __init__(self,id, name , diseces, age , gender):
        self.id = id
        self.name = name
        self.diesces = diseces
        self.age = age
        self.gender = gender
    
class PatientRequest(BaseModel):
    id : int = Field(gt=0)
    name: str =Field(min_length=3)
    diseces: str =Field(min_length=3)
    age: int = Field(lt=100,  gt=5)
    gender: str


PATIENT = [
    Patient(1,"HEET", "Headache", 25,"Male"),
    Patient(2,"Rushit", "stomochache", 20,"Male"),
    Patient(3,"Priya", "skinproblem", 18,"Female"),
    Patient(4,"Yash", "eyeahe", 20,"Male"),
    Patient(5,"Krishna", "headache", 21,"Female"),
    Patient(6,"janvi", "headache", 29,"Female")
]

@app.get("/patient")
async def read_all_patient():
    return PATIENT

@app.get("/patient/{patient_id}/")
async def patient_by_id(patient_id: int):
    for p in PATIENT:
        if p.id == patient_id:
            return p

@app.get("/patient/")
async def patient_by_age(age: int):
    return_list=[]
    for p in PATIENT:
        if p.age == age:
            return_list.append(p)
    return return_list

@app.post("/patient")
async def create_patient(patient_request : PatientRequest):
    new_patient= Patient(**patient_request.model_dump())
    PATIENT.append(new_patient)
# my_vehicle={
#     "model": "Ford",
#     "make" : "Explorer",
#     "year" : 2018,
#     "milege" : 40000
# }
# for x,y in my_vehicle.items():
#     print(f"{x} : {y}")

def data(firstname, lastname, age):
    d1 ={
        "firstname":firstname,
        "lastname":lastname,
        "age":age
    }
    return d1

print(data("uday","Senghani",22))
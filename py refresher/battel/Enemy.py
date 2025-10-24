class Enemy:
    # type_of_enemy: str 
    # health_points: int = 10
    # attack_damage: int = 1
    def __init__(self,type_of_enemy,health_points,attack_damage):
        self.__type_of_enemy = type_of_enemy 
        self.health_points=health_points
        self.attack_damage=attack_damage
    
    def talk(self):
        print(f"i am a {self.__type_of_enemy}. be prepaired to fight!")

    def walk_forward(self):
        print(f"{self.__type_of_enemy} is moves closer to you")

    def attack(self):
        print(f"{self.__type_of_enemy} to damaged you {self.attack_damage}")

    def score(self):
        print(f"health score is {self.health_points}")


    def set_typeofenemy(self,typeofenemy):
        self.__type_of_enemy=typeofenemy

    def special_attack(self):
        print("enemy has no special attack.")

    def get_typeofenemy(self):
        return self.__type_of_enemy 
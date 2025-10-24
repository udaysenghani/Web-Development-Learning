from Enemy import *
class zombbie(Enemy):
    def __init__(self,health_points,attack_damage):
        super().__init__(type_of_enemy="zombbie",
                         health_points=health_points,
                         attack_damage=attack_damage)
    def talk(self):
        print("from the zombie class")
    def spread_desies(self):
        print("i can spread the diesese")
        
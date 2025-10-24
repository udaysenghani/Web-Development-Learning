from Enemy import *
import random


class zombbie(Enemy):
    def __init__(self,health_points,attack_damage):
        super().__init__(type_of_enemy="zombbie",
                         health_points=health_points,
                         attack_damage=attack_damage)
    def talk(self):
        print("from the zombie class")

    def spread_desies(self):
        print("i can spread the diesese")
        
    def special_attack(self):
        did_special_attack_work = random.random() < 0.50
        if did_special_attack_work:
            self.health_points+=2
            print("zombie regenerate 2 hp!")
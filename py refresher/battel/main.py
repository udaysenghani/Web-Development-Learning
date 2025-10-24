from Enemy import *
from zombbie import *
from ogre import *

def battel(e1: Enemy,e2: Enemy):
    e1.talk()
    e2.talk()

    while e1.health_points>0 and e2.health_points>0:
        print("-------------------")
        e1.special_attack()
        e2.special_attack()
        print(f"{e1.get_typeofenemy()}: {e1.health_points} HP left ")
        print(f"{e2.get_typeofenemy()}: {e2.health_points} HP left ")
        e2.attack()
        e1.health_points -= e2.attack_damage

        e1.attack()
        e2.health_points -= e1.attack_damage

    print("-------------")   
    if e1.health_points>0:
        print(f'{e1.get_typeofenemy()} is wins!')
    else:
        print(f"{e2.get_typeofenemy()} is wins! ")

zombi = zombbie(10,1)
# print(zombi.talk())
# print(zombi.get_typeofenemy())
# print(zombi.spread_desies())
# print("_________________")
ogree = ogre(20,10)
# print(ogree.get_typeofenemy())
# print(ogree.attack())
# print(ogree.talk())

battel(zombi,ogree)
# battel(ogree)
from Weapon import *
from Hero import *
from Enemy import *
from zombbie import *
def hero_battel(hero: Hero , enemy: Enemy):
    

    while hero.health_points>0 and Enemy.health_points>0:
        print("-------------------")
        hero.special_attack()
        enemy.special_attack()
        print(f"{hero.get_typeofenemy()}: {hero.health_points} HP left ")
        print(f"{enemy.get_typeofenemy()}: {enemy.health_points} HP left ")
        enemy.attack()
        hero.health_points -= enemy.attack_damage

        hero.attack()
        enemy.health_points -= hero.attack_damage
 
    print("-------------")   
    if hero.health_points>0:
        print(f'{hero.get_typeofenemy()} is wins!')
    else:
        print(f"{enemy.get_typeofenemy()} is wins! ")

zombi = zombbie(10,1)
# print(zombi.talk())
# print(zombi.get_typeofenemy())
# print(zombi.spread_desies())
# print("_________________")


# ogree = ogre(20,10)
# print(ogree.get_typeofenemy())
# print(ogree.attack())
# print(ogree.talk())
hero = Hero(10,1)
hero_battel(hero,zombi)
# battel(ogree) 
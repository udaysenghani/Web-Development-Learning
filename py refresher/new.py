from Enemy import *
from zombbie import *
from ogre import *

def battel(e: Enemy):
    e.talk()
    e.attack()

zombi = zombbie(10,1)
# print(zombi.talk())
# print(zombi.get_typeofenemy())
# print(zombi.spread_desies())
# print("_________________")
ogree = ogre(100,10)
# print(ogree.get_typeofenemy())
# print(ogree.attack())
# print(ogree.talk())

battel(zombi)
battel(ogree)
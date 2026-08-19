from numpy import random
import time
import os
import math
import numpy as np
import platform


                                     # How to commit (also push) tutorial incase i forget:
                                     # 1: git commit -m "message here"
                                     # 2: git push
cd = .5
times_gambled = 0
amount = 1
os_info = platform.uname()
roll = "none"
oneoutof = "none"


def os_check():
    if platform.system() == "Windows":
        os.system('cls')
    elif platform.system() == "Linux":
        os.system('clear')
    elif platform.system() == "Darwin":
        os.system("clear && printf '\e[3J'")
        os.system('clear')   
    else:
        print('what os are u using bruh')


#----------------------
dirt_count = 0
oak_log_count = 0
cobblestone_count = 0
wool_count = 0
snow_count = 0
lapiz_Lazuli_count = 0
quartz_count = 0
coal_count = 0
copper_count= 0
iron_block_count = 0
gold_block_count = 0
furnace_count = 0
stonecutter_count = 0
chest_count = 0
hopper_count = 0
anvil_count = 0
barrel_count = 0
diamond_count = 0
emerald_count = 0
crafting_table_count = 0
#----------------------



def item_check():
    print(f"Dirt count: {dirt_count}")
    print(f"Oak Log count: {oak_log_count}")
    print(f"Cobblestone count: {cobblestone_count}")
    print(f"Wool count: {wool_count}")
    print(f"Snow count:{snow_count}")
    print(f"Lapiz Lazuli count: {lapiz_Lazuli_count}")
    print(f"Quartz count: {quartz_count}")
    print(f"Crafting Table count: {crafting_table_count}")
    print(f"Coal count: {coal_count}")
    print(f"Copper count: {copper_count}")
    print(f"Iron Block count: {iron_block_count}")
    print(f"Gold Block count: {gold_block_count}") 
    print(f"Furnace count: {furnace_count}")
    print(f"Stonecutter count: {stonecutter_count}")
    print(f"Chest count: {chest_count}")
    print(f"Hopper count: {hopper_count}")
    print(f"Anvil count: {anvil_count}")
    print(f"Barrel count: {barrel_count}")
    print(f"Diamond count: {diamond_count}")
    print(f"Emerald count: {emerald_count}")


# crafting recipes, potions (50 pulls each):
# 1/2 2x Luck Potion (100 Dirt, 32 Glass) (Shop Cooldown: none)
# 1/4 2x Luck Potion (64 Oak Logs (or 256 Oak Planks), 32 Glass) (Shop Cooldown: none)
# 1/8 2x Luck Potion (64 Wool, 64 Oak Logs 32 Glass) (Shop Cooldown: 100 Pulls)
# 1/16 2x Luck Potion (32 Copper, 64 Oak Logs 32 Glass) (Shop Cooldown: 500 Pulls)
# 1/32 2x Luck Potion (32 Amethyst, 64 Oak Logs, 32 Glass) (Shop Cooldown: 1000 Pulls)
# 1/64 2x Luck Potion (40 Diamond, 32 Glass) (Shop Cooldown: 1000 Pulls) 

# crafting recipes, tools
# Wooden Pickaxe (20 Durability, 5 Oak Logs)
# Wooden Axe (20 Durability, 5 Oak Logs)
# Stone Axe (100 Durability, 5 Cobblestone, 5 Sticks)
# Stone Pickaxe (100 Durability, 5 Cobblestone, 5 Sticks)
# Iron Pickaxe (750 Durability, 10 Iron, 10 Sticks)
# Iron Axe (750 Durability, 10 Iron, 10 Sticks)
# Gold Pickaxe (500 Durability, 10 Gold, 10 Sticks)
# Gold Axe (500 Durability, 10 Gold, 10 Sticks)
# Diamond Pickaxe (1000 Durability, 30 Diamond, 64 Sticks)
# Diamond Axe (1000 Durability, 30 Diamond, 64 Sticks)

# crafting recipies, normal items
# Oak Planks x4 (1 Oak Log, 1 Axe Hit)
# Sticks x4 (1 Oak Plank, 4 Axe Hits)

# crafting recipes, permanant effects
# 2x Luck (Toggleable)



main = [
'1/2',
"1/4",
"1/8",
"1/16",
"1/32", 
"1/64"
]
# probability = np.array([.50, .25, .125, .0625, .03125, .03125]) # THIS IS THE PROBABILITY OF THE ITEMS!!!!
probability = np.array([.10, .10, .10, .10, .50, .10])
probability /= probability.sum()  # normalize
print(probability)
probabilitytotal = sum(probability)
#----------------------

#----------------------
two = np.array([
'Dirt',
'Cobblestone'

])
four = np.array([
"Oak Log"


])
eight = np.array([
"Wool",
"Snow",
"Lapiz Lazuli",
"Quartz",
"Coal"

])
sixteen = np.array([
"Copper",
"Iron Block",
"Gold Block"

])
thirtytwo = np.array([
'Furnace',
'Stonecutter',
'Chest',
'Hopper',
'Anvil',
'Barrel',
'Crafting Table'


])
sixtyfour = np.array([
"Diamond",
"Emerald"
])


increment_map = {
    "Dirt":"dirt_count",
    "Oak Log":"oak_log_count",
    "Cobblestone":"cobblestone_count",
    "Wool":"wool_count",
    "Snow":"snow_count",
    "Lapiz Lazuli":"lapiz_Lazuli_count",
    "Quartz":"quartz_count",
    "Coal":"coal_count",
    "Copper":"copper_count",
    "Iron Block":"iron_block_count" ,
    "Gold Block":"gold_block_count" ,
    "Furnace":"furnace_count",
    "Stonecutter":"stonecutter_count",
    "Chest":"chest_count",
    "Hopper":"hopper_count",
    "Anvil":"anvil_count",
    "Barrel":"barrel_count",
    "Diamond":"diamond_count",
    "Emerald":"emerald_count",
    "Crafting Table":"crafting_table_count"
    

}
#----------------------





while True:
    try:
        os_check()
        print("Fake RNG")
        print ('0 - exit')
        print ('1 - gamble')
        print ('2 - check items')
        print ('19 - save progress')
        print ('1567 - erase save')
        print('')
        print('times gambled: '+str(times_gambled))
        
        # print("Probability (should equal to 1 or 1.0): "+str(probabilitytotal))
        # the line above is just for test reasons
        print('Most Recent Roll: '+str(roll))
        choice = input('what u want to do: ')
        
        
        if int(choice) == 1:
            
            #----------------------
            roll = np.random.choice(main,p=probability, replace=True,size=amount)
                # Mapping roll values to their corresponding choice lists
            choices_map = {
            "1/2": two,
            "1/4": four,
            "1/8": eight,
            "1/16": sixteen,
            "1/32": thirtytwo,
            "1/64": sixtyfour
            }

            roll_str = str(roll[0]) # Cvonerts the array value (the item name) to a string cause if i dont it gives me errors
            if roll_str in choices_map:
                oneoutof = roll  # Assign roll value to oneoutof before overriding it to the actual choice
                roll = np.random.choice(choices_map[roll_str], replace=True, size=amount)
                roll_actual = str(roll[0])
            #----------------------
            if roll_actual in increment_map:
                variable_name = increment_map[roll_actual] # turns whats inside roll_actual into a variable to add 1 to it depending on what it pulled
                
                globals()[variable_name] += 1  # Increment the correct variable dynamically
            print(roll_actual)
            times_gambled = times_gambled + amount
            os_check()
            print('Rolling...')
            time.sleep(cd)
            print("You have gotten: ["+str(*roll) + " - " + str(*oneoutof)+"]")
            time.sleep(cd)
            input("Click enter to continue...")
            continue
        
        if int(choice) == 0:
            print('bai')
            break
        if int(choice) == 2:
            os_check()
            item_check()
            print('')
            input("Click enter to return...")
            continue
        if int(choice) == 3:
            if crafting_table_count >= 1:
                print('hi')
            else:
                print('you dont have a crafting table')
                input("Click enter to return...")
        if int(choice) == 19:
            print('placeholder')
            time.sleep(1)
        if int(choice) == 1567:
            print('placeholder')
            continue
        else:
            continue
        break
    except ValueError:
        continue
        
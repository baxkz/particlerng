import json
import os
import random
import time
from pathlib import Path

SAVE_FILE = Path(__file__).with_name("rng_save.json")
GAME_TITLE = "MineRNG: Block Drop Simulator"

ITEMS = [
    "Dirt",
    "Oak Log",
    "Cobblestone",
    "Stone",
    "Wool",
    "Snow",
    "Lapis Lazuli",
    "Quartz",
    "Coal",
    "Copper",
    "Iron Ore",
    "Gold Ore",
    "Redstone",
    "Emerald",
    "Diamond",
    "Amethyst",
    "Obsidian",
    "Glass",
    "Sand",
    "Bone",
    "Stick",
    "Apple",
    "Torch",
    "Iron Ingot",
    "Gold Ingot",
    "Furnace",
    "Stonecutter",
    "Chest",
    "Hopper",
    "Anvil",
    "Barrel",
    "Crafting Table",
    "Iron Pickaxe",
    "Stone Pickaxe",
    "Golden Apple",
    "Luck Potion",
    "Energy Drink",
    "Chaos Orb",
    "Fortune Wax",
    "Botania Petal",
    "Thaumium Ingot",
    "Ender Pearl",
    "AE2 Silicon",
    "Thermal Core",
    "Mystic Shard",
    "Ancient Relic",
    "Celestial Dust",
    "Prismite",
    "Dragon Scale",
    "Legendary Orb",
    "Void Ore",
    "Chrono Crystal",
    "Nova Essence",
    "Starfall Core",
    "Eternal Rune",
    "Time Fragment",
    "Null Prism",
    "Mythic Star",
    "Infinity Charm",
    "Cosmic Engine",
    "Arcane Heart",
    "Omega Core",
    "Celestial Crown",
    "Aether Bloom",
    "Hellfire Core",
    "Astral Heart",
    "Doom Prism",
    "Lunar Crown",
    "Eclipse Sigil",
    "Universe Key",
    "Void Crown",
    "Titan Star",
    "Miracle Engine",
    "Godforge Relic",
    "World Core",
    "Horizon Jewel",
    "Eternal Echo",
    "Primordial Crown",
    "Soul of the Sky",
    "Final Horizon",
]

DISPLAY_ITEMS = [
    "Dirt",
    "Oak Log",
    "Cobblestone",
    "Stone",
    "Wool",
    "Snow",
    "Lapis Lazuli",
    "Quartz",
    "Coal",
    "Copper",
    "Iron Ore",
    "Gold Ore",
    "Redstone",
    "Emerald",
    "Diamond",
    "Amethyst",
    "Obsidian",
    "Glass",
    "Sand",
    "Bone",
    "Stick",
    "Apple",
    "Torch",
    "Iron Ingot",
    "Gold Ingot",
    "Golden Apple",
    "Luck Potion",
    "Energy Drink",
    "Chaos Orb",
    "Fortune Wax",
    "Mystic Shard",
    "Ancient Relic",
    "Celestial Dust",
    "Prismite",
    "Dragon Scale",
    "Legendary Orb",
    "Void Ore",
    "Chrono Crystal",
    "Nova Essence",
    "Starfall Core",
    "Eternal Rune",
    "Time Fragment",
    "Null Prism",
    "Mythic Star",
    "Infinity Charm",
    "Cosmic Engine",
    "Arcane Heart",
    "Omega Core",
    "Celestial Crown",
    "Aether Bloom",
    "Hellfire Core",
    "Astral Heart",
    "Doom Prism",
    "Lunar Crown",
    "Eclipse Sigil",
    "Universe Key",
    "Void Crown",
    "Titan Star",
    "Miracle Engine",
    "Godforge Relic",
    "World Core",
    "Horizon Jewel",
    "Eternal Echo",
    "Primordial Crown",
    "Soul of the Sky",
    "Final Horizon",
]

TIER_ITEMS = {
    "1/2": ["Dirt", "Cobblestone", "Oak Log", "Sand", "Bone", "Stone"],
    "1/4": ["Wool", "Snow", "Quartz", "Coal", "Copper", "Redstone"],
    "1/8": ["Lapis Lazuli", "Iron Ore", "Gold Ore", "Glass", "Stick", "Apple"],
    "1/16": ["Furnace", "Stonecutter", "Chest", "Hopper", "Anvil", "Barrel", "Crafting Table"],
    "1/32": ["Emerald", "Diamond", "Amethyst", "Obsidian", "Iron Ingot", "Gold Ingot", "Torch"],
    "1/64": ["Luck Potion", "Golden Apple", "Iron Pickaxe", "Stone Pickaxe", "Energy Drink", "Chaos Orb", "Botania Petal"],
    "1/128": ["Mystic Shard", "Ancient Relic", "Celestial Dust", "Prismite", "Thaumium Ingot", "AE2 Silicon"],
    "1/256": ["Dragon Scale", "Legendary Orb", "Void Ore", "Chrono Crystal", "Ender Pearl", "Thermal Core"],
    "1/512": ["Nova Essence", "Starfall Core", "Eternal Rune", "Time Fragment", "Botania Petal", "AE2 Silicon"],
    "1/1024": ["Null Prism", "Mythic Star", "Infinity Charm", "Cosmic Engine"],
    "1/2048": ["Arcane Heart", "Omega Core", "Fortune Wax", "Thaumium Ingot"],
    "1/4096": ["Celestial Crown", "Aether Bloom", "Hellfire Core"],
    "1/8192": ["Astral Heart", "Doom Prism", "Lunar Crown"],
    "1/16384": ["Eclipse Sigil", "Universe Key", "Void Crown"],
    "1/32768": ["Titan Star", "Miracle Engine", "Godforge Relic"],
    "1/65536": ["World Core", "Horizon Jewel", "Eternal Echo"],
    "1/131072": ["Primordial Crown", "Soul of the Sky", "Final Horizon"],
}

TIER_WEIGHTS = {
    "1/2": 1000000,
    "1/4": 400000,
    "1/8": 160000,
    "1/16": 50000,
    "1/32": 18000,
    "1/64": 5000,
    "1/128": 1500,
    "1/256": 450,
    "1/512": 140,
    "1/1024": 40,
    "1/2048": 12,
    "1/4096": 4,
    "1/8192": 2,
    "1/16384": 1,
    "1/32768": 1,
    "1/65536": 1,
    "1/131072": 1,
}

UPGRADE_CATALOG = {
    "luck": {
        "name": "Lucky Charm",
        "description": "Boosts the chance of landing rare tiers.",
        "base_cost": {"Dirt": 20, "Bone": 10, "Coal": 5},
    },
    "speed": {
        "name": "Turbo Spinner",
        "description": "Shortens the suspense delay between rolls.",
        "base_cost": {"Copper": 8, "Glass": 6, "Stone": 10},
    },
    "bulk": {
        "name": "Bulk Roller",
        "description": "Raises the maximum number of rolls you can do at once.",
        "base_cost": {"Emerald": 1, "Gold Ingot": 5, "Diamond": 1},
    },
    "jackpot": {
        "name": "Golden Lens",
        "description": "Improves the odds of 1/32 and 1/64 rewards.",
        "base_cost": {"Diamond": 2, "Emerald": 2, "Luck Potion": 1},
    },
    "potion_duration": {
        "name": "Potion Flasks",
        "description": "Increases the number of rolls covered by each Luck Potion by +5.",
        "base_cost": {"Glass": 12, "Copper": 10, "Emerald": 1},
    },
}

USABLES = {
    "Luck Potion": {
        "name": "Luck Potion",
        "description": "Triple luck for the next 10 rolls, plus any potion upgrade bonus.",
    },
    "Energy Drink": {
        "name": "Energy Drink",
        "description": "Speeds up the next 3 rolls and increases your max roll count temporarily.",
    },
    "Chaos Orb": {
        "name": "Chaos Orb",
        "description": "Forces a rare-tier hit over the next 3 rolls.",
    },
    "Fortune Wax": {
        "name": "Fortune Wax",
        "description": "Doubles rewards for the next 5 rolls.",
    },
}

RECIPES = {
    "1": {
        "name": "Glass x4",
        "description": "Smelt sand into glass for upgrades.",
        "cost": {"Sand": 4},
        "reward": {"Glass": 4},
    },
    "2": {
        "name": "Torch x4",
        "description": "Useful light for long nights.",
        "cost": {"Oak Log": 1, "Coal": 1},
        "reward": {"Torch": 4},
    },
    "3": {
        "name": "Stone Pickaxe",
        "description": "A sturdier tool for deeper mining.",
        "cost": {"Cobblestone": 6, "Stick": 3, "Coal": 1},
        "reward": {"Stone Pickaxe": 1},
    },
    "4": {
        "name": "Iron Pickaxe",
        "description": "A stronger mining tool.",
        "cost": {"Iron Ingot": 5, "Stick": 3, "Coal": 2},
        "reward": {"Iron Pickaxe": 1},
    },
    "5": {
        "name": "Golden Apple",
        "description": "A rare snack with strong bonuses.",
        "cost": {"Apple": 1, "Gold Ingot": 2, "Emerald": 1},
        "reward": {"Golden Apple": 1},
    },
    "6": {
        "name": "Luck Potion",
        "description": "Boosts the odds for your next run.",
        "cost": {"Emerald": 2, "Glass": 2, "Diamond": 1},
        "reward": {"Luck Potion": 1},
    },
}


def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def default_inventory():
    return {item: 0 for item in ITEMS}


def load_game():
    default_state = {
        "inventory": default_inventory(),
        "times_gambled": 0,
        "last_roll": "None",
        "last_tier": "None",
        "upgrades": {key: 0 for key in UPGRADE_CATALOG},
        "active_effects": {
            "luck_potion_rolls": 0,
            "energy_drink_rolls": 0,
            "chaos_orb_rolls": 0,
            "fortune_wax_rolls": 0,
        },
    }

    if not SAVE_FILE.exists():
        return default_state

    try:
        with SAVE_FILE.open("r", encoding="utf-8") as handle:
            data = json.load(handle)
    except (json.JSONDecodeError, OSError):
        return default_state

    inventory = default_inventory()
    loaded_inventory = data.get("inventory", {})
    for item, count in loaded_inventory.items():
        if item in inventory:
            inventory[item] = int(count)

    upgrades = {key: 0 for key in UPGRADE_CATALOG}
    for key, value in data.get("upgrades", {}).items():
        if key in upgrades:
            upgrades[key] = int(value)

    active_effects = {
        "luck_potion_rolls": 0,
        "energy_drink_rolls": 0,
        "chaos_orb_rolls": 0,
        "fortune_wax_rolls": 0,
    }
    for key, value in data.get("active_effects", {}).items():
        if key in active_effects:
            active_effects[key] = int(value)

    return {
        "inventory": inventory,
        "times_gambled": int(data.get("times_gambled", 0)),
        "last_roll": str(data.get("last_roll", "None")),
        "last_tier": str(data.get("last_tier", "None")),
        "upgrades": upgrades,
        "active_effects": active_effects,
    }


def save_game(game_state):
    payload = {
        "inventory": game_state["inventory"],
        "times_gambled": game_state["times_gambled"],
        "last_roll": game_state["last_roll"],
        "last_tier": game_state["last_tier"],
        "upgrades": game_state["upgrades"],
        "active_effects": game_state["active_effects"],
    }
    with SAVE_FILE.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=2)


def print_inventory(game_state):
    clear_screen()
    print("=== Inventory ===")
    inventory = game_state["inventory"]
    shown = False

    for name in DISPLAY_ITEMS:
        count = inventory.get(name, 0)
        if count <= 0:
            continue
        shown = True
        print(f"{name:<22} {count}")

    if not shown:
        print("Your bag is empty. Head to the gambling table.")

    total_items = sum(inventory.get(name, 0) for name in DISPLAY_ITEMS)
    print(f"\nTotal items collected: {total_items}")
    input("\nPress Enter to return to the menu...")


def can_afford(inventory, cost):
    for item, needed in cost.items():
        if inventory.get(item, 0) < needed:
            return False
    return True


def apply_cost(inventory, cost):
    for item, needed in cost.items():
        inventory[item] -= needed


def apply_reward(inventory, reward):
    for item, amount in reward.items():
        inventory[item] += amount


def show_crafting_menu(game_state):
    while True:
        clear_screen()
        print("=== Crafting Bench ===")
        for key, recipe in RECIPES.items():
            print(f"{key}) {recipe['name']} - {recipe['description']}")
            print(f"   Cost: {recipe['cost']}")
            print(f"   Reward: {recipe['reward']}")
        print("0) Back")

        choice = input("\nChoose a recipe: ").strip().lower()
        if choice in ("0", "b", "back"):
            return

        recipe = RECIPES.get(choice)
        if recipe is None:
            print("Invalid option. Try again.")
            time.sleep(0.8)
            continue

        inventory = game_state["inventory"]
        if not can_afford(inventory, recipe["cost"]):
            print("You do not have the required items for that recipe.")
            input("Press Enter to continue...")
            continue

        apply_cost(inventory, recipe["cost"])
        apply_reward(inventory, recipe["reward"])
        print(f"You crafted {recipe['name']}!")
        input("Press Enter to continue...")


def get_upgrade_cost(key, level):
    base_cost = UPGRADE_CATALOG[key]["base_cost"]
    return {item: amount * (level + 1) for item, amount in base_cost.items()}


def get_max_rolls(game_state):
    return 10 + game_state["upgrades"].get("bulk", 0) * 2


def get_roll_delay(game_state):
    speed_level = game_state["upgrades"].get("speed", 0)
    delay = 0.8 - (0.1 * speed_level)
    if game_state["active_effects"].get("energy_drink_rolls", 0) > 0:
        delay *= 0.4
    return max(0.08, delay)


def get_tier_weights(game_state):
    weights = dict(TIER_WEIGHTS)
    luck = game_state["upgrades"].get("luck", 0)
    jackpot = game_state["upgrades"].get("jackpot", 0)
    active = game_state["active_effects"]

    boosted = {}
    for tier, base in weights.items():
        modifier = 1 + (luck * 0.12)
        if active.get("luck_potion_rolls", 0) > 0:
            modifier *= 3
        if tier in ("1/32", "1/64", "1/128", "1/256", "1/512"):
            modifier += (jackpot * 0.25) + (luck * 0.08)
        boosted[tier] = max(1, int(round(base * modifier)))

    return boosted


def get_potion_duration(game_state):
    return 10 + (game_state["upgrades"].get("potion_duration", 0) * 5)


def play_roll_animation(game_state):
    clear_screen()
    delay = get_roll_delay(game_state)
    print("The machine hums to life...")
    for frame in ["|", "/", "-", "\\", "|"]:
        print(f"Rolling {frame}", end="\r", flush=True)
        time.sleep(delay)
    print("\nRevealing rewards...".ljust(30))
    time.sleep(delay * 0.8)


def show_upgrade_menu(game_state):
    while True:
        clear_screen()
        print("=== Upgrade Lab ===")
        for idx, (key, value) in enumerate(UPGRADE_CATALOG.items(), start=1):
            level = game_state["upgrades"].get(key, 0)
            cost = get_upgrade_cost(key, level)
            print(f"{idx}) {value['name']} (Lvl {level})")
            print(f"   {value['description']}")
            print(f"   Cost: {cost}")
        print("0) Back")

        choice = input("\nChoose an upgrade: ").strip().lower()
        if choice in ("0", "b", "back"):
            return

        selection = None
        for idx, key in enumerate(UPGRADE_CATALOG, start=1):
            if str(idx) == choice:
                selection = key
                break
        if selection is None:
            print("Invalid upgrade choice.")
            time.sleep(0.8)
            continue

        level = game_state["upgrades"].get(selection, 0)
        cost = get_upgrade_cost(selection, level)
        inventory = game_state["inventory"]
        if not can_afford(inventory, cost):
            print("You do not have enough materials for that upgrade.")
            input("Press Enter to continue...")
            continue

        apply_cost(inventory, cost)
        game_state["upgrades"][selection] = level + 1
        print(f"Upgrade complete: {UPGRADE_CATALOG[selection]['name']} is now level {game_state['upgrades'][selection]}")
        input("Press Enter to continue...")


def use_usable(game_state, item_name):
    inventory = game_state["inventory"]
    if inventory.get(item_name, 0) <= 0:
        print(f"You do not own any {item_name}.")
        return

    inventory[item_name] -= 1
    active = game_state["active_effects"]

    if item_name == "Luck Potion":
        duration = get_potion_duration(game_state)
        active["luck_potion_rolls"] = max(active["luck_potion_rolls"], duration)
        print(f"Luck Potion activated. Triple luck for the next {duration} rolls!")
    elif item_name == "Energy Drink":
        active["energy_drink_rolls"] = max(active["energy_drink_rolls"], 3)
        print("Energy Drink activated. Your next 3 rolls are faster and more efficient!")
    elif item_name == "Chaos Orb":
        active["chaos_orb_rolls"] = max(active["chaos_orb_rolls"], 3)
        print("Chaos Orb activated. A rare tier is guaranteed over the next 3 rolls!")
    elif item_name == "Fortune Wax":
        active["fortune_wax_rolls"] = max(active["fortune_wax_rolls"], 5)
        print("Fortune Wax activated. Double rewards on the next 5 rolls!")
    else:
        print(f"{item_name} can not be used yet.")

    input("Press Enter to continue...")


def show_usables_menu(game_state):
    while True:
        clear_screen()
        print("=== Usables ===")
        has_any = False
        inventory = game_state["inventory"]
        for item_name in USABLES:
            count = inventory.get(item_name, 0)
            if count > 0:
                has_any = True
                print(f"{item_name} x{count} - {USABLES[item_name]['description']}")
        if not has_any:
            print("You have no usable items right now.")
        print("0) Back")
        choice = input("\nChoose an item to use: ").strip()
        if choice in ("0", "b", "back"):
            return

        valid = None
        for item_name in USABLES:
            if choice.lower() == item_name.lower():
                valid = item_name
                break

        if valid is None:
            print("That item is not available.")
            time.sleep(0.7)
            continue

        if inventory.get(valid, 0) <= 0:
            print(f"You do not own any {valid}.")
            input("Press Enter to continue...")
            continue

        use_usable(game_state, valid)
        return


def gamble(game_state, rolls=1):
    inventory = game_state["inventory"]
    results = []
    active = game_state["active_effects"]
    perks = get_tier_weights(game_state)

    for index in range(rolls):
        if active["chaos_orb_rolls"] > 0:
            chaos_tiers = ["1/64", "1/128", "1/256", "1/512"]
            tier = random.choice(chaos_tiers)
            active["chaos_orb_rolls"] -= 1
        else:
            tier = random.choices(
                population=list(perks.keys()),
                weights=list(perks.values()),
                k=1,
            )[0]

        if active["luck_potion_rolls"] > 0:
            active["luck_potion_rolls"] -= 1

        if active["energy_drink_rolls"] > 0:
            active["energy_drink_rolls"] -= 1

        if active["fortune_wax_rolls"] > 0:
            active["fortune_wax_rolls"] -= 1

        item = random.choice(TIER_ITEMS[tier])
        if item not in inventory:
            inventory[item] = 0
        inventory[item] += 1
        if active.get("fortune_wax_rolls", 0) > 0:
            inventory[item] += 1

        game_state["times_gambled"] += 1
        game_state["last_tier"] = tier
        game_state["last_roll"] = f"{item} ({tier})"
        results.append(f"{item} ({tier})")

    play_roll_animation(game_state)
    print("You pulled:")
    for result in results:
        print(f" - {result}")
    try:
        input("\nPress Enter to continue...")
    except EOFError:
        print("\nInput stream closed. Exiting safely.")


def main():
    game_state = load_game()

    while True:
        clear_screen()
        print(f"=== {GAME_TITLE} ===")
        print(f"Times gambled: {game_state['times_gambled']}")
        print(f"Last roll: {game_state['last_roll']}")

        print("\n1) Gamble")
        print("2) Inventory")
        print("3) Crafting")
        print("4) Upgrades")
        print("5) Usables")
        print("6) Save Progress")
        print("0) Exit")

        try:
            choice = input("\nChoose an option: ").strip()
        except EOFError:
            print("\nInput closed. Saving progress and exiting.")
            save_game(game_state)
            break

        if choice == "1":
            max_rolls = get_max_rolls(game_state)
            while True:
                try:
                    rolls = int(input(f"How many rolls? (1-{max_rolls}): ").strip())
                    if 1 <= rolls <= max_rolls:
                        break
                    print(f"Please choose a value from 1 to {max_rolls}.")
                except ValueError:
                    print("Invalid number. Please enter an integer.")
            gamble(game_state, rolls)

        elif choice == "2":
            print_inventory(game_state)

        elif choice == "3":
            show_crafting_menu(game_state)

        elif choice == "4":
            show_upgrade_menu(game_state)

        elif choice == "5":
            show_usables_menu(game_state)

        elif choice == "6":
            save_game(game_state)
            print("Game saved successfully.")
            input("Press Enter to continue...")

        elif choice in ("0", "exit"):
            save_game(game_state)
            print("Thanks for playing! Come back soon.")
            time.sleep(1)
            break

        else:
            print("Invalid option.")
            time.sleep(0.8)


if __name__ == "__main__":
    main()

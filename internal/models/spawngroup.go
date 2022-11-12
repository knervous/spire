package models

type Spawngroup struct {
	ID            int     `json:"id" gorm:"Column:id"`
	Name          string  `json:"name" gorm:"Column:name"`
	SpawnLimit    int8    `json:"spawn_limit" gorm:"Column:spawn_limit"`
	Dist          float32 `json:"dist" gorm:"Column:dist"`
	MaxX          float32 `json:"max_x" gorm:"Column:max_x"`
	MinX          float32 `json:"min_x" gorm:"Column:min_x"`
	MaxY          float32 `json:"max_y" gorm:"Column:max_y"`
	MinY          float32 `json:"min_y" gorm:"Column:min_y"`
	Delay         int     `json:"delay" gorm:"Column:delay"`
	Mindelay      int     `json:"mindelay" gorm:"Column:mindelay"`
	Despawn       int8    `json:"despawn" gorm:"Column:despawn"`
	DespawnTimer  int     `json:"despawn_timer" gorm:"Column:despawn_timer"`
	WpSpawns      uint8   `json:"wp_spawns" gorm:"Column:wp_spawns"`
	Spawn2        *Spawn2 `json:"spawn_2,omitempty" gorm:"foreignKey:id;references:spawngroupID"`
}

func (Spawngroup) TableName() string {
    return "spawngroup"
}

func (Spawngroup) Relationships() []string {
    return []string{
		"Spawn2",
		"Spawn2.Spawnentries",
		"Spawn2.Spawnentries.NpcType",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.AlternateCurrencies",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.CharacterCorpseItems",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.DiscoveredItems",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Doors",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Doors.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Fishings",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Fishings.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Fishings.NpcType",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Fishings.Zone",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Forages",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Forages.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Forages.Zone",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.GroundSpawns",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.GroundSpawns.Zone",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.ItemTicks",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Keyrings",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Merchantlists",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Merchantlists.Items",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Merchantlists.NpcTypes",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.ObjectContents",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Objects",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Objects.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.Objects.Zone",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.StartingItems",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.StartingItems.Item",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.StartingItems.Zone",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.TradeskillRecipeEntries",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.TradeskillRecipeEntries.TradeskillRecipe",
		"Spawn2.Spawnentries.NpcType.AlternateCurrency.Item.TributeLevels",
		"Spawn2.Spawnentries.NpcType.Loottable",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.AlternateCurrencies",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.AlternateCurrencies.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.CharacterCorpseItems",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.DiscoveredItems",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Doors",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Doors.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.NpcType",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Fishings.Zone",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Forages.Zone",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.GroundSpawns",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.GroundSpawns.Zone",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.ItemTicks",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Keyrings",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists.Items",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Merchantlists.NpcTypes",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.ObjectContents",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.Objects.Zone",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems.Item",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.StartingItems.Zone",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TradeskillRecipeEntries",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TradeskillRecipeEntries.TradeskillRecipe",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Item.TributeLevels",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LootdropEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Lootdrop.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.Loottable.LoottableEntries.Loottable",
		"Spawn2.Spawnentries.NpcType.Loottable.NpcTypes",
		"Spawn2.Spawnentries.NpcType.Merchantlists",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.AlternateCurrencies",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.AlternateCurrencies.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.CharacterCorpseItems",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.DiscoveredItems",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Doors",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Doors.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Fishings",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Fishings.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Fishings.NpcType",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Fishings.Zone",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Forages",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Forages.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Forages.Zone",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.GroundSpawns",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.GroundSpawns.Zone",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.ItemTicks",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Keyrings",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Merchantlists",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.ObjectContents",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Objects",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Objects.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.Objects.Zone",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.StartingItems",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.StartingItems.Item",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.StartingItems.Zone",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.TradeskillRecipeEntries",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.TradeskillRecipeEntries.TradeskillRecipe",
		"Spawn2.Spawnentries.NpcType.Merchantlists.Items.TributeLevels",
		"Spawn2.Spawnentries.NpcType.Merchantlists.NpcTypes",
		"Spawn2.Spawnentries.NpcType.NpcEmotes",
		"Spawn2.Spawnentries.NpcType.NpcFactions",
		"Spawn2.Spawnentries.NpcType.NpcFactions.NpcFactionEntries",
		"Spawn2.Spawnentries.NpcType.NpcFactions.NpcFactionEntries.FactionList",
		"Spawn2.Spawnentries.NpcType.NpcSpell",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.NpcSpell",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Aura",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Aura.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.BlockedSpells",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.BotSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Damageshieldtypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.AlternateCurrencies",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.AlternateCurrencies.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.CharacterCorpseItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.DiscoveredItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Doors",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Doors.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Fishings",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Fishings.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Fishings.NpcType",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Fishings.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Forages",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Forages.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Forages.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.GroundSpawns",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.GroundSpawns.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.ItemTicks",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Keyrings",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Merchantlists",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Merchantlists.Items",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Merchantlists.NpcTypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.ObjectContents",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Objects",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Objects.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.Objects.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.StartingItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.StartingItems.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.StartingItems.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries.TradeskillRecipe",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.Items.TributeLevels",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.NpcSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.NpcSpellsEntries.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.SpellBuckets",
		"Spawn2.Spawnentries.NpcType.NpcSpell.BotSpellsEntries.SpellsNew.SpellGlobals",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpell",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Aura.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BlockedSpells",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BotSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BotSpellsEntries.NpcSpell",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.BotSpellsEntries.SpellsNew",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Damageshieldtypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.AlternateCurrencies",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.AlternateCurrencies.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.CharacterCorpseItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.DiscoveredItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Doors",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Doors.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.NpcType",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Fishings.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Forages.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.GroundSpawns",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.GroundSpawns.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.ItemTicks",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Keyrings",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LootdropEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Lootdrop",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.LoottableEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.LootdropEntries.Lootdrop.LoottableEntries.Loottable.NpcTypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists.Items",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Merchantlists.NpcTypes",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.ObjectContents",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.Objects.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems.Item",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.StartingItems.Zone",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TradeskillRecipeEntries.TradeskillRecipe",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.Items.TributeLevels",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.NpcSpellsEntries",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellBuckets",
		"Spawn2.Spawnentries.NpcType.NpcSpell.NpcSpellsEntries.SpellsNew.SpellGlobals",
		"Spawn2.Spawnentries.NpcType.NpcTypesTint",
		"Spawn2.Spawnentries.NpcType.Spawnentries",
		"Spawn2.Spawnentries.Spawngroup",
		"Spawn2.Spawngroup",
	}
}

func (Spawngroup) Connection() string {
    return "eqemu_content"
}

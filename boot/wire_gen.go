// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//+build !wireinject

package boot

import (
	"github.com/Akkadius/spire/console/cmd"
	"github.com/Akkadius/spire/internal/connection"
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/desktop"
	"github.com/Akkadius/spire/internal/encryption"
	"github.com/Akkadius/spire/internal/github"
	controllers2 "github.com/Akkadius/spire/internal/http/controllers"
	crudcontrollers2 "github.com/Akkadius/spire/internal/http/crudcontrollers"
	middleware2 "github.com/Akkadius/spire/internal/http/middleware"
	"github.com/Akkadius/spire/internal/influx"
	"github.com/Akkadius/spire/internal/questapi"
)

import (
	_ "github.com/go-sql-driver/mysql"
)

// Injectors from wire.go:

func InitializeApplication() (App, error) {
	db, err := provideEQEmuLocalDatabase()
	if err != nil {
		return App{}, err
	}
	logger, err := provideLogger()
	if err != nil {
		return App{}, err
	}
	cache := provideCache()
	helloWorldCommand := cmd.NewHelloWorldCommand(db, logger)
	generateModelsCommand := cmd.NewGenerateModelsCommand(db, logger)
	generateControllersCommand := cmd.NewGenerateControllersCommand(db, logger)
	generateVueFormsCommand := cmd.NewGenerateVueFormsCommand(db, logger)
	helloWorldController := controllers2.NewHelloWorldController(db, logger)
	connections := provideAppDbConnections()
	encrypter := encryption.NewEncrypter()
	databaseResolver := database.NewDatabaseResolver(connections, logger, encrypter, cache)
	authController := controllers2.NewAuthController(databaseResolver, logger)
	meController := controllers2.NewMeController()
	client := influx.NewClient()
	analyticsController := controllers2.NewAnalyticsController(logger, client, databaseResolver)
	dbConnectionCreateService := connection.NewDbConnectionCreateService(databaseResolver, logger, encrypter)
	dbConnectionCheckService := connection.NewDbConnectionCheckService(databaseResolver, logger, encrypter)
	connectionsController := controllers2.NewConnectionsController(databaseResolver, logger, cache, dbConnectionCreateService, dbConnectionCheckService)
	docsController := controllers2.NewDocsController(databaseResolver, logger)
	githubSourceDownloader := github.NewGithubSourceDownloader(logger)
	parseService := questapi.NewParseService(logger, cache, githubSourceDownloader)
	questExamplesGithubSourcer := questapi.NewQuestExamplesGithubSourcer(logger, cache, githubSourceDownloader)
	questApiController := controllers2.NewQuestApiController(logger, parseService, questExamplesGithubSourcer)
	bootAppControllerGroups := provideControllers(helloWorldController, authController, meController, analyticsController, connectionsController, docsController, questApiController)
	aaAbilityController := crudcontrollers2.NewAaAbilityController(databaseResolver, logger)
	aaRankController := crudcontrollers2.NewAaRankController(databaseResolver, logger)
	accountController := crudcontrollers2.NewAccountController(databaseResolver, logger)
	adventureDetailController := crudcontrollers2.NewAdventureDetailController(databaseResolver, logger)
	adventureTemplateController := crudcontrollers2.NewAdventureTemplateController(databaseResolver, logger)
	adventureTemplateEntryController := crudcontrollers2.NewAdventureTemplateEntryController(databaseResolver, logger)
	adventureTemplateEntryFlavorController := crudcontrollers2.NewAdventureTemplateEntryFlavorController(databaseResolver, logger)
	alternateCurrencyController := crudcontrollers2.NewAlternateCurrencyController(databaseResolver, logger)
	blockedSpellController := crudcontrollers2.NewBlockedSpellController(databaseResolver, logger)
	bugController := crudcontrollers2.NewBugController(databaseResolver, logger)
	bugReportController := crudcontrollers2.NewBugReportController(databaseResolver, logger)
	charCreatePointAllocationController := crudcontrollers2.NewCharCreatePointAllocationController(databaseResolver, logger)
	characterAlternateAbilityController := crudcontrollers2.NewCharacterAlternateAbilityController(databaseResolver, logger)
	characterAuraController := crudcontrollers2.NewCharacterAuraController(databaseResolver, logger)
	characterBandolierController := crudcontrollers2.NewCharacterBandolierController(databaseResolver, logger)
	characterBindController := crudcontrollers2.NewCharacterBindController(databaseResolver, logger)
	characterCorpseController := crudcontrollers2.NewCharacterCorpseController(databaseResolver, logger)
	characterCurrencyController := crudcontrollers2.NewCharacterCurrencyController(databaseResolver, logger)
	characterDatumController := crudcontrollers2.NewCharacterDatumController(databaseResolver, logger)
	characterDisciplineController := crudcontrollers2.NewCharacterDisciplineController(databaseResolver, logger)
	characterExpeditionLockoutController := crudcontrollers2.NewCharacterExpeditionLockoutController(databaseResolver, logger)
	characterInspectMessageController := crudcontrollers2.NewCharacterInspectMessageController(databaseResolver, logger)
	characterItemRecastController := crudcontrollers2.NewCharacterItemRecastController(databaseResolver, logger)
	characterLanguageController := crudcontrollers2.NewCharacterLanguageController(databaseResolver, logger)
	characterLeadershipAbilityController := crudcontrollers2.NewCharacterLeadershipAbilityController(databaseResolver, logger)
	characterMaterialController := crudcontrollers2.NewCharacterMaterialController(databaseResolver, logger)
	characterMemmedSpellController := crudcontrollers2.NewCharacterMemmedSpellController(databaseResolver, logger)
	characterPotionbeltController := crudcontrollers2.NewCharacterPotionbeltController(databaseResolver, logger)
	characterSkillController := crudcontrollers2.NewCharacterSkillController(databaseResolver, logger)
	characterSpellController := crudcontrollers2.NewCharacterSpellController(databaseResolver, logger)
	contentFlagController := crudcontrollers2.NewContentFlagController(databaseResolver, logger)
	dataBucketController := crudcontrollers2.NewDataBucketController(databaseResolver, logger)
	dbStrController := crudcontrollers2.NewDbStrController(databaseResolver, logger)
	doorController := crudcontrollers2.NewDoorController(databaseResolver, logger)
	dynamicZoneController := crudcontrollers2.NewDynamicZoneController(databaseResolver, logger)
	eventlogController := crudcontrollers2.NewEventlogController(databaseResolver, logger)
	expeditionController := crudcontrollers2.NewExpeditionController(databaseResolver, logger)
	expeditionLockoutController := crudcontrollers2.NewExpeditionLockoutController(databaseResolver, logger)
	expeditionMemberController := crudcontrollers2.NewExpeditionMemberController(databaseResolver, logger)
	factionListController := crudcontrollers2.NewFactionListController(databaseResolver, logger)
	factionListModController := crudcontrollers2.NewFactionListModController(databaseResolver, logger)
	fishingController := crudcontrollers2.NewFishingController(databaseResolver, logger)
	forageController := crudcontrollers2.NewForageController(databaseResolver, logger)
	globalLootController := crudcontrollers2.NewGlobalLootController(databaseResolver, logger)
	graveyardController := crudcontrollers2.NewGraveyardController(databaseResolver, logger)
	gridController := crudcontrollers2.NewGridController(databaseResolver, logger)
	groundSpawnController := crudcontrollers2.NewGroundSpawnController(databaseResolver, logger)
	guildController := crudcontrollers2.NewGuildController(databaseResolver, logger)
	hackerController := crudcontrollers2.NewHackerController(databaseResolver, logger)
	instanceListController := crudcontrollers2.NewInstanceListController(databaseResolver, logger)
	instanceListPlayerController := crudcontrollers2.NewInstanceListPlayerController(databaseResolver, logger)
	itemController := crudcontrollers2.NewItemController(databaseResolver, logger)
	ldonTrapEntryController := crudcontrollers2.NewLdonTrapEntryController(databaseResolver, logger)
	ldonTrapTemplateController := crudcontrollers2.NewLdonTrapTemplateController(databaseResolver, logger)
	loginAccountController := crudcontrollers2.NewLoginAccountController(databaseResolver, logger)
	loginApiTokenController := crudcontrollers2.NewLoginApiTokenController(databaseResolver, logger)
	loginServerAdminController := crudcontrollers2.NewLoginServerAdminController(databaseResolver, logger)
	loginServerListTypeController := crudcontrollers2.NewLoginServerListTypeController(databaseResolver, logger)
	loginWorldServerController := crudcontrollers2.NewLoginWorldServerController(databaseResolver, logger)
	lootdropController := crudcontrollers2.NewLootdropController(databaseResolver, logger)
	loottableController := crudcontrollers2.NewLoottableController(databaseResolver, logger)
	nameFilterController := crudcontrollers2.NewNameFilterController(databaseResolver, logger)
	npcEmoteController := crudcontrollers2.NewNpcEmoteController(databaseResolver, logger)
	npcFactionController := crudcontrollers2.NewNpcFactionController(databaseResolver, logger)
	npcSpellController := crudcontrollers2.NewNpcSpellController(databaseResolver, logger)
	npcSpellsEffectController := crudcontrollers2.NewNpcSpellsEffectController(databaseResolver, logger)
	npcSpellsEffectsEntryController := crudcontrollers2.NewNpcSpellsEffectsEntryController(databaseResolver, logger)
	npcSpellsEntryController := crudcontrollers2.NewNpcSpellsEntryController(databaseResolver, logger)
	npcTypeController := crudcontrollers2.NewNpcTypeController(databaseResolver, logger)
	npcTypesTintController := crudcontrollers2.NewNpcTypesTintController(databaseResolver, logger)
	objectController := crudcontrollers2.NewObjectController(databaseResolver, logger)
	playerTitlesetController := crudcontrollers2.NewPlayerTitlesetController(databaseResolver, logger)
	reportController := crudcontrollers2.NewReportController(databaseResolver, logger)
	respawnTimeController := crudcontrollers2.NewRespawnTimeController(databaseResolver, logger)
	saylinkController := crudcontrollers2.NewSaylinkController(databaseResolver, logger)
	serverScheduledEventController := crudcontrollers2.NewServerScheduledEventController(databaseResolver, logger)
	spawn2Controller := crudcontrollers2.NewSpawn2Controller(databaseResolver, logger)
	spawnConditionController := crudcontrollers2.NewSpawnConditionController(databaseResolver, logger)
	spawnConditionValueController := crudcontrollers2.NewSpawnConditionValueController(databaseResolver, logger)
	spawnEventController := crudcontrollers2.NewSpawnEventController(databaseResolver, logger)
	spawngroupController := crudcontrollers2.NewSpawngroupController(databaseResolver, logger)
	spellsNewController := crudcontrollers2.NewSpellsNewController(databaseResolver, logger)
	startingItemController := crudcontrollers2.NewStartingItemController(databaseResolver, logger)
	taskController := crudcontrollers2.NewTaskController(databaseResolver, logger)
	tasksetController := crudcontrollers2.NewTasksetController(databaseResolver, logger)
	titleController := crudcontrollers2.NewTitleController(databaseResolver, logger)
	tradeskillRecipeController := crudcontrollers2.NewTradeskillRecipeController(databaseResolver, logger)
	tradeskillRecipeEntryController := crudcontrollers2.NewTradeskillRecipeEntryController(databaseResolver, logger)
	trapController := crudcontrollers2.NewTrapController(databaseResolver, logger)
	tributeController := crudcontrollers2.NewTributeController(databaseResolver, logger)
	zoneController := crudcontrollers2.NewZoneController(databaseResolver, logger)
	zonePointController := crudcontrollers2.NewZonePointController(databaseResolver, logger)
	bootCrudControllers := provideCrudControllers(aaAbilityController, aaRankController, accountController, adventureDetailController, adventureTemplateController, adventureTemplateEntryController, adventureTemplateEntryFlavorController, alternateCurrencyController, blockedSpellController, bugController, bugReportController, charCreatePointAllocationController, characterAlternateAbilityController, characterAuraController, characterBandolierController, characterBindController, characterCorpseController, characterCurrencyController, characterDatumController, characterDisciplineController, characterExpeditionLockoutController, characterInspectMessageController, characterItemRecastController, characterLanguageController, characterLeadershipAbilityController, characterMaterialController, characterMemmedSpellController, characterPotionbeltController, characterSkillController, characterSpellController, contentFlagController, dataBucketController, dbStrController, doorController, dynamicZoneController, eventlogController, expeditionController, expeditionLockoutController, expeditionMemberController, factionListController, factionListModController, fishingController, forageController, globalLootController, graveyardController, gridController, groundSpawnController, guildController, hackerController, instanceListController, instanceListPlayerController, itemController, ldonTrapEntryController, ldonTrapTemplateController, loginAccountController, loginApiTokenController, loginServerAdminController, loginServerListTypeController, loginWorldServerController, lootdropController, loottableController, nameFilterController, npcEmoteController, npcFactionController, npcSpellController, npcSpellsEffectController, npcSpellsEffectsEntryController, npcSpellsEntryController, npcTypeController, npcTypesTintController, objectController, playerTitlesetController, reportController, respawnTimeController, saylinkController, serverScheduledEventController, spawn2Controller, spawnConditionController, spawnConditionValueController, spawnEventController, spawngroupController, spellsNewController, startingItemController, taskController, tasksetController, titleController, tradeskillRecipeController, tradeskillRecipeEntryController, trapController, tributeController, zoneController, zonePointController)
	userContextMiddleware := middleware2.NewUserContextMiddleware(databaseResolver, cache, logger)
	requestLogMiddleware := middleware2.NewRequestLogMiddleware(client)
	router := NewRouter(bootAppControllerGroups, bootCrudControllers, userContextMiddleware, requestLogMiddleware, cache)
	httpServeCommand := cmd.NewHttpServeCommand(logger, router)
	routesListCommand := cmd.NewRoutesListCommand(router, logger)
	generateConfigurationCommand := cmd.NewGenerateConfigurationCommand(databaseResolver, logger)
	spireMigrateCommand := cmd.NewSpireMigrateCommand(connections, logger)
	questApiParseCommand := cmd.NewQuestApiParseCommand(logger, parseService)
	questExampleTestCommand := cmd.NewQuestExampleTestCommand(logger, questExamplesGithubSourcer)
	v := ProvideCommands(helloWorldCommand, generateModelsCommand, generateControllersCommand, generateVueFormsCommand, httpServeCommand, routesListCommand, generateConfigurationCommand, spireMigrateCommand, questApiParseCommand, questExampleTestCommand)
	webBoot := desktop.NewWebBoot(logger, router)
	app := NewApplication(db, logger, cache, v, databaseResolver, connections, router, webBoot)
	return app, nil
}

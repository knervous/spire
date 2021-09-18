package crudcontrollers

import (
	"github.com/Akkadius/spire/database"
	"github.com/Akkadius/spire/http/routes"
	"github.com/Akkadius/spire/models"
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

type FactionListController struct {
	db     *database.DatabaseResolver
	logger *logrus.Logger
}

func NewFactionListController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
) *FactionListController {
	return &FactionListController {
		db:     db,
		logger: logger,
	}
}

func (e *FactionListController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodDelete, "faction_list/:faction_list", e.deleteFactionList, nil),
		routes.RegisterRoute(http.MethodGet, "faction_list/:faction_list", e.getFactionList, nil),
		routes.RegisterRoute(http.MethodGet, "faction_lists", e.listFactionLists, nil),
		routes.RegisterRoute(http.MethodPatch, "faction_list/:faction_list", e.updateFactionList, nil),
		routes.RegisterRoute(http.MethodPut, "faction_list", e.createFactionList, nil),
	}
}

// listFactionLists godoc
// @Id listFactionLists
// @Summary Lists FactionLists
// @Accept json
// @Produce json
// @Tags FactionList
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.FactionList
// @Failure 500 {string} string "Bad query request"
// @Router /faction_lists [get]
func (e *FactionListController) listFactionLists(c echo.Context) error {
	var results []models.FactionList
	err := e.db.QueryContext(models.FactionList{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getFactionList godoc
// @Id getFactionList
// @Summary Gets FactionList
// @Accept json
// @Produce json
// @Tags FactionList
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.FactionList
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /faction_list/{id} [get]
func (e *FactionListController) getFactionList(c echo.Context) error {
	factionListId, err := strconv.Atoi(c.Param("faction_list"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param"})
	}

	var result models.FactionList
	err = e.db.QueryContext(models.FactionList{}, c).First(&result, factionListId).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	if result.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateFactionList godoc
// @Id updateFactionList
// @Summary Updates FactionList
// @Accept json
// @Produce json
// @Tags FactionList
// @Param id path int true "Id"
// @Param faction_list body models.FactionList true "FactionList"
// @Success 200 {array} models.FactionList
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /faction_list/{id} [patch]
func (e *FactionListController) updateFactionList(c echo.Context) error {
	factionList := new(models.FactionList)
	if err := c.Bind(factionList); err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)})
	}

	err := e.db.Get(models.FactionList{}, c).Model(&models.FactionList{}).First(&models.FactionList{}, factionList.ID).Error
	if err != nil || factionList.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.FactionList{}, c).Model(&models.FactionList{}).Update(&factionList).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity: [%v]", err)})
	}

	return c.JSON(http.StatusOK, factionList)
}

// createFactionList godoc
// @Id createFactionList
// @Summary Creates FactionList
// @Accept json
// @Produce json
// @Param faction_list body models.FactionList true "FactionList"
// @Tags FactionList
// @Success 200 {array} models.FactionList
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /faction_list [put]
func (e *FactionListController) createFactionList(c echo.Context) error {
	factionList := new(models.FactionList)
	if err := c.Bind(factionList); err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)})
	}

	err := e.db.Get(models.FactionList{}, c).Model(&models.FactionList{}).Create(&factionList).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error inserting entity: [%v]", err)})
	}

	return c.JSON(http.StatusOK, factionList)
}

// deleteFactionList godoc
// @Id deleteFactionList
// @Summary Deletes FactionList
// @Accept json
// @Produce json
// @Tags FactionList
// @Param id path int true "Id"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /faction_list/{id} [delete]
func (e *FactionListController) deleteFactionList(c echo.Context) error {
	factionListId, err := strconv.Atoi(c.Param("faction_list"))
	if err != nil {
		e.logger.Error(err)
	}

	factionList := new(models.FactionList)
	err = e.db.Get(models.FactionList{}, c).Model(&models.FactionList{}).First(&factionList, factionListId).Error
	if err != nil || factionList.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.FactionList{}, c).Model(&models.FactionList{}).Delete(&factionList).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

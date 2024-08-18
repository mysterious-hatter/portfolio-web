package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Static("/", "./public") 

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/home.html")
	})

	// 404 Handler
	app.Use(func(c *fiber.Ctx) error {
		return c.Status(404).SendFile("./static/not-found.html")
	})

	log.Fatal(app.Listen(":8080"))
}

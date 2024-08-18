package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/home/index.html")
	})

	// 404 Handler
	app.Use(func(c *fiber.Ctx) error {
		return c.Status(404).SendFile("./static/not-found/index.html")
	})

	log.Fatal(app.Listen(":8080"))
}

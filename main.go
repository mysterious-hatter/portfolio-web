package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.ServeFile(w, r, "./static/not-found/index.html")
			//w.WriteHeader(http.StatusNotFound)
			return
		}
		http.ServeFile(w, r, "./static/home/index.html")
	})
	http.ListenAndServe(":8080", nil)
}

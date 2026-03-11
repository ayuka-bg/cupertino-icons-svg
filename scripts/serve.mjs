import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import open from "open";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const MIME = {
  ".html": "text/html",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".js": "application/javascript",
  ".css": "text/css",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  const urlPath = (req.url || "/").split("?")[0];
  const isGallery =
    urlPath === "/" || urlPath === "/gallery" || urlPath === "/gallery/";
  const filePath = path.join(root, isGallery ? "gallery.html" : urlPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end();
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500);
      res.end(err.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
    });
    res.end(data);
  });
});

const port = 3333;
const url = `http://localhost:${port}/gallery.html`;

server.listen(port, () => {
  console.log(`Gallery: ${url}`);
  open(url);
});

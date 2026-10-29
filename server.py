import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def start_server():
    os.chdir(DIRECTORY)
    # Find free port starting at 3000
    global PORT
    for port in range(3000, 3050):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                print(f"vmccc.films server started successfully!")
                print(f"Local URL: http://localhost:{port}")
                print(f"Directory: {DIRECTORY}")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError:
            continue

if __name__ == "__main__":
    start_server()

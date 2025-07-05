from flask import Flask
import time
import random

app = Flask(__name__)

@app.route('/flask')
def hello_flask():
    return {"message": "Hello from Flask!"}

@app.route('/metrics')
def metrics():
    return (
        f'request_duration_seconds {random.uniform(0.1, 1.0)}\n'
        f'app_uptime_seconds {int(time.time())}'
    )

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

from flask import Flask, Response # type: ignore
from prometheus_client import generate_latest, Counter, CONTENT_TYPE_LATEST # type: ignore

app = Flask(__name__)

# Metric
REQUEST_COUNTER = Counter('flask_app_requests_total', 'Total requests to the Flask app')

@app.route('/')
def home():
    REQUEST_COUNTER.inc()
    return 'Hello from Flask service!'

@app.route('/metrics')
def metrics():
    return Response(generate_latest(), mimetype=CONTENT_TYPE_LATEST)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

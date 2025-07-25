# 📊 Advanced Docker Monitoring Project: Prometheus + Grafana + Node.js + Flask

A complete end-to-end **DevOps Monitoring Stack** using Docker Compose, featuring:

- 🐳 Dockerized Microservices (Node.js + Flask)
- 📈 Prometheus for Metrics Collection
- 📊 Grafana for Beautiful Dashboards

---

## 📁 Project Structure

```
advanced-docker-prometheus-grafana/
├── docker-compose.yml
├── service_flask/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── service_node/
│   ├── index.js
│   └── Dockerfile
├── prometheus/
│   └── prometheus.yml
└── grafana/
```

---

## 🚀 How to Run This Project

### ✅ Step 1: Clone the Repository
```bash
git clone https://github.com/aniketpuro/advanced-docker-prometheus-grafana.git
cd advanced-docker-prometheus-grafana
```

### ✅ Step 2: Create Required Files (if not already)
```powershell
New-Item -ItemType File -Name docker-compose.yml
New-Item -ItemType File -Path ".\service_flask\app.py"
New-Item -ItemType File -Path ".\service_flask\Dockerfile"
New-Item -ItemType File -Path ".\service_flask\requirements.txt"
New-Item -ItemType File -Path ".\service_node\index.js"
New-Item -ItemType File -Path ".\service_node\Dockerfile"
New-Item -ItemType File -Path ".\prometheus\prometheus.yml"
```

### ✅ Step 3: Start the Stack
```bash
docker-compose down --remove-orphans
docker-compose up --build
```

🟢 You should see containers for `service_node`, `service_flask`, `grafana`, and `prometheus` start successfully.

---

## 🌐 Access Services

| Service        | URL                       |
|----------------|----------------------------|
| Flask App      | http://localhost:5000      |
| Node.js App    | http://localhost:5001      |
| Prometheus     | http://localhost:9090      |
| Grafana        | http://localhost:3000      |

---

## 📊 Grafana Setup

### ✅ Login
- URL: `http://localhost:3000`
- Username: `admin`
- Password: `admin`

### ✅ Add Prometheus as a Data Source
1. Click **⚙️ (Gear) → Data Sources → Add Data Source**
2. Choose **Prometheus**
3. URL: `http://prometheus:9090`
4. Click **Save & Test** → ✅ Success!

### ✅ Create a Dashboard
1. Click `+` → **Dashboard** → **Add new panel**
2. Select **Prometheus** as Data Source
3. Query: `node_response_time_seconds` or `app_uptime_seconds`
4. Graph should appear → Click **Apply**
5. Click **Save Dashboard** → Name it: `DevOps Monitoring`

---

## 🧪 Sample PromQL Queries

```promql
node_response_time_seconds
request_duration_seconds
avg_over_time(node_response_time_seconds[5m])
```

---

## 📷 Screenshots

### 🔧 Docker Compose Up
![docker-compose-up](screenshots/docker-compose-up.png)

### 📈 Grafana Dashboard
![grafana-dashboard](screenshots/grafana-dashboard.png)

### 🎯 Prometheus UI
![prometheus-ui](screenshots/prometheus-ui.png)

---

## 📽️ YouTube Demo Video
▶️ Watch it here: [https://youtu.be/XRF6bJpgLtc](https://youtu.be/XRF6bJpgLtc)

---

## 🙏 Credits
Built by [Aniket Purohit](https://github.com/aniketpuro)

This project showcases:
- Docker Compose networking
- Prometheus metrics
- Real-time Grafana dashboards
- Clean microservices architecture

---

## 🏁 Want to Extend?
- Add alerts in Grafana
- Add auto-dashboard provisioning
- Monitor CPU & memory
- Push to a CI/CD pipeline

---

## 📌 License
MIT License

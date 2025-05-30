To ensure that the container are rebuilt from scratch, run:
```bash
docker compose build --no-cache
docker compose up -d
```

To clean and start up fresh, run:
```bash
docker compose down --volumes --rmi all --remove-orphans
docker compose up --build -d
```
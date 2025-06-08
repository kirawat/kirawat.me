---
name: "Shiori Bookmarks Manager"
dateCreated: 2025-06-08 13:38:00 +0700
---

Shiori is an open-source bookmarks manager written in Go languge.

## Installation

Even though, Shiori support variety of databse like PostgreSQL, MariaDB, and MySQL, for a personal bookmark manager used by one or two people, you should stick with SQLite. The simplicity, low resource usage, and ease of backup are outweigh the benefits of using a full scale database.

If you have many users or automated scripts all trying to read and write bookmarks at the exact same time, or wanting to integrate the bookmark data with another SQL-based tool directly, PostgreSQL or MariaDB would then be a better fit for your use case.

### On Synology NAS Using Portainer

1. Create a stack and paste the following to the web editor:

    ```yaml
    services:
      shiori:
        container_name: shiori
        image: ghcr.io/go-shiori/shiori:latest
        restart: unless-stopped
        ports:
          # Change '8080' to any other available port on your NAS if needed.
          - "8080:8080"
        environment:
          SHIORI_DIR: /data
          SHIORI_HTTP_SECRET_KEY: ${SECRET_KEY}
        volumes:
          # Links the 'data' folder on your NAS to the '/data' directory
          # inside the container. This ensures your bookmarks are saved
          # permanently on your NAS.
          - /volume1/docker/shiori/data:/data
    ```

2. Click **"Add an environment variable"** and input the following:
    * Name: `SECRET_KEY`
    * Value: `your-long-secret-key`

        (Replace `your-long-secret-key` with your own secret key).

3. Click **"Deploy the stack"**.

#### Access and Configure Shiori

1. Open your web browser and navigate to: `http://your-nas-ip-address:8080`

    (Replace `your-nas-ip-address` with the actual IP of your Synology NAS and use the port you specified in the `docker-compose.yml` file).

2. The default login credentials for a new Shiori instance are:
    * Username: `shiori`
    * Password: `gopher`

## Links

* [GitHub](https://github.com/go-shiori/shiori)
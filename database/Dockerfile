FROM mysql:5.7

# Copy the initialization script to the Docker entrypoint directory
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306
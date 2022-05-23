docker build -t drink-inventory-api . && \
docker run -it -p 8080:8080 -v ./assets:/opt/app/assets/ --name drink-inventory-api drink-inventory-api

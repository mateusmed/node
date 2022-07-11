

```
curl --location --request POST 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "mateusmed",
    "password": "123-123-123-123"
}'
```


```
curl --location --request GET 'http://localhost:3000/private/url' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF0ZXVzbWVkIiwiaWF0IjoxNjU3NTc4NTk3fQ.C36zB9ZRslgleCyJ0Z_tn39uQSncGi3tQf2kwrRUHRg'
```

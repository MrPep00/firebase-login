const firebaseConfig = {
  type: 'service_account',
  project_id: 'filmoteka-code-ronins',
  private_key_id: 'cf526d32e41fd07102d423af9760cfd9314dfaa1',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyKdHIDUU7ZOS2\ntLzPblav1SFjFvzO55k4LUOCueOnV7L1b+fNF5NMT0xYDRM2HFEmmyR9H8goZlm5\nUBHaexym6qTHlat3u1lPXTpQSliWeMr766ZJJEhSqLdlituVEOq0UhpjhxI2ass9\n9/W/AdaXUTk/ZlBRUyXG3Gzf4lZyVyooFUvPocX/5OHzno6xVTgtl+RY79FldUrg\nvAnxLuwuoWLqbyAktqVSvo6wrdp563HTnkyTt31dXQ43kalf23Y8iMBUjVLDyVx3\nDME9IlULQ8bzDBctvu9z5a19eEUWyXekWNMvJzwrHTcnEfFPWiwSH8KH5D5cOCEd\nDV8iEmK9AgMBAAECggEADF/rOkHxtRZk7GvRUXcQflYHY6KNHLHpaoV6UvImZdEp\nlPKY3x3sFTjMzLDbzL5axJuyBR7YADZbtQtishIrA0z49QPoTQCuS1zmV/1R+eGZ\n97V+b0Yd39/oHR1v8wKhyrSJMLCJC06Pn1ZBs2qlRQ1XNJgerAdicFWPGl3WM0rM\n69tQfI9EERxrFD6MTeibjMZBbwGNtOHTxvQyS/JXqVzRKPS6ZgnlbZpv2iJysMBG\nAzMhJi9LskS4+caO8774omB9+tTkBZFGpYlsfq1PSO5wOd3/A3EQXKyavZtLCafF\nzgaUr9zCX+vy3sPXiH8vMKVM6keqopEEhCYDlJijAQKBgQDcp1zLZlnlPD+J2zvY\nsYapQywABrjpKCIutFpI6LdDFOAyiz0fxbl+jDaI4QIaIPd/R57Un2bewlH9L4Qi\n5D3V1Jlbpefz/letG9w12A9aFoh8GOk9ceS3E0lMQzk3+SDZZnrCkBguhgp82mlf\n8L+bXLMwFdLSOIshUfkg7ADa2QKBgQDOs/9X7R5zahYJUshcN1HZv5QI6wRAgqMo\nRu2bO38bK3/PUOq6B3bh95RQPVHyjsaTa4o/MQctlvhwDCDUo1MlDeOs7l8/ls4h\nQDDhUoa46vYqcPTo8y/whMZBKM9v0XcofQ7z6hzf8MCvzIGFbYXjDVq2dk8734ib\nn0uY8lgwhQKBgDM0AyyQC7xORtBOt4yJZZ5RoBxBcxdn4MbFw0238w72ATC5bu24\njFr5Xo5U6I/3pnc6v3jHpK98mFoQdLFEFbVRKGVEEpdkJiRdmrRD9wwIvpNNlJJV\no6V4LEIuN1Dt1tmcFlCf73ycTkK6zEkfLNd4o3w9FDcEOAT7aLxjB6/BAoGBAMkM\nSlA7UmLvzH9FBZysMfCZZmNGM9yLNCb41iMmu3qx1J7RFX3bxMYFCT0CZ7KFLKA2\n+UB9b33oWbyiD0zDjxt7ZvfM4tf21oeA6ApBOsihwM2HEK+D2h0XB75Y82rPUhcP\njHuyOmOWx9Q2FcSxwogVdSYD7Q1PXo//YIhjL2QBAoGBAMptAenGnw60/WWCrkpo\nDk4H5ps8QJM5OPvCaIqT8Z/qdKUZ4zUZsE+AZWhIIpRSc2n5An0pryIHNMyqOjNT\nVjcuwcODso0YwwZvR0yVCK6eybNZohatjuEgJZMLirx6JDgltsBsa9SCIUC/aCkH\n59K5tgbzRdOV0yQ4b07zThCs\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-j770j@filmoteka-code-ronins.iam.gserviceaccount.com',
  client_id: '103369963829819002768',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j770j%40filmoteka-code-ronins.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};

firebase.initializeApp(firebaseConfig);

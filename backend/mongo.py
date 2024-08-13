from pymongo import MongoClient
from django.conf import settings

# Access MongoDB connection details from settings.py
MONGO_URI = settings.MONGO_URI
MONGO_DB_NAME = settings.MONGO_DB_NAME

# Create a MongoDB client and access the specified database
client = MongoClient(MONGO_URI)
db = client[MONGO_DB_NAME]
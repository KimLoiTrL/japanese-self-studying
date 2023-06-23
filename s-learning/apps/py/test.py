import os
from dotenv import load_dotenv
from pymongo import MongoClient
import random

# Đọc giá trị từ  .env
load_dotenv()

# Lấy giá trị cấu hình từ môi trường
mongodb_uri = os.getenv('MONGODB_URI')

# Kết nối đến MongoDB
client = MongoClient(mongodb_uri)
db = client.get_default_database()
collection = db['fillmask']
documents = collection.find({}, {"sentences": 1, "_id": 0})
sentences = list(documents[0]['sentences'].values())
random.shuffle(sentences)
print(sentences[:10])

# for document in enumerate(documents):
#     sentences = document['sentences']
# print(len(documents))
# print(documents)
# print(len(documents[0]['sentences']))


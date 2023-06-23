import random
import os
import pandas as pd
from fastapi.responses import JSONResponse
from transformers import pipeline
from nagisa_bert import NagisaBertTokenizer
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pymongo import MongoClient

app = FastAPI()

# Cấu hình CORS
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:4200"],  # Địa chỉ nguồn được phép truy cập
  allow_credentials=True,
  allow_methods=["GET"],
  allow_headers=["*"],
)

#fillmask with nagisa_bert model
model_name = 'taishi-i/nagisa_bert'
tokenizer = NagisaBertTokenizer.from_pretrained(model_name)
fill_mask = pipeline("fill-mask", model=model_name, tokenizer=tokenizer)

#connect to Mongodb using .env
load_dotenv()
mongodb_uri = os.getenv('MONGODB_URI')
client = MongoClient(mongodb_uri)
db = client.get_default_database()
collection = db['fillmask']

@app.get("/fillmask")
def fillMask():
  documents = collection.find({}, {"sentences": 1, "_id": 0})
  sentences = list(documents[0]['sentences'].values())
  random.shuffle(sentences)
  sentences = sentences[:10]
  ranges = range(1, len(sentences)+1)
  sentences = [str.replace(x, '[ MASK ]', '[MASK]') for x in sentences]
  results = []
  for sentence in sentences:
    # sentence = str.replace(sentence,'[ MASK ]', '[MASK]')
    result = fill_mask(sentence)
    result = [{'score': x['score'], 'token_str': x['token_str'], 'sequence': x['sequence']} for x in result]
    results.append(result)

  df_result = pd.DataFrame({'id':ranges, 'sentences': sentences, 'results': results})
  return JSONResponse(content=df_result.to_dict(orient='records'), status_code=200)

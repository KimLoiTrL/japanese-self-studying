import pandas as pd
from fastapi.responses import JSONResponse
from transformers import pipeline
from nagisa_bert import NagisaBertTokenizer
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Cấu hình CORS
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:4200"],  # Địa chỉ nguồn được phép truy cập
  allow_credentials=True,
  allow_methods=["GET"],
  allow_headers=["*"],
)

model_name = 'taishi-i/nagisa_bert'
tokenizer = NagisaBertTokenizer.from_pretrained(model_name)
fill_mask = pipeline("fill-mask", model=model_name, tokenizer=tokenizer)

@app.get("/fillmask")
def fillMask():
  df = pd.read_json(r'sentences.json')
  sentences = list(df.sample(n=10).sentences)
  ranges = range(1, len(sentences)+1)
  sentences = [str.replace(x, '[ MASK ]', '[MASK]') for x in sentences]

  results = []
  for sentence in sentences:
    sentence = str.replace(sentence,'[ MASK ]', '[MASK]')
    result = fill_mask(sentence)
    result = [{'score': x['score'], 'token_str': x['token_str'], 'sequence': x['sequence']} for x in result]
    results.append(result)

  df_result = pd.DataFrame({'id':ranges, 'sentences': sentences, 'results': results})
  return JSONResponse(content=df_result.to_dict(orient='records'), status_code=200)

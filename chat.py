import os
import openai

openai.api_key = os.getenv("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")

model_engine = "text-davinci-001"
prompt = str(input())

Completion = openai.Completion.create(
  engine=model_engine,
  prompt=prompt,
  max_tokens=1024,
  n=1,
  stop=None,
  temperature=0.5,
)

response  = Completion.choices[0].text
print(response)
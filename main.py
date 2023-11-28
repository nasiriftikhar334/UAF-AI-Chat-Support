from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
import en_core_web_sm
from faq import convo


app = Flask(__name__)

nlp = en_core_web_sm.load()
bot = ChatBot("My chatbot")
bot = ChatBot("ChatBot",storage_adaptor="chatterbot.storage.SQLstorageAdapter")
trainer = ListTrainer(bot)
trainer.train(convo)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))

if __name__ == '__main__':
    app.run()

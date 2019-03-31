from flask import Flask, render_template
from flask import request

# Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

# Random
import random

# Instantiates a client
client = language.LanguageServiceClient()

scores = []
bad_messages = ["Sorry to hear about that.", ":(", "chinup, buttercup", "u deserve to be happy"]
good_messages = ["Glad to hear that!", ":)"]
app = Flask(__name__)

#js = Bundle('myScript.js', output= 'gen/main.js')
#css = Bundle('styles.css', "https://cdn.rawgit.com/marmelab/universal.css/master/universal.css","https://www.w3schools.com/w3css/4/w3.css", 
	#output= 'gen/main.css')

#assets = Environment(app)

#assets.register('main_js', js)
#assets.register('main.css',css)

app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('index.html', message="Tell me about your day", scores="")

@app.route('/', methods=['POST'])
def my_form_post():
	text = request.form['text']

	global scores
	# The text to analyze
	document = types.Document(
		content=text,
		type=enums.Document.Type.PLAIN_TEXT)

	# Detects the sentiment of the text
	sentiment = client.analyze_sentiment(document=document).document_sentiment
	scores.append(str(sentiment.score))

	if len(scores) > 7:
		scores = scores[1:]

	scores_string = "|"
	scores_string = scores_string.join(scores)

	message = random.choice(good_messages) if (sentiment.score >= 0) else random.choice(bad_messages)
	return render_template('index.html', message=message, scores=scores_string)

if __name__ == '__main__':
	app.run(debug=True)




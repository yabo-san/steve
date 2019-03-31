from urllib.request import urlopen
import json

url = 'https://us-central1-vision-migration.cloudfunctions.net/la_hacks_2019'

response = urlopen(url)
data = response.read().decode('utf-8')

json_dict = json.loads(data)

for recent in json_dict["buckets"]:
    topics = recent["report"]["rollups"]

    for topic in topics[:20]:
        if topic["category"] != "health and fitness":,
            continue
        try:
            articles = topic["top_articles_on_network"][0]
        except IndexError:
            continue

        for url in articles:
            print(articles[url])
## postgresSQL

CLIで実行する場合、以下を実行
```
$ sudo -u postgres -i
$ psql
```

## Django

### 起動コマンド

```
$ docker-compose exec node sh -c "cd argon-dashboard-react-master && npm install --legacy-peer-deps && npm install -g npm@7.21.1"
$ docker-compose up --build
```

`docker-compose up --build`を実行しても`mysql-db`が見つかりません。みたいなエラーで`web`が落ちる場合があるのでその場合は

```
$ docker compose down
$ docker-compose up --build
```
を再度実行

#### django DB migration

```
$ python manage.py makemigrations
$ python manage.py migrate (マイグレーションID)
```

・マイグレーションIDが未指定だった場合全てのマイグレーションを適用
・指定したマイグレーションIDが未適用のものだった場合、そのIDまでデータベースに適用
・指定したマイグレーションIDが適用済のものだった場合、そのIDまでの適用をデータベースから取り消す

ここまですると、ログイン画面が見れる。@ `http://localhost:8000/admin`

#### superuserの作成
下記のコマンドで適当なユーザーを作成する。

```
$ python manage.py createsuperuser
Username (leave blank to use 'root'): admin
Email address: admin@example.com
Password:
Password (again):
Superuser created successfully.
```

作成したsuperuserでログインすると管理画面が見れる。

### migration
参考：https://docs.djangoproject.com/ja/3.2/intro/tutorial02/

マイグレーションはとても強力なツールであり、プロジェクトの発展に合わせて、モデルを変更し続けていくことができます。データベースやテーブルを削除して作り直す必要はありません - マイグレーションは、データを失うことなしにデータベースをライブでアップグレードするよう特化しています。これらについてはチュートリアルの後の部分でもっと深くカバーしますが、今は、モデルの変更を実施するための3ステップガイドを覚えておいてください:

* モデルを変更する (models.py の中の)
* これらの変更のためのマイグレーションを作成するために `$ python manage.py makemigrations` を実行します。
* データベースにこれらの変更を適用するために `$ python manage.py migrate` を実行します。

マイグレーションの作成と適用のコマンドが分割されている理由は、マイグレーションをバージョン管理システムにコミットし、アプリとともに配布するためです。これによって、あなたの開発が容易になるだけでなく、他の開発者や本番環境にとって使いやすいものになります。

manage.py ユーティリティでできることについては [django-admin のドキュメント](https://docs.djangoproject.com/ja/3.2/ref/django-admin/) を読んで下さい。

### Migration APIの確認

Python 対話シェルを起動して、 Django が提供する migration API で遊んでみましょう。 Python シェルを起動するには、以下のコマンドを実行します:

```
$ python manage.py shell
```
"python "とタイプするのではなく、これを使っています。なぜなら、 manage.py は DJANGO_SETTINGS_MODULE 環境変数を設定しているからです。

ex)
シェルに入ったら [データベース API](https://docs.djangoproject.com/ja/3.2/topics/db/queries/) の世界を探検してみましょう:

```bash
>>> from polls.models import Choice, Question  # Import the model classes we just wrote.

# No questions are in the system yet.
>>> Question.objects.all()
<QuerySet []>

# Create a new Question.
# Support for time zones is enabled in the default settings file, so
# Django expects a datetime with tzinfo for pub_date. Use timezone.now()
# instead of datetime.datetime.now() and it will do the right thing.
>>> from django.utils import timezone
>>> q = Question(question_text="What's new?", pub_date=timezone.now())

# Save the object into the database. You have to call save() explicitly.
>>> q.save()

# Now it has an ID.
>>> q.id
1

# Access model field values via Python attributes.
>>> q.question_text
"What's new?"
>>> q.pub_date
datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)

# Change values by changing the attributes, then calling save().
>>> q.question_text = "What's up?"
>>> q.save()

# objects.all() displays all the questions in the database.
>>> Question.objects.all()
<QuerySet [<Question: Question object (1)>]>
```

### モデルのリレーションについて

Related objects reference:

https://docs.djangoproject.com/ja/3.2/ref/models/relations/

### REST Api
参考記事：<br>
https://qiita.com/kimihiro_n/items/86e0a9e619720e57ecd8

## Frontend

### CoreUI
https://coreui.io/react/

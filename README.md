# Whisky
Project Whiskey (May 2021 ~)

# Run Server!

**Backend - DB Drop 하는법**

<pre><code>

  명령어 1> psql masterdb2
 
  명령어 2> \l (db list 확인)
  
  (quit을 통해서 psql 빠져나가고, masterdb2가 아닌 다른 db로 접속. > psql [db명]
  
  명령어 3> DROP DATABASE masterdb2;
  
  명령어 4> CREATE DATABASE masterdb2;
  
  명령어 5> grant all privileges on all tables in schema public to doy;

  (quit)
  
  명령어 6> python manage.py makemigrations > python manage.py migrate > python manage.py runserver

</code></pre>

**Backend - Migration 에러**

* 서버 실행시 'no module' 에러 발생할 경우

  명령어> pip install -r requirements.txt
입력 후 재실행

<br>

* Remote 레포에서 pull 한 후  merge를 했으나 migration 충돌이 일어날 경우

  명령어> python manage.py makemigrations --fake
시도 후 다시 migrate

<br>

* django.db.utils.ProgrammingError: relation "api_<ModelName>" does not exist 에러
  
  먼저, 변경했던 model 내용을 원상태로 돌려놓고(comment out)
  
  명령어1> python manage.py makemigrations
  
  명령어2> python manage.py migrate --fake

  <br>
  
* django.db.migrations.exceptions.NodeNotFoundError :
  
  문제가 있는 app 내의 migration folder안에 __ init __ .py 제외하고 모든 .py들을 삭제
  
  명령어> python manage.py makemigrations
  
  명령어> python manage.py migrate                진행
  
  > https://stackoverflow.com/questions/37937343/django-db-migrations-exceptions-nodenotfounderror
  
  __migration들을 모두 삭제하는 이 방법은 그 동안의 migration들을 날리고 새로운 migration을 추가하는 방법이기 때문에 db table 상에서는 적용이 안되는 에러: Programming error: relation does not exist 가 생길 수 있다..__
  
  > **2021.07.16 git에 migration 파일을 올리지 않는 방법으로 migration 관련 에러(relation does not exist) 원천 차단함**
  


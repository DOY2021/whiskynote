# Whisky
Project Whiskey (May 2021 ~)

# Error Fix

**Backend - Migration 에러**

* 서버 실행시 'no module' 에러 발생할 경우

  명령어> pip install -r requirements.txt
입력 후 재실행

* Remote 레포에서 pull 한 후  merge를 했으나 migration 충돌이 일어날 경우

  명령어> python manage.py makemigrations --fake
시도 후 다시 migrate

* django.db.utils.ProgrammingError: relation "api_<ModelName>" does not exist 에러
  
  먼저, 변경했던 model 내용을 원상태로 돌려놓고(comment out)
  
  명령어1> python manage.py makemigrations
  
  명령어2> python manage.py migrate --fake

* django.db.migrations.exceptions.NodeNotFoundError : 
  
  문제가 있는 app 내의 migration folder안에 __init__.py 제외하고 모든 .py들을 삭제
  
  > python manage.py makemigrations
  
  > python manage.py migrate                진행
  
  >> https://stackoverflow.com/questions/37937343/django-db-migrations-exceptions-nodenotfounderror

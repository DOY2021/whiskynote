# Whisky
Project Whiskey (May 2021 ~)

# Announcement
* 서버 실행시 'no module' 에러 발생할 경우

  명령어> pip install -r requirements.txt
입력 후 재실행

* Remote 레포에서 pull 한 후  merge를 했으나 migration 충돌이 일어날 경우

  명령어> python manage.py makemigrations --fake
시도 후 다시 migrate

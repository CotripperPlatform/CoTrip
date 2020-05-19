psql -U postgres -f settings.sql
python3 manage.py migrate --settings api.settings.local
python3 manage.py loaddata community accounts trip forum --settings api.settings.local
python3 manage.py runserver --settings api.settings.local
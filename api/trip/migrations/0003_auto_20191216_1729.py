# Generated by Django 3.0 on 2019-12-16 17:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0002_auto_20191216_1728'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Activities',
            new_name='Activity',
        ),
    ]
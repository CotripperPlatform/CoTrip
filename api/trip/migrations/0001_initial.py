# Generated by Django 3.0 on 2019-12-16 17:02

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('duration_days', models.IntegerField(default=7)),
                ('type_of_stay', models.CharField(max_length=100)),
                ('activities_for_mom', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('activities_for_mom_and_kids', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), size=None)),
                ('children_welcome', models.BooleanField(default=True)),
                ('banner_image', models.ImageField(null=True, upload_to='images/')),
            ],
        ),
    ]
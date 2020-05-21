# Generated by Django 3.0.6 on 2020-05-15 19:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('trip', '0010_auto_20200514_1911'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='attendees',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='activity',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='activities', to='trip.Location'),
        ),
        migrations.AlterField(
            model_name='trip',
            name='activities',
            field=models.ManyToManyField(to='trip.Activity'),
        ),
        migrations.AlterField(
            model_name='trip',
            name='locations',
            field=models.ManyToManyField(to='trip.Location'),
        ),
    ]
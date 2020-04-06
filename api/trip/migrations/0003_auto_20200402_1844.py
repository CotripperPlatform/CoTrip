# Generated by Django 3.0.5 on 2020-04-02 18:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0002_trip_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trip',
            name='location',
        ),
        migrations.AddField(
            model_name='trip',
            name='locations',
            field=models.ManyToManyField(to='trip.Location'),
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('for_kids', models.BooleanField()),
                ('for_moms', models.BooleanField()),
                ('title', models.CharField(max_length=200)),
                ('location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='activities', to='trip.Location')),
            ],
        ),
        migrations.AddField(
            model_name='trip',
            name='activities',
            field=models.ManyToManyField(to='trip.Activity'),
        ),
    ]
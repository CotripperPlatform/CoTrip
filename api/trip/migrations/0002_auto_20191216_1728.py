# Generated by Django 3.0 on 2019-12-16 17:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trip',
            name='activities_for_mom',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='activities_for_mom_and_kids',
        ),
        migrations.CreateModel(
            name='Activities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.CharField(max_length=250)),
                ('appropriate_for_kids', models.BooleanField()),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='activities', to='trip.Trip')),
            ],
        ),
    ]

# Generated by Django 3.0.9 on 2021-06-10 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='assessment',
            name='date',
            field=models.DateField(auto_now=True),
        ),
    ]

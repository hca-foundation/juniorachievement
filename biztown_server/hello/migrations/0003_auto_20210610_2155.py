# Generated by Django 3.0.9 on 2021-06-10 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0002_assessment_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assessment',
            name='date',
            field=models.DateField(),
        ),
    ]

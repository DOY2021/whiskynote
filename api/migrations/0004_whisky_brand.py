# Generated by Django 3.1.5 on 2021-05-09 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_whisky'),
    ]

    operations = [
        migrations.AddField(
            model_name='whisky',
            name='brand',
            field=models.CharField(max_length=100, null=True),
        ),
    ]

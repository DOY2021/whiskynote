# Generated by Django 3.2.4 on 2021-10-17 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='whisky',
            name='cask_strength',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='whisky',
            name='single_cask',
            field=models.BooleanField(default=False, null=True),
        ),
    ]

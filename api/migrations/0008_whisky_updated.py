# Generated by Django 3.2.4 on 2021-08-08 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210805_0007'),
    ]

    operations = [
        migrations.AddField(
            model_name='whisky',
            name='updated',
            field=models.BooleanField(default=True),
        ),
    ]
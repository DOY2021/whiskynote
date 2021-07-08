# Generated by Django 3.2.4 on 2021-07-08 07:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='whisky',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='collection', to='api.whisky'),
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='whisky',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='wishlist', to='api.whisky'),
        ),
    ]

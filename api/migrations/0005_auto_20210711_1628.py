# Generated by Django 3.2.4 on 2021-07-11 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210711_0402'),
    ]

    operations = [
        migrations.AddField(
            model_name='reaction',
            name='finish_tag',
            field=models.CharField(choices=[('Nothing', 'Nothing'), ('Cereal', '곡물'), ('Woody', '나무'), ('Floral', '꽃'), ('Fruity', '과일'), ('Winey', '와인'), ('Sulphur', '유황'), ('Peaty', '피트'), ('Feinty', '후류')], default='Nothing', max_length=9),
        ),
        migrations.AddField(
            model_name='reaction',
            name='taste_tag',
            field=models.CharField(choices=[('Nothing', 'Nothing'), ('Cereal', '곡물'), ('Woody', '나무'), ('Floral', '꽃'), ('Fruity', '과일'), ('Winey', '와인'), ('Sulphur', '유황'), ('Peaty', '피트'), ('Feinty', '후류')], default='Nothing', max_length=9),
        ),
        migrations.AlterField(
            model_name='reaction',
            name='nose_tag',
            field=models.CharField(choices=[('Nothing', 'Nothing'), ('Cereal', '곡물'), ('Woody', '나무'), ('Floral', '꽃'), ('Fruity', '과일'), ('Winey', '와인'), ('Sulphur', '유황'), ('Peaty', '피트'), ('Feinty', '후류')], default='Nothing', max_length=9),
        ),
    ]
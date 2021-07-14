# Generated by Django 3.2.4 on 2021-07-11 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210711_1656'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kor_tag', models.CharField(max_length=9)),
                ('eng_tag', models.CharField(max_length=15)),
            ],
        ),
        migrations.RemoveField(
            model_name='reaction',
            name='finish_tag',
        ),
        migrations.RemoveField(
            model_name='reaction',
            name='nose_tag',
        ),
        migrations.RemoveField(
            model_name='reaction',
            name='taste_tag',
        ),
        migrations.AddField(
            model_name='reaction',
            name='finish_tag',
            field=models.ManyToManyField(related_name='finish_tag', to='api.Tag'),
        ),
        migrations.AddField(
            model_name='reaction',
            name='nose_tag',
            field=models.ManyToManyField(related_name='nose_tag', to='api.Tag'),
        ),
        migrations.AddField(
            model_name='reaction',
            name='taste_tag',
            field=models.ManyToManyField(related_name='taste_tag', to='api.Tag'),
        ),
    ]
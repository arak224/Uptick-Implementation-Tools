# Generated by Django 4.2.16 on 2024-10-07 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('UserEmail', models.CharField(max_length=100)),
                ('UserPassword', models.CharField(max_length=30)),
                ('UserCompany', models.CharField(max_length=100)),
                ('UserFirstName', models.CharField(max_length=30)),
                ('UserLastName', models.CharField(max_length=50)),
            ],
        ),
    ]

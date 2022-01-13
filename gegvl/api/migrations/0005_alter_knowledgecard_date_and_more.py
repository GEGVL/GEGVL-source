# Generated by Django 4.0.1 on 2022-01-13 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_video_rename_placed_based_knowledgecard_place_based'),
    ]

    operations = [
        migrations.AlterField(
            model_name='knowledgecard',
            name='date',
            field=models.DateField(blank=True, help_text='Date, if applicable, that this event occurred', null=True),
        ),
        migrations.AlterField(
            model_name='knowledgecard',
            name='description',
            field=models.TextField(blank=True, help_text='Brief description of this knowledge card', null=True),
        ),
        migrations.AlterField(
            model_name='knowledgecard',
            name='latitude',
            field=models.DecimalField(blank=True, decimal_places=4, help_text='If placed based, the latitude to show this point at', max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='knowledgecard',
            name='longitude',
            field=models.DecimalField(blank=True, decimal_places=4, help_text='If placed based, the longitude to show this point at', max_digits=7, null=True),
        ),
        migrations.AlterField(
            model_name='knowledgecard',
            name='place_based',
            field=models.BooleanField(default=False, help_text='If checked, this point will be shown on the map view'),
        ),
        migrations.AlterField(
            model_name='knowledgecard',
            name='title',
            field=models.CharField(help_text='Title shown at top of popups', max_length=50),
        ),
        migrations.AlterField(
            model_name='video',
            name='URL',
            field=models.CharField(help_text='YouTube or Vimeo URL of this video', max_length=500),
        ),
        migrations.AlterField(
            model_name='video',
            name='audience_level',
            field=models.CharField(choices=[('b', 'Beginner'), ('i', 'Intermediate'), ('a', 'Advanced')], help_text='Target audience level of this video', max_length=3),
        ),
        migrations.AlterField(
            model_name='video',
            name='reviewers',
            field=models.CharField(help_text='List of reviewers for this video. Separate each reviewer with a comma', max_length=200),
        ),
        migrations.AlterField(
            model_name='video',
            name='video_authors',
            field=models.CharField(help_text='List of authors responsible for the video. Separate each author with a comma', max_length=200),
        ),
    ]

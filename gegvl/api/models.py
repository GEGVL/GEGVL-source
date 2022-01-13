from django.db import models
from django.contrib import admin

# Model representing single collection of data related to a topic or place
class KnowledgeCard(models.Model):
    TAGS = (
        ('v', 'Volcanic Eruption'),
        ('e', 'Earthquake')
    )

    title = models.CharField(max_length = 50, help_text = "Title shown at top of popups")
    date = models.DateField(blank = True, null = True, help_text = "Date, if applicable, that this event occurred")
    longitude = models.DecimalField(max_digits = 7, decimal_places = 4, blank = True, null = True, help_text = "If placed based, the longitude to show this point at")
    latitude = models.DecimalField(max_digits = 7, decimal_places = 4, blank = True, null = True, help_text = "If placed based, the latitude to show this point at")
    place_based = models.BooleanField(default = False, help_text = "If checked, this point will be shown on the map view")
    tags = models.CharField(max_length = 3, choices = TAGS)
    description = models.TextField(blank = True, null = True, help_text = "Brief description of this knowledge card")

    def __str__(self):
        return self.title

class KnowledgeCardAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display = ('title', 'date', 'longitude', 'latitude', 'place_based', 'tags', 'description')

# Represents a single video including it's URL and attribution data
class Video(models.Model):
    AUDIENCE_LEVELS = (
        ('b', 'Beginner'),
        ('i', 'Intermediate'),
        ('a', 'Advanced')
    )
    
    URL = models.CharField(max_length = 500, help_text = "YouTube or Vimeo URL of this video")
    description = models.TextField(help_text = "A brief explanation of what this video presents")
    video_authors = models.CharField(max_length = 200, help_text = "List of authors responsible for the video. Separate each author with a comma")
    reviewers = models.CharField(max_length = 200, help_text = "List of reviewers for this video. Separate each reviewer with a comma")
    audience_level = models.CharField(max_length = 3, choices = AUDIENCE_LEVELS, help_text = "Target audience level of this video")
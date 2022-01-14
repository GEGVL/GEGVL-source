from django.db import models
from django.contrib import admin

# Model representing single collection of data related to a topic or place
class KnowledgeCard(models.Model):
    TOPICS = (
        ('vol', 'Volcanic Eruption'),
        ('eq', 'Earthquake'),
        ('pt', 'Plate Tectonics'),
        ('min', 'Minerals'),
        ('sg', 'Structural Geology'),
        ('met', 'Metamorphism'),
        ('mag', 'Magmatism'),
        ('hyd', 'Hydrology'),
        ('env', 'Environmental Geology'),
        ('sed', 'Sedimentology'),
        ('his', 'Historical Geology'),
        ('pal', 'Paleomagnetism'),
        ('hum', 'Human Activity'),
        ('nat', "Natural Hazards"),
    )

    title = models.CharField(max_length = 50, help_text = "Title shown at top of popups")
    date = models.DateField(blank = True, null = True, help_text = "Date, if applicable, that this event occurred")
    longitude = models.DecimalField(max_digits = 7, decimal_places = 4, blank = True, null = True, help_text = "If placed based, the longitude to show this point at")
    latitude = models.DecimalField(max_digits = 7, decimal_places = 4, blank = True, null = True, help_text = "If placed based, the latitude to show this point at")
    place_based = models.BooleanField(default = False, help_text = "If checked, this point will be shown on the map view")
    topic = models.CharField(max_length = 3, choices = TOPICS, default = TOPICS[0][1], help_text="Which knowledge base topic does this card fall under?")
    description = models.TextField(blank = True, null = True, help_text = "Brief description of this knowledge card")

    def __str__(self):
        return self.title

class KnowledgeCardAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display = ('title', 'date', 'longitude', 'latitude', 'place_based', 'topic', 'description')

# Represents a single video including its URL and attribution data
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
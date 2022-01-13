from django.db import models

# Model representing single collection of data related to a topic or place
class KnowledgeCard(models.Model):
    TAGS = (
        ('v', 'Volcanic Eruption'),
        ('e', 'Earthquake')
    )

    title = models.CharField(max_length = 50)
    date = models.DateField(blank = True, null = True)
    longitude = models.DecimalField(max_digits = 7, decimal_places = 4)
    latitude = models.DecimalField(max_digits = 7, decimal_places = 4)
    place_based = models.BooleanField(default = False)
    tags = models.CharField(max_length = 3, choices = TAGS)
    description = models.TextField()

    def __str__(self):
        return self.title

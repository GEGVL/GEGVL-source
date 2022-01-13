from django.contrib import admin
from .models import *

admin.site.register(KnowledgeCard, KnowledgeCardAdmin)
admin.site.register(Video)

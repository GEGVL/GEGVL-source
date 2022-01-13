from rest_framework import serializers
from .models import KnowledgeCard

class KnowledgeCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeCard
        fields = ('__all__')
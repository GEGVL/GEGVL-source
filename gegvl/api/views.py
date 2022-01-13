from .models import KnowledgeCard
from .serializers import KnowledgeCardSerializer
from .models import KnowledgeCard
from rest_framework import generics

class KnowledgeCardView(generics.ListAPIView):
    queryset = KnowledgeCard.objects.all()
    serializer_class = KnowledgeCardSerializer
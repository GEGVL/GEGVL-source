from django.urls import path
from .views import KnowledgeCardView

urlpatterns = [
    path('', KnowledgeCardView.as_view()),
]
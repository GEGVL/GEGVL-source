from django.shortcuts import render
import os
from gegvl.settings import BASE_DIR

def index(request):
    return render(request, os.path.join(BASE_DIR, "frontend/build/index.html"))

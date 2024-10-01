from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'Service_Trade_Exporter/home.html')

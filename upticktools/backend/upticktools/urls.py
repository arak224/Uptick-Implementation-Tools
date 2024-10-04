from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView  # Import RedirectView
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', RedirectView.as_view(url='/home/')),  # Redirect base URL to /homepage/
    path('home/', TemplateView.as_view(template_name='index.html')), 
    path('service-trade-exporter/', TemplateView.as_view(template_name='index.html')), 
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

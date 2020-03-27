from django.urls import path
from . import views

app_name = "unitconv"
urlpatterns = [
    path('unitconv/convert/', views.convert, name="convert"),

]
from django.urls import path
from . import views

app_name = "gold"
urlpatterns = [
    path('gold/', views.index, name="index"),

]
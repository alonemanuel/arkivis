# notes/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.get_notes, name='get_notes'),
    path('notes/create/', views.create_note, name='create_note'),
    path('notes/update/<str:note_id>/', views.update_note, name='update_note'),
    path('notes/delete/<str:note_id>/', views.delete_note, name='delete_note'),
]

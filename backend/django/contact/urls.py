from django.urls import path
from . import views

urlpatterns = [
    path('', views.contact_form, name='contact_form'),  # Display the contact form
    path('contact_list/', views.contact_list, name='contact_list'),  # Display the list of contacts
    path('thank_you/', views.thank_you, name='thank_you'),  # Simple thank you page after submission
]

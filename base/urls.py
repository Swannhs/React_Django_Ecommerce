from django.urls import path

from base import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('products/<str:id>', views.getProduct, name='product'),
]

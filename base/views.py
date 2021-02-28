from django.http import JsonResponse

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.products import products


def getRoutes(request):
    routes = [
        '/api/products',
        '/api/products/create/',

        '/api/products/upload',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>',

        '/api/products/delete/<id>',
        '/api/products/<update>/<id>/',
    ]
    return JsonResponse(routes, safe=False)


@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProduct(request, id):
    product = None

    for i in products:
        if i['_id'] == id:
            product = i
            break
    return Response(product)

from django.http import JsonResponse

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

# from base.models import Product
from base.models import Product
from base.serializer import ProductSerializer


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
    # products = {
    #     'name': 'Swann'
    # }
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

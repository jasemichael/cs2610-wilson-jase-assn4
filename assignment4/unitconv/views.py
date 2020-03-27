from django.shortcuts import render
from django.http import JsonResponse
from .models import Factor

def convert(request):
    fr0m = request.GET.get("from", "error")
    fr0m = fr0m.lower()
    value = request.GET.get("value", "error")
    try:
        float(value)
        if float(value) < 0:
            raise
    except:
        json = {'error': "Invalid unit conversion request"}
    else:
        c = Factor.objects.get(pk=1)
        factors = {'troy ounce': c.t_oz, "imperial pound": c.lb, "ounce": c.oz, "ton": c.ton, "kilogram": c.kg, "gram": c.g}
        json = {'units': fr0m, 'value': (factors[fr0m]*float(value))}
    return JsonResponse(json)
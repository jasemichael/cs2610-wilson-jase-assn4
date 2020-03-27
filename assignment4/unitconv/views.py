from django.shortcuts import render
from django.http import JsonResponse
from .models import Factor

def convert(request):
    getParams = request.GET.items()
    value = getParams['value']
    if value <= 0:
        json = {'error': "Invalid unit conversion request"}
    else:
        fr0m = getParams['from']
        c = Factor.objects.get(pk=1)
        factors = {'t_oz': c.t_oz, "lb": c.lb, "oz": c.oz, "ton": c.ton, "kg": c.kg, "g": c.g}
        json = {'units': fr0m, 'value': factors[fr0m]*value}
    return JsonResponse(json)
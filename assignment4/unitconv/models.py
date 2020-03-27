from django.db import models

class Factor(models.Model):
    t_oz = models.FloatField()
    lb = models.FloatField()
    oz = models.FloatField()
    ton = models.FloatField()
    kg = models.FloatField()
    g = models.FloatField()
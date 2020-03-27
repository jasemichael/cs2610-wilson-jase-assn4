from django.db import models

class Factor(models.Model):
    t_oz = models.IntegerField()
    lb = models.IntegerField()
    oz = models.IntegerField()
    ton = models.IntegerField()
    kg = models.IntegerField()
    g = models.IntegerField()
from django.db import models
import datetime
import os

# Create your models here.
class Homepage(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="homepage/")
    image2=models.ImageField(upload_to="homepage/",null=True)
    description = models.TextField(max_length=1000)
    category = models.CharField(max_length=50)
    default = models.CharField(max_length=100 , default="Book ticket" )
    format = models.CharField(max_length=100, default="2D, HDR By Barco, DOLBY CINEMA 2D, EPIQ");
    price = models.IntegerField(null=True, blank=True)
    genre = models.CharField(max_length=100, blank=True)
    time = models.CharField(max_length=100)
    certificate = models.CharField(max_length=100, default="U")
    hour = models.CharField(max_length=100,null=True)
    date = models.CharField(max_length=100)
    language = models.CharField(max_length=100,null=True,default="Tamil,English")
    location = models.CharField(max_length=100,null=True)
    concert_type = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.title

class Moviefilter(models.Model):
    title = models.CharField(max_length=100 ,null=True);
    language = models.CharField(max_length=100 ,null=True,default="Tamil,English");
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    time = models.CharField(max_length=100,default="2h 30m")
    format = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True)
    default = models.CharField(max_length=100 , default="Book ticket" )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title

class StreamingMovies(models.Model):
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=100);
    language = models.CharField(max_length=100 ,null=True,default="Tamil,English");
    time = models.CharField(max_length=100, null=True )
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    format = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True);
    backgroundimage = models.ImageField(upload_to='homepage/',null=True,blank=True);
    default = models.CharField(max_length=100,default="Buy ₹89")
    price = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title

class EventFilter(models.Model):
    category = models.CharField(max_length=100,null=True)
    title = models.CharField(max_length=100 ,null=True);
    language = models.CharField(max_length=100 ,null=True,default="Tamil,English");
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    time = models.CharField(max_length=100)
    hour = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True)
    image2 = models.ImageField(upload_to ='homepage/',null =True ,blank=True)
    morefilter = models.CharField(max_length=100,null=True)
    price =models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100,null=True)
    concert_type = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title


class PlaysFilter(models.Model):
    category = models.CharField(max_length=100,null=True)
    title = models.CharField(max_length=100 ,null=True);
    language = models.CharField(max_length=100 ,null=True);
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    time = models.CharField(max_length=100)
    hour = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True)
    image2 = models.ImageField(upload_to ='homepage/',null =True ,blank=True)
    morefilter = models.CharField(max_length=100,null=True)
    price =models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100,null=True)
    concert_type = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title


class SportFilter(models.Model):
    category = models.CharField(max_length=100,null=True)
    title = models.CharField(max_length=100 ,null=True);
    language = models.CharField(max_length=100 ,null=True);
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    time = models.CharField(max_length=100)
    hour = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True)
    image2 = models.ImageField(upload_to ='homepage/',null =True ,blank=True)
    morefilter = models.CharField(max_length=100,null=True)
    price =models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100,null=True)
    concert_type = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title

class ActivitiesFilter(models.Model):
    category = models.CharField(max_length=100,null=True)
    title = models.CharField(max_length=100 ,null=True);
    language = models.CharField(max_length=100 ,null=True);
    genre = models.CharField(max_length=100 ,null=True);
    certificate = models.CharField(max_length=100, null =True);
    time = models.CharField(max_length=100)
    hour = models.CharField(max_length=100, null = True);
    date = models.CharField(max_length=100, null= True);
    description = models.CharField(max_length=1000 ,null=True, blank=True);
    image = models.ImageField(upload_to='homepage/',null=True, blank=True)
    image2 = models.ImageField(upload_to ='homepage/',null =True ,blank=True)
    morefilter = models.CharField(max_length=100,null=True)
    price =models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100,null=True)
    concert_type = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100)
    updated_by = models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.title

class TheaterList(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to="homepage/",null=True,blank=True)
    cancel = models.CharField(max_length=100,default="Non-cancelable")

    def __str__(self):
        return self.name

class ShowTime(models.Model):
    theatre = models.ForeignKey(TheaterList,on_delete=models.CASCADE,related_name="showtimes")
    date = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    specialformat = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.theatre.name

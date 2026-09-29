from rest_framework import serializers
from .models import *

class HomepageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Homepage
        fields = "__all__"

class MovieFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moviefilter
        fields="__all__"
class StreamingMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = StreamingMovies
        fields="__all__"
class EventFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventFilter
        fields="__all__"

class PlaysFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaysFilter
        fields="__all__"

class SportFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportFilter
        fields= "__all__"

class ActivitiesFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivitiesFilter
        fields="__all__"

class TheaterListSerializer(serializers.ModelSerializer):
    class Meta:
        model =TheaterList
        fields="__all__"

class ShowTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model=ShowTime
        fields="__all__" 
from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *


class HomepageView(APIView):
    def get(self, request):
        homepage = Homepage.objects.all()
        serializer = HomepageSerializer(homepage, many=True)
        return Response(serializer.data)


class MoviefilterView(APIView):
    def get(self, request):
        movies = Moviefilter.objects.all()
        serializer = MovieFilterSerializer(movies, many=True)
        return Response(serializer.data)
        
class StreamingMoviesView(APIView):
    def get(self ,request):
        streaming = StreamingMovies.objects.all()
        serializer = StreamingMovieSerializer(streaming , many=True)
        return Response(serializer.data)

class EventDataView(APIView):
    def get(self,request):
        events = EventFilter.objects.all()
        serializer =EventFilterSerializer(events,many=True)
        return Response(serializer.data)

class PlaysFilterView(APIView):
    def get(self,request):
        Play = PlaysFilter.objects.all()
        serializer=PlaysFilterSerializer(Play,many=True)
        return Response(serializer.data)

class SportFilterView(APIView):
    def get(self,request):
        sport = SportFilter.objects.all()
        serializer = SportFilterSerializer(sport,many=True)
        return Response(serializer.data)

class ActivitiesFilterView(APIView):
    def get(self,request):
        activities = ActivitiesFilter.objects.all()
        serializer = ActivitiesFilterSerializer(activities, many=True)
        return Response(serializer.data)

class TheaterListView(APIView):
    def get(self,request):
        theater = TheaterList.objects.all()
        serializer = TheaterListSerializer(theater,many=True)
        return Response(serializer.data)

class ShowTimeView(APIView):
    def get(self,request):
        show = ShowTime.objects.all()
        serializer = ShowTimeSerializer(show,many=True)
        return Response(serializer.data)

from django.urls import path
from .views import *

urlpatterns = [
    path("homepage/", HomepageView.as_view()),
    path("Moviefilter/",MoviefilterView.as_view()),
    path("StreamingMovies/",StreamingMoviesView.as_view()),
    path("EventFilter/",EventDataView.as_view()),
    path("PlaysFilter/",PlaysFilterView.as_view()),
    path("SportFilter/",SportFilterView.as_view()),
    path("ActivitiesFilter/",ActivitiesFilterView.as_view()),
    path("TheaterList/",TheaterListView.as_view()),
    path("ShowTime/",ShowTimeView.as_view()),
]